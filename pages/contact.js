import React, { Component, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Container,Grid,Button,GridListTile,Typography, Divider,CircularProgress,TextField  } from '@material-ui/core'

import {useFormik } from 'formik'
import * as Yup from 'yup';

import Footer from '../components/footer'


function Contact () {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
          firstname:'',
          lastname:'',
          companyname: '',
          email:'',
          phonenumber:'',
          message:'',
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Cannot be left blank').min(3, 'Must be 3 characters or less'),
            lastname: Yup.string().required('Cannot be left blank').min(3, 'Must be 3 characters or less'),
            companyname: Yup.string().required('Cannot be left blank').min(3, 'Must be 3 characters or less'),
            email: Yup.string()
                .email('Sorry, that is not a valid email address')
                .required('Cannot be left blank'),
            phonenumber: Yup.number(),
            message: Yup.string().required('Cannot be left blank').min(3, 'Must be 3 characters or less'),
        }),
        onSubmit: (values,{setFieldError}) => {
            const data = {
                firstname: values.firstname,
                lastname: values.lastname,
                companyname: values.companyname,
                email: values.email,
                phonenumber: values.phonenumber,
                message: values.message,
            }

            console.log(data);

            fetch('http://localhost:3007/api/postform',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({data})
            })

        },
    });

    return (
        <React.Fragment>
            <header>
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
                        <h1>Contact Us</h1>
                    </div>
                </Container>
            </header>
            <main className="contact">
                <section className="section_infoandform_contact">
                    <Container>
                        <Grid container>
                            <Grid item xs={12}>
                                <div className="title">
                                    <p>The following information is provided to help you connect <br/>with the most appropriate Prosper Kapital Ventura resource for your needs<br/> whether you'd like to contact us by phone, e-mail, or contact form.</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="prosper_info">
                                    <h3>PT. Prosper Kapital Ventura</h3>
                                    <p>Vinotti Living Building, 3rd Floor</p>
                                    <p>Jl. Cipinang Muara Raya No. 8, RT. 4,</p>
                                    <p>Cipinang Besar Sel., Kecamatan Jatinegara</p>
                                    <p>Jakarta Timur, DKI Jakarta 13460</p>
                                    <br/>
                                    <br/>
                                    <p><span>E</span>contact@prosperventura.com</p>
                                    <p><span>P</span>+62813 8459 2625</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="contact_form">
                                    <form onSubmit={formik.handleSubmit}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    error={formik.errors.firstname && formik.touched.firstname ? true : null}
                                                    helperText={formik.errors.firstname && formik.touched.firstname ? formik.errors.firstname : null}
                                                    autoComplete="fname"
                                                    name="firstname"
                                                    variant="outlined"
                                                    fullWidth
                                                    id="firstname"
                                                    placeholder="First Name"
                                                    autoFocus
                                                    onChange={formik.handleChange} value={formik.values.firstname || ''}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    error={formik.errors.lastname && formik.touched.lastname ? true : null}
                                                    helperText={formik.errors.lastname && formik.touched.lastname ? formik.errors.lastname : null}
                                                    autoComplete="lname"
                                                    name="lastname"
                                                    variant="outlined"
                                                    fullWidth
                                                    id="lastname"
                                                    placeholder="Last Name"
                                                    onChange={formik.handleChange} value={formik.values.lastname}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    error={formik.errors.companyname && formik.touched.companyname ? true : null}
                                                    helperText={formik.errors.companyname && formik.touched.companyname ? formik.errors.companyname : null}
                                                    autoComplete="cname"
                                                    name="companyname"
                                                    variant="outlined"
                                                    fullWidth
                                                    id="companyname"
                                                    placeholder="Company Name"
                                                    onChange={formik.handleChange} value={formik.values.companyname}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    error={formik.errors.email && formik.touched.email ? true : null}
                                                    helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null}
                                                    name="email"
                                                    variant="outlined"
                                                    fullWidth
                                                    id="email"
                                                    placeholder="Email"
                                                    onChange={formik.handleChange} value={formik.values.email}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    error={formik.errors.phonenumber && formik.touched.phonenumber ? true : null}
                                                    helperText={formik.errors.phonenumber && formik.touched.phonenumber ? formik.errors.phonenumber : null}
                                                    name="phonenumber"
                                                    variant="outlined"
                                                    fullWidth
                                                    id="phonenumber"
                                                    placeholder="Phone Number"
                                                    onChange={formik.handleChange} value={formik.values.phonenumber}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    error={formik.errors.message && formik.touched.message ? true : null}
                                                    helperText={formik.errors.message && formik.touched.message ? formik.errors.message : null}
                                                    name="message"
                                                    variant="outlined"
                                                    fullWidth
                                                    id="message"
                                                    placeholder="Message"
                                                    onChange={formik.handleChange} value={formik.values.message}
                                                />
                                            </Grid>
                                            <Grid item container xs={12} style={{paddingTop:0}}>
                                                <p className="password_error">
                                                    {formik.errors.password && formik.touched.password ? formik.errors.password : null}
                                                </p>
                                            </Grid>
                                            <Grid item xs={12} className="button_wrapper">
                                                <Button class="button_submit" variant="outlined" color="primary" type="submit" disabled={loading} >
                                                    Submit
                                                </Button>
                                                {loading && <CircularProgress size={24} className="buttonProgress" />}
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <Container> <div className="divider"></div></Container>
                <section className="section_location_contact">
                    <Container>
                        <Grid container>
                            <Grid item xs={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253839.4288106847!2d106.55676354758008!3d-6.231917547432736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f36f368ebbd5%3A0x98c0b77a7bc81932!2sVinoti%20Living!5e0!3m2!1sen!2sid!4v1580240563619!5m2!1sen!2sid" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact
