import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import '../../../src/index.css';

function AddSupplier() {
  return (
    <div>
        <PageContainer>
        <DashboardCard>
            <div>
                <form className="container mt-4">
                    <h3>Add Supplier</h3>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Supplier Name</label>
                        <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
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
                        <label htmlFor="productsSupplied" className="form-label">Products Supplied</label>
                        <input
                        type="text"
                        className="form-control"
                        id="productsSupplied"
                        name="productsSupplied"
                        />
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

                    <button type="submit" className="btn btn-primary">Save Supplier</button>
                </form>
            </div>
        </DashboardCard>
        </PageContainer>
    </div>
  )
}

export default AddSupplier
