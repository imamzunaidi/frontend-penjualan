import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function Sidebar() {

    const [user, setUser] = useState({});

    const history = useHistory();

    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
        try {
            const response = await axios.get(`http://localhost/backend-penjualan/public/api/detail-admin/${id}`);
            setUser(response.data.data);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {

        if(!token) {

            history.push('/');
        }
        
        fetchData();
    }, []);

    const logoutHanlder = async () => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('http://localhost/backend-penjualan/public/api/logout')
        .then(() => {

            localStorage.removeItem("token");
            history.push('/');
        });
    };


    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">Marketplace</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">{user.name}</a>
                </div>
                </div>
                <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                    <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw" />
                    </button>
                    </div>
                </div>
                </div>
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                
                    <Link to="/dashboard" className="nav-link">
                        <i className="nav-icon  fas fa-tachometer-alt" />
                        <p>Dashboard <span className="badge badge-info right">2</span> </p>
                    </Link> 

                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-database" />
                            <p>
                            Data Master
                            <i className="fas fa-angle-left right" />
                            </p>
                        </a>

                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to="/kategori" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Data Kategori</p>
                                </Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="/brand" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Data Brand</p>
                                </Link> 
                            </li><li className="nav-item">
                                <Link to="/satuan" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Data Satuan</p>
                                </Link> 
                            </li>
                        </ul>
                    </li>
                    
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-users" />
                            <p>
                            Data users
                            <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/examples/invoice.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Data Admin</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/profile.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Data Pelanggan</p>
                                </a>
                            </li>
                           
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="pages/gallery.html" className="nav-link">
                            <i className="nav-icon fas fa-file" />
                            <p>
                            Data Produk
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="pages/kanban.html" className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <p>
                            Data Pemesanan
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="" onClick={logoutHanlder} className="nav-link">
                            <i className="nav-icon fas fa-sign-out-alt" />
                            <p>
                            Logout
                            </p>
                        </a>
                    </li>
                    
                </ul>
                </nav>
            </div>
        </aside>


    );
}

export default Sidebar;