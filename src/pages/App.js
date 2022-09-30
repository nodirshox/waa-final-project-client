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
import { useKeycloak } from "@react-keycloak/web";


function App() {
  const { keycloak, initialized } = useKeycloak();
  keycloak.init({
    onLoad: 'login-required',
    promiseType: 'native'
  }).then(auth => {
    if (auth) {
      console.log("token", keycloak.token);
    }
  });
  console.log(initialized)
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} >
        <Route index element={<Home />} />
      </Route>
      <Route path="/properties" exact element={<HomeLayout />} >
        <Route path=":id" element={<Detail />} />
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
