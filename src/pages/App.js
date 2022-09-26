import { Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import DashboardLayout from '../components/layouts/DashboardLayout';
import './App.css';
import { Home } from './Home';
import { NotFound } from './404';
import Messages from './Messages';
import Detail from './Detail';
import { Switch } from 'react-router';
import HomeLayout from '../components/layouts/HomeLayout';



function App() {
  console.log('inside App js')
  return (<Routes>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
    </Route>
    <Route path="/auth" element={<Auth />} />
    <Route path="/main" excact element={<DashboardLayout />}>
      <Route path="messages" element={<Messages />} />
      <Route path="detail/:id" element={<Detail />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>);
}

export default App;
