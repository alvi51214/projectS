import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import '../../../src/index.css';


function AddCollaborator() {
  return (
    <PageContainer>
        <DashboardCard>
            <div>
            <form className="container mt-4">
                <h3>Add Collaborator</h3>

                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Collaborator Type</label>
                        <select
                        id="type"
                        name="type"
                        className="form-select"
                        required
                        >
                        <option value="">Select Type</option>
                        <option value="Employee">Employee</option>
                        <option value="Subcontractor">Subcontractor</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="companyName" className="form-label">Company Name</label>
                        <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        name="companyName"
                        
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contact Information</label>
                        <div className="d-flex mb-2">
                            <select
                            className="form-select me-2"
                            required
                            >
                            <option value="">Select Type</option>
                            <option value="Phone">Phone</option>
                            <option value="Email">Email</option>
                            </select>
                            <input
                            type="text"
                            className="form-control"
                            required
                            />
                        </div>
                        {/* <button type="button" className="btn btn-secondary btn-sm">Add Contact</button> */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="remarks" className="form-label">Remarks/Notes</label>
                        <textarea
                        className="form-control"
                        id="remarks"
                        name="remarks"
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="hourRate" className="form-label">Hour Rate</label>
                        <input
                        type="number"
                        className="form-control"
                        id="hourRate"
                        name="hourRate"
                        required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Work Schedule</label>
                        <div className="d-flex mb-2">
                            <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Location"/>
                            <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Rate" />
                            <select
                                className="form-select">
                                <option value="">Payment Type</option>
                                <option value="Cash">Cash</option>
                                <option value="Check">Check</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Direct Deposit">Direct Deposit</option>
                            </select>
                        </div>
                        {/* <button type="button" className="btn btn-secondary btn-sm">Add Work Schedule</button> */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="insuranceExpiry" className="form-label">Insurance Expiry Date</label>
                        <input
                        type="date"
                        className="form-control"
                        id="insuranceExpiry"
                        name="insuranceExpiry"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="insuranceProof" className="form-label">Attach Insurance Proof</label>
                        <input
                        type="file"
                        className="form-control"
                        id="insuranceProof"
                    
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                        type="checkbox"
                        className="form-check-input"
                        id="allowPortal"
                        />
                        <label className="form-check-label" htmlFor="allowPortal">Allow Portal Access</label>
                    </div>

                    
                        <>
                        <div className="mb-3">
                            <label htmlFor="portalExpiry" className="form-label">Portal Expires</label>
                            <input
                            type="date"
                            className="form-control"
                            id="portalExpiry"
                            name="portalExpiry"
                        
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastAccess" className="form-label">Date of Last Access</label>
                            <input
                            type="date"
                            className="form-control"
                            id="lastAccess"
                            name="lastAccess"
                            
                            />
                        </div>
                        </>
                    

                    <button type="submit" className="btn btn-primary">Save Collaborator</button>
            </form>
            </div>
        </DashboardCard>
    </PageContainer>
  )
}

export default AddCollaborator
