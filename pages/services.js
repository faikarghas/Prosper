import React, { Component, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Container,Grid,Button,GridListTile,Typography, Divider  } from '@material-ui/core'
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import Footer from '../components/footer'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


function Services () {
    const [file,setFile] = useState()
    const pond = useRef()

    function submit(params) {
        console.log(file,'blabla');
    }
    return (
        <React.Fragment>
            <header className="header_services">
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
                                        <h4>Forexdana Fund</h4>
                                        Using a highly sophisticated and secure platform, our analytical and research team have
                                        provided clear results in global currency market for clients. Providing comprehensive
                                        insights, leading crucial decision making, and delivering consistent returns while
                                        communicating all possible actions.
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
                                    <li>
                                        <h4>PT. Sri Dharma Tunggal</h4>
                                        <ul>
                                            <li>
                                            <p>Project Tol Serpong Cinere</p>
                                            Client: CV Karya Wida Prakasa. 22 December 2018 – 2 January 2019
                                            <br/>
                                            <br/>
                                            Project details include the financing of essential construction materials for the development in cross-region infrastructural projects in collaboration with local
                                            </li>
                                            <li>
                                            <p>Project Tol Serpong Cinere</p>
                                            Client: CV Karya Wida Prakasa. 2 January 2019 – 17 April 2019
                                            <br/>
                                            <br/>
                                            Continuation of financing of cross-region infrastructural projects, including logistical efforts and the procurement of essential construction materials.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>PT. Tangguh Swakarsa Mandiri</h4>
                                        <ul>
                                            <li>
                                            <p>Procurement and Installation of construction projects for Menara BNI,Pejompongan</p>
                                            Client: PT. Bank Negara Indonesia (Persero) TBK. 19 August 2019
                                            <br/>
                                            <br/>
                                            Financing the procurement and installation of various essential building infrastructures for religious amenities during the continuing development for Menara BNI.
                                            </li>
                                            <li>
                                            <p>Procurement during construction projects for Gedung Plaza BNI and Gedung DDC Slipi</p>
                                            Client: PT. Bank Negara Indonesia (Persero) TBK. 30 September 2019
                                            <br/>
                                            <br/>
                                            Financing the procurement of essential building infrastructure for utility purposes during the continuing development for Gedung Plaza BNI and Gedung DDC Slipi.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>PT. Bersih Seperti Baru</h4>
                                        <ul>
                                            <li>
                                            <p>Loan based Capital Investment.</p>
                                            January 2019 – Continuous
                                            <br/>
                                            <br/>
                                            Capital financing for retail operations including the supply of goods, manpower, and utility costs of the Spotless brand.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>PT. Northcliff Indonesia</h4>
                                        <ul>
                                            <li>
                                            <p>Private Equity Investment</p>
                                            October 2018 – May 2019
                                            <br/>
                                            <br/>
                                            Management and optimization of surplus assets in the investment of various efforts by Northcliff Indonesia as growth catalyst.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>Esco Auto</h4>
                                        <ul>
                                            <li>
                                            <p>Private Equity Investment</p>
                                            18 March 2019 – 18 May 2019
                                            <br/>
                                            <br/>
                                            Initial financing for procurement of used consumer vehicles for Esco Auto, project deliverable enabled the retail operations of the company
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>Collab Store</h4>
                                        <ul>
                                            <li>
                                            <p>Private Equity Investment</p>
                                            March 2019 – Continuous
                                            <br/>
                                            <br/>
                                            Initial financing for procurement of imported goods for online retail operations of Collabs Store on a trusted consumer level marketplace.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="section_product_services-wrapper" id="fixed-rate-notes">
                            <div className="img">
                                <img src="/photos/markus-spiske.jpg" width="100%" height="100%"/>
                            </div>
                            <div className="desc">
                                <h2>Fixed Rate Notes</h2>
                                <p>In the current market, we provide a long term investment service to expand your portfolio in the form of fixed returns of 12.5% annually. Utilizing strategic investments with high quality ratings within our extensive partner network, we promise a streamlined and efficient option in the current dynamic economic landscape</p>
                                <br/>
                                <br/>
                                <p>Details and duration are available for discussion with our account team.</p>
                            </div>
                        </div>
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
                                    <h3>Upload files in .pdf format in the boxes below.</h3>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_upload_services-upload">
                                    <div className="title">
                                        <h4>Company Profile</h4>
                                    </div>
                                    {/* upload */}
                                    <FilePond
                                        name={"file"}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        server='https://api.prosperventura.com/api/upload'
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_upload_services-upload">
                                    <div className="title">
                                        <h4>Business Securities</h4>
                                    </div>
                                    {/* upload */}
                                    <FilePond
                                        name={"file"}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        server='https://api.prosperventura.com/api/upload'
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_upload_services-upload">
                                    <div className="title">
                                        <h4>Project Executive Summary</h4>
                                    </div>
                                    {/* upload */}
                                    <FilePond
                                        name={"file"}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        server='https://api.prosperventura.com/api/upload'
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_upload_services-upload">
                                    <div className="title">
                                        <h4>Surat Kredit Berdokumen dalam Negeri / Bank Garansi (Jika Ada)</h4>
                                    </div>
                                    {/* upload */}
                                    <FilePond
                                        name={"file"}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        server='https://api.prosperventura.com/api/upload'
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_upload_services-upload">
                                    <div className="title">
                                        <h4>Dokumen Jaminan / Agunan (Jika Ada)</h4>
                                    </div>
                                    {/* upload */}
                                    <FilePond
                                        name={"file"}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        server='https://api.prosperventura.com/api/upload'
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="section_upload_services-upload">
                                    <div className="title">
                                        <h4>Mutasi Rekening Bank (6 Bulan Terakhir)</h4>
                                    </div>
                                    {/* upload */}
                                    <FilePond
                                        name={"file"}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        server='https://api.prosperventura.com/api/upload'
                                    />
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

export default Services
