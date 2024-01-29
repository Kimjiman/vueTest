/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier/skip-formatting'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-unused-vars': 'warn', // 쓰지 않는 변수 사용시
        'vue/no-unused-vars': 'warn', // 쓰지 않는 변수 사용시
        'vue/multi-word-component-names': 'off', // 컴포넌트명 단일로 사용가능(on시에는 케밥케이스로 컴포넌트를 작성해야함)
    },
};
