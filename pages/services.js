import React, { useRef, useState, createRef } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import { Container,Grid,Button  } from '@material-ui/core';

import MenuMobile from '../components/menu_mobile';
import Footer from '../components/footer'
import Ga from '../components/layout/ga';
import DropzoneUpload from '../components/drozone'
import Client from '../components/list-client/client'

import { useStore } from "../lib/store";

import CircularProgress from '@material-ui/core/CircularProgress';

function Services () {
    const {state, dispatch} = useStore();
    const [loading, setLoading] = useState(false);
    const [hideNotif, setHideNotif] = useState({opacity:0,visibility:'hidden'});

    function klik(params) {

        if (state.file.length > 0) {
            setLoading(true)
            const data = new FormData()
            for (let i = 0; i < state.file.length; i++) {
                data.append('file', state.file[i])
            }

            fetch('https://api.prosperventura.com/api/upload',{
                method:'POST',
                body:data
            }).then(res=>{
                if (res.status === 200) {
                    setHideNotif({opacity:1,visibility:'visible'})
                    setLoading(false)

                    setTimeout(() => {
                        setHideNotif({opacity:0,visibility:'hidden'})
                    }, 2000);

                    setTimeout(() => {
                        window.location.reload()
                    }, 2500);

                } else {
                    setLoading(false)
                    alert('data gagal terkirim')
                    window.location.reload()
                }
            })
        }

    }

    return (
        <React.Fragment>
            <Head>
                <title>Prosper Kapital Ventura | Services</title>
            </Head>
            <Ga>
            <header className="header_services">
                <Container maxWidth='xl'>
                    <menu>
                        <Grid container>
                            <Grid item xs={3}>
                                <Link href="/"><a><img src="/images/logo-prosper-putih.png" /></a></Link>
                            </Grid>
                            <Grid item xs={9} className="list_menu">
                                <ul>
                                    <li><Link href="/about"><a>About</a></Link></li>
                                    <li><Link href="/team"><a>Our Team</a></Link></li>
                                    <li><Link href="/services"><a className="border-init">Our Services</a></Link></li>
                                    <li><Link href="/contact"><a>Contact</a></Link></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </menu>
                    <MenuMobile/>
                    <div className="header_text">
                        <h1>What We Do <br/> to Keep Your Prosperity</h1>
                        <p>The main foundation of Prosper Ventura’s portfolio remains a<br/> solid track-record in the foreign exchange market, youthful<br/> startups, and promising projects.</p>
                    </div>
                </Container>
            </header>
            <main className="services">
                <section className="section_product_services">
                    <Container maxWidth="xl">
                        <div className="section_product_services-wrapper" id="assets-management">
                            <div className="img">
                                <img src="/photos/chris-liverani.jpg" width="100%" height="100%"/>
                            </div>
                            <div className="desc">
                                <h2>Asset Management</h2>
                                <p>Providing a team with established track records of profitable gain in the foreign exchange market within the last four years. Prosper Ventura implements a consumer oriented service in the foundation building, active monitoring, and data analysis in the global currency market. Our dedicated team of analysts and traders will collaborate under consumer directives in managing the growth of allocated client equity.</p>
                                <br/>
                                <br/>
                                <p>Partnership details regarding management fees and contract duration are available for enquiry from our account team.</p>
                                <br/>
                                <br/>
                                <h3>Portfolio</h3>
                                <ul>
                                    <li>
                                        <div className="click">
                                            <p>&gt;</p>
                                            <h4>Forexdana Fund</h4>
                                        </div>
                                        <ul className="portAssets" style={{display:'block'}}>
                                            <li>
                                            Using a highly sophisticated and secure platform, our analytical and research team have
                                            provided clear results in global currency market for clients. Providing comprehensive
                                            insights, leading crucial decision making, and delivering consistent returns while
                                            communicating all possible actions.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="section_product_services-wrapper" id="capital-fundraising">
                            <div className="img">
                                <img src="/photos/annie-spratt.jpg" width="100%" height="100%"/>
                            </div>
                            <div className="desc">
                                <h2>Capital Fundraising</h2>
                                <p>Many new promising ventures are seeking to innovate the new frontiers of industry in this new industrial landscape. Our goal is to connect these companies in early-stage enterprise with the appropriate source of capital from experienced clients. Using our data analytical approach, we match potential partnerships in both long and short term objectives. Ranging from projects to entrepreneurial efforts, this niche approach works in the interests of all stakeholders in exciting new markets.</p>
                                <br/>
                                <br/>
                                <p>Our consulting based service is open to discussion for all possible interests of capital investment.</p>
                                <br/>
                                <br/>
                                <h3>Portfolio</h3>
                                <ul>
                                    <Client title={'PT. Sri Dharma Tunggal'} data={'data1'}/>
                                    <Client title={'PT. Tangguh Swakarsa Mandiri'} data={'data2'}/>
                                    <Client title={'PT. Bersih Seperti Baru'} data={'data3'}/>
                                    <Client title={'PT. Northcliff Indonesia'} data={'data4'}/>
                                    <Client title={'Esco Auto'} data={'data5'}/>
                                    <Client title={'Collab Store'} data={'data6'}/>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="section_product_services-wrapper" id="fixes-rate-notes">
                            <div className="img">
                                <img src="/photos/markus-spiske.jpg" width="100%" height="100%"/>
                            </div>
                            <div className="desc">
                                <h2>Fixed Rate Notes</h2>
                                <p>Coming Soon</p>
                                <p>In the current market, we provide a long term investment service to expand your portfolio in the form of fixed returns of 12.5% annually. Utilizing strategic investments with high quality ratings within our extensive partner network, we promise a streamlined and efficient option in the current dynamic economic landscape</p>
                                <br/>
                                <br/>
                                <p>Details and duration are available for discussion with our account team.</p>
                            </div>
                        </div> */}
                    </Container>
                </section>
                <section className="section_how_services">
                    <Container maxWidth="xl">
                        <Grid container>
                            <Grid item xs={12}>
                                <div className="section_how_services-title">
                                    <h2>How Does It Work?</h2>
                                    <br/>
                                    <p>The 3 simple Pre-Investment steps:</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_how_services-desc">
                                    <div className="img">
                                        <img src="/images/iconfinder_content-form-contract-article-paper.png" width="100%"/>
                                    </div>
                                    <div className="desc">
                                        <h3>Document Submission</h3>
                                        <p>In conducting the Pre-Investment to be carried out, there are several documents that must be attached as evaluation material. This document is useful for us to see the legality of the company, as well as the company’s journey in developing the business.</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_how_services-desc">
                                    <div className="img">
                                        <img src="/images/iconfinder_m.png" width="100%"/>
                                    </div>
                                    <div className="desc">
                                        <h3>Introductory Meeting</h3>
                                        <p>After the process of attaching documents, the company has complete legality, and has a good vision in carrying out the company’s business activities. The next process is an introductory meeting.</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_how_services-desc">
                                    <div className="img">
                                        <img src="/images/iconfinder_OUTLINE_Bussiness_and_Media.png" width="100%"/>
                                    </div>
                                    <div className="desc">
                                        <h3>Negotiation</h3>
                                        <p>The negotiation process plays an important role in undergoing a collaborative process. Through the negotiation process, it is hoped that synergy and sustainable collective agreements can be reached.</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="start">
                                    <Link href="#upload"><a className="link_button"><Button variant="outlined" color="primary">Start Now</Button></a></Link>
                                    <img src="/images/dropdown-arrow-blue.png" />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_upload_services" id="upload">
                    <Container maxWidth="xl">
                        <Grid container>
                            <Grid item xs={12}>
                                <div className="section_upload_services-title">
                                    <h2>Submit Your Documents</h2>
                                    <p>Upload files in .pdf format in the boxes below (maximum 10 MB/file).</p>
                                </div>
                            </Grid>
                            <DropzoneUpload title="Company Profile"/>
                            <DropzoneUpload title="Business Securities"/>
                            <DropzoneUpload title="Project Executive Summary"/>
                            <DropzoneUpload title="Surat Kredit Berdokumen dalam Negeri / Bank Garansi (Jika Ada)"/>
                            <DropzoneUpload title="Dokumen Jaminan / Agunan (Jika Ada)"/>
                            <DropzoneUpload title="Mutasi Rekening Bank (6 Bulan Terakhir)"/>

                            <Grid item xs={12}>
                                <div className="section_upload_services-submit">
                                    <Button onClick={klik}>{loading ? <CircularProgress /> : 'SUBMIT'}</Button>
                                </div>
                                <p className="notif_submit" style={{opacity:hideNotif.opacity,visibility:hideNotif.visibility}}>Your documents have been succesfully submitted. We'l contact you shortly.</p>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
            <Footer/>
            </Ga>
        </React.Fragment>
    )
}

export default Services
