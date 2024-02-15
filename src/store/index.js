import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        initState: false,
        isLogin: false,
        user: {},
        menu: {},
    }),

    getters: {
        getInitState() {
            return this.initState;
        },
        getIsLogin() {
            return this.isLogin;
        },
        getUser() {
            return this.user || {};
        },
        getMenu() {
            return this.menu || {};
        },
    },

    actions: {
        setInitState(value) {
            this.initState = value;
        },
        setIsLogin(value) {
            this.isLogin = value;
        },
        setUser(value) {
            this.user = value;
        },
        setMenu(value) {
            this.menu = value;
        },
    },
});
