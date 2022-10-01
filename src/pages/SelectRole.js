import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AxiosClient } from '../axios';
import { useState, useEffect } from "react";
import { useKeycloak } from '@react-keycloak/web';
import { getProfile } from '../core/profile'
import { useNavigate } from 'react-router-dom';

export default function SelectRole() {
  const [user, setUser] = useState({});

  const { keycloak } = useKeycloak();
  const nav = useNavigate();
  const role = async (role) => {
    await AxiosClient.post("/users", {
      name: user.given_name,
      type: role,
      email: user.email
    });
    nav("/");
  }

  useEffect(() => { getProfile(keycloak.token).then((res) => setUser(res)) }, [keycloak.token])

  return (
    <div className="selectRole">
      <ButtonGroup variant="contained" size="large" color="success" aria-label="outlined button group">
        <Button onClick={() => role("CUSTOMER")}>Customer</Button>
        <Button onClick={() => role("OWNER")}>Owner</Button>
      </ButtonGroup>
    </div>
  )
}