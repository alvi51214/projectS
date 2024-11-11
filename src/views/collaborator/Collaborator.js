import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import '../../../src/index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Collaborator() {
  return (
    <div>
      <PageContainer>
        <DashboardCard>
        <div className="row">
            <div className="col-lg-12">
              <h2>Collaborators</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Link to="/add-collaborator" className="btn btn-primary float-end">
                Add Collaborator
              </Link>
            </div>
          </div>
          <table className='table mt-2'>
            <thead className='thead'>
              <tr className='tr'>
                <th>Customer Type</th>
                <th>Salutation</th>
                <th>Display Name</th>
                <th>Company Name</th>
                <th>Date of Birth</th>
                <th>Taxable</th>
                <th>Is Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='tbody'>
                <tr>
                  <td>Test Business</td>
                  <td>Mrs</td>
                  <td>Test Name</td>
                  <td>Test Company</td>
                  <td>17-07-2000</td>
                  <td>Yes</td>
                  <td>Yes</td>
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

export default Collaborator
