import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';

import Sidebar from '../component/Sidebar'; 

import axios from 'axios';
import Header from '../component/Header'; // Import Navbar component
import Footer from '../component/Footer'; // Import Footer component

function Dashboard() {

    return (
       
    <div className="wrapper">
        
        <Header />
        <Sidebar />

        
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Dashboard</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    </div>
                </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-info"><i className="far fa-envelope" /></span>
                            <div className="info-box-content">
                            <span className="info-box-text">Messages</span>
                            <span className="info-box-number">1,410</span>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-success"><i className="far fa-flag" /></span>
                            <div className="info-box-content">
                            <span className="info-box-text">Bookmarks</span>
                            <span className="info-box-number">410</span>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-warning"><i className="far fa-copy" /></span>
                            <div className="info-box-content">
                            <span className="info-box-text">Uploads</span>
                            <span className="info-box-number">13,648</span>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-danger"><i className="far fa-star" /></span>
                            <div className="info-box-content">
                            <span className="info-box-text">Likes</span>
                            <span className="info-box-number">93,139</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    
               
                </div>
            </section>
            <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
                <i className="fas fa-chevron-up" />
            </a>
        </div>

        <Footer />
    </div>
    )

}

export default Dashboard;