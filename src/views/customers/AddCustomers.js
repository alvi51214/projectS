import React, {useState} from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import '../../../src/index.css';
import { Tabs, Tab } from 'react-bootstrap';


function AddCustomers() {

    const [activeTab, setActiveTab] = useState('main');


  return (
    <div>
      <PageContainer>
        <DashboardCard>
        <div className="container mt-4">
            <h2>Add Customer</h2>
            <form>
                <div className="mb-3">
                <label>Customer Type</label>
                <select name="customerType" className="form-select">
                    <option value="">Select</option>
                    <option value="Business">Business</option>
                    <option value="Homeowner">Homeowner</option>
                    <option value="Contractor">Contractor</option>
                </select>
                </div>
                <div className="mb-3">
                    <label>Salutation</label>
                    <input name="salutation" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>First Name</label>
                    <input name="firstName" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input name="lastName" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Company Name</label>
                    <input name="companyName" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Date of Birth / In Business</label>
                    <input type="date" name="dateOfBirth" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="taxable" className="form-check-input" />
                    <label className="form-check-label">Taxable</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="isActive" className="form-check-input" />
                    <label className="form-check-label">Is Active</label>
                </div>

            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
                <Tab eventKey="location" title="Location">
                    <div className="form-group">
                        <label>Building Name</label>
                        <input type="text" className="form-control" placeholder="Building Name" />
                    </div>
                    <div className="form-group">
                        <label>Contact Information</label>
                        <input type="text" className="form-control" placeholder="Name, Phone, Email" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Mail, Shipping, Billing, etc." />
                    </div>
                    <div className="my-3 form-check">
                        <input type="checkbox" name="isActive" className="form-check-input" />
                        <label className="form-check-label">Contract</label>
                    </div>
                </Tab>

        
                <Tab eventKey="documents" title="Documents">
                <div className="form-group">
                    <label>Upload Document</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Document Type</label>
                    <select className="form-control">
                    <option>Contract</option>
                    <option>Insurance Proof</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Insurance Expiry</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="my-3 form-check">
                    <input type="checkbox" name="isActive" className="form-check-input" />
                    <label className="form-check-label">Is Active</label>
                </div>
              
                </Tab>

                <Tab eventKey="accounting" title="Accounting">
                <div className="form-group">
                    <label>Account ID</label>
                    <input type="text" className="form-control" placeholder="Account ID" />
                </div>
                {/* Add more accounting related fields */}
                </Tab>

                <Tab eventKey="portal" title="Portal">

                <div className="my-3 form-check">
                    <input type="checkbox" name="allowportal" className="form-check-input" />
                    <label className="form-check-label">Allow Portal</label>
                </div>
                <div className="form-group">
                    <label>Expires</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Last Access</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label>User</label>
                    <input type="text" className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Email Validation Code</label>
                    <input type="text" className="form-control" placeholder="Validation Code" />
                </div>
                </Tab>
            </Tabs>
                <button type="submit" className="btn btn-primary mt-5">Save Customer</button>
            </form>
        </div>
        </DashboardCard>
      </PageContainer>
    </div>
  )
}

export default AddCustomers
