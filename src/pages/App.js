import { Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import DashboardLayout from '../components/layouts/DashboardLayout';
import './App.css';
import { Home } from './Home';
import { NotFound } from './404';
import Messages from './Messages';
import Detail from './Detail';
import HomeLayout from '../components/layouts/HomeLayout';
import Properties from './Properties';
import Users from './Users';
import SelectRole from './SelectRole';
import CreateProperty from "./owner/CreateProperty";
import UpdateImageProperty from './owner/UpdateImageProperty';
import Favourites from "./customer/Favourites";
import Rented from "./admin/Rented";
import Customers from "./admin/Customers";

//import { useKeycloak } from '@react-keycloak/web';

function App() {
  //const { keycloak } = useKeycloak();

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} >
        <Route index element={<Home />} />
        <Route path="role" element={<SelectRole />} />
      </Route>
      <Route path="/owner" exact element={<HomeLayout />} >
        <Route path="create" element={<CreateProperty />} />
        <Route path="images/:id" element={<UpdateImageProperty />} />
      </Route>
      <Route path="/admin" exact element={<HomeLayout />} >
        <Route path="rented" element={<Rented />} />
        <Route path="customers" element={<Customers />} />
      </Route>
      <Route path="/properties" exact element={<HomeLayout />} >
        <Route path=":id" element={<Detail />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/main" excact element={<DashboardLayout />}>
        <Route path="properties" element={<Properties />} />
        <Route path="properties/:id" element={<Detail />} />
        <Route path="messages" element={<Messages />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>);
}

export default App;
