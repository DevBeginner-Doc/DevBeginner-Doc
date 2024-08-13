<template>
    <img class="VPImage image-src" :src="image" alt="DevBeginner-Doc">
</template>

<script setup>
import { onMounted, ref } from 'vue';

const hostname = ref(undefined);
const image = ref('/DevBeginner-Doc/svg/Logo_Thick.svg');
onMounted(() => {
    hostname.value = window.location.hostname;
    if (hostname.value === 'newbie.frexlink.com') {
        image.value = '/DevBeginner-Doc/svg/Logo_GLOBAL_Thick.svg';
    }
})
</script>