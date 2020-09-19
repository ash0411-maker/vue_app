<template>
    <div id="app">
        <!-- router.jsで登録されたコンポーネントが表示される場所 -->
            <router-view/>
    </div>
</template>

<script>
    export default {
        // VueDevtoolsにおけるコンポーネントの識別名称
        name: 'App',
    }
</script>

<style scoped></style>