import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Redirect,
} from 'react-router-dom';
import Web3 from 'web3';

import './App.css';

import Lending from './abis/Lending.json';
import Mortgage from './abis/Mortgage.json';

import Requests_List from './components/common/Requests_List';

import Home from './components/common/Home';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Add_Request from './components/common/Add_Request';
import User_Requests from './components/common/User_Requests';
import Lender_Transactions from './components/common/Lender_Transactions';
import Borrower_Transactions from './components/common/Borrower_Transactions';

import Navbar from './components/templates/Navbar';
// import Profile from "./components/users/Profile";

import ls from 'local-storage';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

function App() {
    // const [account, setAccount] = useState(0);

    // const LoanState = {
    //     0: 'REPAID',
    //     1: 'ACCEPTED',
    //     2: 'WAITING',
    //     3: 'PAID',
    //     4: 'FAILED',
    // };

    // const providerURL = process.env.PROVIDER_URL || 'http://localhost:7545';

    // const loadWeb3 = async () => {
    //     if (window.ethereum) {
    //         window.web3 = new Web3(window.ethereum);
    //         await window.ethereum.enable();
    //     } else if (window.web3) {
    //         window.web3 = new Web3(window.web3.currentProvider);
    //     } else {
    //         window.alert(
    //             'Non-Ethereum browser detected. You should consider trying MetaMask!'
    //         );
    //     }
    // };

    // const loadBlockchainData = async () => {
    //     const web3 = window.web3;

    //     const accounts = await web3.eth.getAccounts();
    //     setAccount(accounts[0]);

    //     const networkId = await web3.eth.net.getId();

    //     // Load Lending contract
    //     const lendingData = Lending.networks[networkId];
    //     if (lendingData) {
    //         const lending = new web3.eth.Contract(
    //             Lending.abi,
    //             lendingData.address
    //         );
    //         this.setState({ lending });
    //         let stakingBalance = await lending.methods
    //             .stakingBalance(this.state.account)
    //             .call();
    //         this.setState({ stakingBalance: stakingBalance.toString() });
    //     } else {
    //         window.alert('Lending contract not deployed to detected network.');
    //     }

    //     // this.setState({ loading: false });
    // };

    // useEffect(() => {
    //     loadWeb3();
    //     // await loadBlockchainData();

    //     if (window.ethereum) {
    //         window.ethereum.on('chainChanged', () => {
    //             window.location.reload();
    //         });
    //         window.ethereum.on('accountsChanged', () => {
    //             window.location.reload();
    //         });
    //     }
    // }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route exact path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="profile" element={<Profile />} />

                    {/* <Route path="users" element={<UsersList />} /> */}
                    <Route path="requests_list" element={<Requests_List />} />
                    <Route path="add_request" element={<Add_Request />} />
                    <Route path="user_requests" element={<User_Requests />} />
                    <Route
                        path="lender_transactions"
                        element={<Lender_Transactions />}
                    />
                    <Route
                        path="borrower_transactions"
                        element={<Borrower_Transactions />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
