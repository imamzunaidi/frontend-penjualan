import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';

import Sidebar from '../component/Sidebar'; 

import axios from 'axios';
import Header from '../component/Header'; // Import Navbar component
import Footer from '../component/Footer'; // Import Footer component
import $ from 'jquery';  // Import jQuery to manage AdminLTE's modal
import DataTable from 'react-data-table-component';  // Import DataTable
import 'admin-lte';

function Kategori() {

    const [categories, setCategories] = useState([]);  // Categories data
    const [newCategory, setNewCategory] = useState('');  // Input for new category
    const [categoryName, setCategoryName] = useState(''); // Category name for updating
    const [categoryId, setCategoryId] = useState(null); // For storing category ID when updating
    const history = useHistory();


    useEffect(() => {
        fetchCategories();
    }, []);

     // Fetch categories from the backend
    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost/backend-penjualan/public/api/category', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // JWT token
                },
            });
            setCategories(response.data);
        } catch (error) {
            console.error("There was an error fetching categories:", error);
        }
    };


      // Handle creating a new category
    const createCategory = async () => {
        try {
            const response = await axios.post(
                'http://localhost/backend-penjualan/public/api/insert-category', 
                { name: newCategory },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setNewCategory(''); // Clear input field
            closeModal(); // Close modal
            fetchCategories(); // Refresh category list
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };


     // Handle updating an existing category
    const updateCategory = async () => {
        try {
            const response = await axios.put(
                `http://localhost/backend-penjualan/public/api/update-category/${categoryId}`, 
                { name: categoryName },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setCategoryName(''); // Clear input field
            setCategoryId(null); // Reset category ID
            closeModal(); // Close modal
            fetchCategories(); // Refresh category list
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

     // Handle deleting a category
     const deleteCategory = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/categories/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            fetchCategories(); // Refresh category list after deletion
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    // Show the modal for creating a new category
    const showCreateModal = () => {
        
        setCategoryName('');
        setCategoryId(null);
        setNewCategory('');
        // $('#categoryModal').modal('show');  // Show AdminLTE modal using jQuery
    };

    // Show the modal for updating a category
    const showEditModal = (category) => {
        setCategoryName(category.name);
        setCategoryId(category.id);
        $('#categoryModal').modal('show');  // Show AdminLTE modal using jQuery
    };

    // Close the modal
    const closeModal = () => {
        $('#categoryModal').modal('hide');  // Hide AdminLTE modal using jQuery
    };

     // Define columns for the DataTable
     const columns = [
        {
            name: 'Category Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div>
                    <button className="btn btn-warning" onClick={() => showEditModal(row)}>
                        Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteCategory(row.id)}>
                        Delete
                    </button>
                </div>
            ),
        }
    ];

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
                <button className="btn btn-primary mb-3" onClick={showCreateModal}><i className='fas fa-plus'></i> Add Category</button>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Data Kategori</h3>
                    </div>
                    <div class="card-body">
                        
                    </div>
                    </div>
                </div>
            </section>

                <div className="modal fade" id="categoryModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="categoryModalLabel"></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="categoryName">Category Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="categoryName" 
                                       
                                        placeholder="Enter category name" 
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            
            <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
                <i className="fas fa-chevron-up" />
            </a>
        </div>

        <Footer />
    </div>

    
    )

}

export default Kategori;