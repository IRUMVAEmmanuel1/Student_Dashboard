import React from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';


import SideBar from '../../components/sidebar/sideBar';
import Dashboard from './Dashboard';
import MakeComplaint from './MakeComplaint';
import Feedback from './Feedback';
import AccountSetting from './AccountSetting';
import ComplaintHistory from './ComplaintHistory';


function Layout() {
    return (
        <Router>
        <div className="grid grid-cols-12 h-screen">
             {/* sideBar */}
            <div className="bg-gray-100 col-span-3">
                <SideBar/>
            </div>

            {/* otherPart */}

            <div className="col-span-9">
                <Switch>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/makeComplaint' component={MakeComplaint}/>
                    <Route path='/complaintHistory' component={ComplaintHistory}/>
                    <Route path='/feedback' component={Feedback}/>
                    <Route path='/accountSetting' component={AccountSetting}/>
                </Switch>
            </div>
        </div>
        </Router>
    )
}

export default Layout
