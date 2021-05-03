<template>
<div>
<div id="navigation-links">
    <span class="nav-link">
    <!-- uses a link to link to home page -->
        <router-link to="/">Home</router-link>
    </span>
    <span class="nav-link">
        <router-link to="/about">About this site</router-link>
    </span>
</div>

    <p> Header image by <a href="https://unsplash.com/photos/KpBXAOs80YI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">chrislawton on Unsplash</a></p>
    <p> Map icon <img src="https://img.icons8.com/nolan/50/map.png"/></p>

</div>

</template>

<script>


export default {
    name: 'PageFooter'
}
</script>
<style scoped>

.nav-link{
    margin: 1rem;
}
</style>
