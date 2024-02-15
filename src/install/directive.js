import { useGlobalStore } from '@/store';

const store = useGlobalStore();

const isLogin = {
    mounted(el, binding) {
        updateVisibility(el, binding);
    },
    updated(el, binding) {
        updateVisibility(el, binding);
    },
};

const updateVisibility = (el, binding) => {
    if (!store.isLogin) {
        el.style.display = 'none';
    }
};

export default {
    install(Vue) {
        Vue.directive('isLogin', isLogin);
    },
};
