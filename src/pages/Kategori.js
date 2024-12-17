import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';

import Sidebar from '../component/Sidebar'; 

import axios from 'axios';
import Header from '../component/Header'; // Import Navbar component
import Footer from '../component/Footer'; // Import Footer component
import 'admin-lte';

function Kategori() {

    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');
  
    const handleOpenModal = () => {
      setModalTitle('Add Category');
      setModalBody(
        <form>
          <div className="form-group">
            <label>Category Name</label>
            <input type="text" className="form-control" placeholder="Enter category name" />
          </div>
        </form>
      );
      setModalShow(true);
    };
  
    const handleCloseModal = () => {
      setModalShow(false);
    };
  

    return (
       
    <div className="wrapper">
        
        <Header />
        <Sidebar />

        
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Data Kategori</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Kategori</li>
                    </ol>
                    </div>
                </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
              
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Data Kategori</h3>
                    </div>
                    <div class="card-body">
                        
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

export default Kategori;