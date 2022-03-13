import { BrowserRouter, Routes, Route, Outlet, Redirect } from "react-router-dom";
import "./App.css";

// import UsersList from "./components/users/UsersList";
import Products_List from "./components/common/Products_List";

import Home from "./components/common/Home";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Add_Request from "./components/common/Add_Request";
import User_Requests from "./components/common/User_Requests";
import Buyer_Orders from "./components/common/Buyer_Orders";
import Vendor_Orders from "./components/common/Vendor_Orders";

import Navbar from "./components/templates/Navbar";
// import Profile from "./components/users/Profile";

import ls from "local-storage";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route exact path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />

          {/* <Route path="users" element={<UsersList />} /> */}
          <Route path="products_list" element={<Products_List />} />
          <Route path="add_request" element={<Add_Request />} />
          <Route path="user_requests" element={<User_Requests />} />
          <Route path="buyer_orders" element={<Buyer_Orders />} />
          <Route path="vendor_orders" element={<Vendor_Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
