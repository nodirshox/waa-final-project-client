import axios from "axios";

export const getProfile = async () => {
    let token = localStorage.getItem('token');

    const res = await axios.get('http://localhost:8081/realms/waa-property/protocol/openid-connect/userinfo', { headers: { "Authorization": `Bearer ${token}` } });
    return res.data;
}