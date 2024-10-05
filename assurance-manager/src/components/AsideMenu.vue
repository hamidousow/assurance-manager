<script lang="ts" setup>
import IconArchive from './icons/IconArchive.vue';
import IconContract from './icons/IconContract.vue';
import IconDashboard from './icons/IconDashboard.vue';
import IconMember from './icons/IconMember.vue';


</script>

<template>
    <aside id="aside">
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">
                        <IconDashboard /> Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/members">
                        <IconMember /> Membres
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/contrats">
                        <IconContract /> Contrats
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/archives">
                        <IconArchive /> Archives
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
    padding: 0 2rem;
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