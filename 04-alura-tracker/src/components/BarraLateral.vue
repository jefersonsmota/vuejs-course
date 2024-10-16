<script lang="ts">
export default {}
</script>
<template>
<header>
    <h1>
        <img src="../assets/logo.svg" alt="">
    </h1>
    <nav class="panel mt-5">
        <ul>
            <li>
                <router-link to="/" class="navbar-item">
                    Tarefas
                </router-link>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="/projetos" class="navbar-item">
                    Projetos
                </router-link>
            </li>
        </ul>
    </nav>
</header>
</template>
<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}

@media only screen and (max-width: 768px) {
    header{
        padding: 2.5rem;
        height: auto;
    }
}

.panel li {
    margin: 8px 0;
}

.navbar-item {
    color: #fff;
    background-color: #175894;
}
li > .navbar-item:hover {
    color: #fff;
    background-color: #144e84;
}

li > .navbar-item:focus {
    color: #fff;
    background-color: #144e84;
}
</style>