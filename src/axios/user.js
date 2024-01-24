import { axios } from './index';

export const login = async (loginId, password) => {
    return await axios.post('/loginProc', {
        loginId: loginId,
        password: password,
    });
};
