<template>
    <h1>Login</h1>
    {{ data.user }}
    <div>
        <div><el-input type="text" v-model="data.loginId" placeholder="아이디" /></div>
        <div><el-input type="password" v-model="data.password" placeholder="패스워드" /></div>
        <el-button @click="login()" type="primary">로그인</el-button>
    </div>
    <div v-isLogin>
        <el-button @click="logout()" type="primary">로그아웃</el-button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import userApi from '@/axios/user';
import { useGlobalStore } from '@/store';
import stringUtils from '@/utils/stringUtils';
import { ElInput, ElButton, ElMessage } from 'element-plus';

const store = useGlobalStore();

const data = reactive({
    loginId: null,
    password: null,
});

const login = async () => {
    if (stringUtils.isEmpty(data.loginId)) {
        return ElMessage({ message: '아이디를 입력해주세요.', type: 'error' });
    }

    if (stringUtils.isEmpty(data.password)) {
        return ElMessage({ message: '비밀번호를 입력해주세요.', type: 'error' });
    }

    try {
        const res = await userApi.login(data.loginId, data.password);
        store.setUser(res.response);
        store.setIsLogin(true);
    } catch (ex) {
        return ElMessage({ message: ex.message, type: 'error' });
    }
};

const logout = async () => {
    store.setUser(null);
};
</script>
