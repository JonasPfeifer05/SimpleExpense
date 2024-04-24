<script setup lang="ts">
const colorMode = useColorMode();

console.log(colorMode.value);
</script>

<template>
    <div id="container">
        <div id="app-bar">Summary</div>
        <div id="content">Content</div>
        <div id="bottom-bar">BottomBar</div>
    </div>
</template>

<style scoped lang="scss">
#container {
    height: 100vh;
}

#app-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 25px;
    height: 75px;
}

#content {
    height: calc(100% - 75px - 75px);
}

#bottom-bar {
    height: 75px;
    background: var(--surface-200);
}
</style>