import { axios } from './index';

export const login = async (loginId, password) => {
    const res = await axios.post('/loginProc', {
        loginId: loginId,
        password: password,
    });
    return res;
};
