import { axios } from './index';

export const login = async (loginId, password) => {
    const res = await axios.post(
        '/loginProc',
        {
            loginId: loginId,
            password: password,
        },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );
    return res;
};
