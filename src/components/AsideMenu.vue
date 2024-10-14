<script lang="ts" setup>
import IconArchive from './icons/IconArchive.vue';
import IconContract from './icons/IconContract.vue';
import IconDashboard from './icons/IconDashboard.vue';
import IconMember from './icons/IconMember.vue';


</script>

<template>
    <aside id="aside" class="px-8 py-32">
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">
                        <IconDashboard class="fill-gray-400"/> Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/members">
                        <IconMember class="fill-gray-400"/> Membres
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/contrats">
                        <IconContract class="fill-gray-400"/> Contrats
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/archives">
                        <IconArchive class="fill-gray-400"/> Archives
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>



<style>
#aside {
    border-right: 1px solid var(--color-grey);
    height: 100%;
}

aside nav {
    width: 100%;
    height: var(--nav-height);
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

aside ul li a {
    display: flex;
    place-items: center;
    font-size: 1rem;
}

aside ul li a svg {
    margin-right: 1.3rem;
}

aside nav a.router-link-exact-active {
    font-weight: 700;
}

aside nav a.router-link-exact-active svg {
    fill: var(--color-text);
}
</style>