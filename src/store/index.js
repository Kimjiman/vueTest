import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        user: {
            id: 'test',
        },
        initState: false,
    }),

    getters: {
        getUser() {
            return this.user;
        },
        getInitState() {
            return this.initState;
        },
    },

    actions: {
        setUser(value) {
            this.user = value;
        },
        setInitState(value) {
            this.initState = value;
        },
    },
});
