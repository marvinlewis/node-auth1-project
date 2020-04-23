import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>User Dashboard</h1>
            <Link to='/users'>
                USERS LIST
            </Link>
        </div>
    )
}
export default Dashboard;