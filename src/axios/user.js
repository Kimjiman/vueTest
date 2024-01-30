import { axios } from './index';

const userApi = {
    login: async (loginId, password) => {
        const data = {
            loginId: loginId,
            password: password,
        };
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        return await axios.post('/loginProc', data, { headers: headers });
    },
};

export default userApi;
