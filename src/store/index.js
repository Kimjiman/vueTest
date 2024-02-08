import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        initState: false,
        user: {},
        menu: {},
    }),

    getters: {
        getInitState() {
            return this.initState;
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
        setUser(value) {
            this.user = value;
        },
        setMenu(value) {
            this.menu = value;
        },
    },
});
