import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import '../../../src/index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Supplier() {
  return (
    <div>
        <PageContainer>
            <DashboardCard>
                <div className="row">
                    <div className="col-lg-12">
                    <h2>Suppliers</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <Link to="/add-supplier" className="btn btn-primary float-end">
                        Add Supplier
                    </Link>
                    </div>
                </div>
                <table className='table mt-2'>
                    <thead className='thead'>
                    <tr className='tr'>
                        <th>Supplier Name</th>
                        <th>Contact</th>
                        <th>Notes</th>
                        <th>Products</th>
                        <th>Expiry Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody className='tbody'>
                        <tr>
                            <td>Test Business</td>
                            <td>4123894723894</td>
                            <td>Test Note</td>
                            <td>Test Product</td>
                            <td>17-07-2000</td>
                            <td className='options-td'>
                                <button className="btn btn-outline-primary btn-sm">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Test Business</td>
                            <td>4123894723894</td>
                            <td>Test Note</td>
                            <td>Test Product</td>
                            <td>17-07-2000</td>
                            <td className='options-td'>
                                <button className="btn btn-outline-primary btn-sm">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Test Business</td>
                            <td>4123894723894</td>
                            <td>Test Note</td>
                            <td>Test Product</td>
                            <td>17-07-2000</td>
                            <td className='options-td'>
                                <button className="btn btn-outline-primary btn-sm">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Test Business</td>
                            <td>4123894723894</td>
                            <td>Test Note</td>
                            <td>Test Product</td>
                            <td>17-07-2000</td>
                            <td className='options-td'>
                                <button className="btn btn-outline-primary btn-sm">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Test Business</td>
                            <td>4123894723894</td>
                            <td>Test Note</td>
                            <td>Test Product</td>
                            <td>17-07-2000</td>
                            <td className='options-td'>
                                <button className="btn btn-outline-primary btn-sm">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Test Business</td>
                            <td>523459347852</td>
                            <td>Test Note</td>
                            <td>Test Product</td>
                            <td>17-07-2000</td>
                            <td className='options-td'>
                                <button className="btn btn-outline-primary btn-sm">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Test Business</td>
                            <td>4123894723894</td>
                            <td>Test Note</td>
                            <td>Test Product</td>
                            <td>17-07-2000</td>
                            <td className='options-td'>
                                <button className="btn btn-outline-primary btn-sm">
                                <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </DashboardCard>
        </PageContainer>
    </div>
  )
}

export default Supplier
