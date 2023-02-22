<template>
    <div class="mainLayout">
        <OrgHeader :key="$store.state.name" />
        <router-view/>
    </div>
</template>
<script>
import OrgHeader from '../Header.vue';
export default{
    name: 'app-layout',
    components: {OrgHeader}
}
</script>