import React from 'react'
import TopBar from '../../components/topbar/topBar'
import Table from '../../components/common/table';
const ComplaintHistory = () => {
    return (
        <div>
            <TopBar title="Complaint History"/>

            <div className="m-10">
            <Table/>
            </div>
            
        </div>
    )
}

export default ComplaintHistory
