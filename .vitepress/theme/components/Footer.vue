<template>
    <div class="footers">
        <div class="container-block" style="margin-bottom: 5px;">
            <p style="font-weight: bold; font-size: 13px;">Released under the
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
                    CC BY-NC-SA 4.0 License
                </a>
            </p>
        </div>
        <div class="container-block" style="margin-bottom: 5px;">
            <p style="font-weight: bold; font-size: 13px;">Copyright © 2024 DevBeginner-Doc</p>
        </div>
        <div v-if="hostname === 'newbie.frexlink.cn'" class="container-block">
            <div class="container-block" style="margin-right: 10px;">
                <img src="../icons/beian-mps.png" alt="mps">
                <a href="https://beian.mps.gov.cn/" target="_blank">
                    &nbsp;豫公网安备10000002000000号
                </a>
                <a href="https://beian.miit.gov.cn/" target="_blank">
                    &nbsp;&nbsp;豫ICP备2024073311号-1
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const hostname = window.location.hostname;
</script>

<style scoped>
a {
    font-weight: bold;
    font-size: 13px;
    text-underline-offset: 2px;
    transition: all 0.3s;
}

a:hover {
    color: rgb(0, 162, 255);
    text-decoration-line: underline;
}

.footers {
    padding-top: 200px;
    padding-bottom: 20px;
}

.container-block {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>