<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
    name: 'home',
    components: {
        Sidebar
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: #88E0EF;
    height: 100vh;
    width: 100vw;
}
.content {
    background-color: #212121;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>