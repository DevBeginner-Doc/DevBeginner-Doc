<template>
    <div class="grid-container">
        <div v-for="item in softList" class="grid-item">
            <div class="icon-container">
                <img :src="item.icon">
            </div>
            <div class="content-container">
                <span style="font-weight: 700; font-size: 1.2rem;">{{ item.Name }}</span>
                <span class="version-container">{{ item.Version }}</span>
                <span style="font-size: 0.9rem;">{{ item.Date }}</span>
                <div class="button-container">
                    <button v-if="item.Name === 'Code::Blocks'" class="button-download"
                        @click="downloadFileByUrl(item.Link, 'codeblocks-20.03mingw-setup.exe')">下载</button>
                    <button v-else class="button-download" @click="downloadFileByWindow(item.Link)">下载</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const softList = ref([])

softList.value = [
    { Name: 'MinGW-w64 14.2.0', Version: 'x86_64_posix_seh_ucrt', Date: '2024-09-18', icon: 'images/download/mingw.svg', Link: 'https://frexcheat.lanzouk.com/i4SAK2acdvva' },
    { Name: 'Visual Studio Code', Version: 'August 2024 Build 1.93', Date: '2024-09-18', icon: 'images/download/Vscode.svg', Link: 'https://frexcheat.lanzouk.com/isxmE27ewt6b' },
    { Name: 'Visual Studio Installer', Version: '2022.17.11.35208.52', Date: '2024-09-18', icon: 'images/download/Visual Studio.svg', Link: 'https://frexcheat.lanzouk.com/iAA0H27evdcf' },
    { Name: 'Dev C++', Version: '5.11 TDM-GCC 4.9.2', Date: '2024-09-18', icon: 'images/download/blddevcpp.png', Link: 'https://frexcheat.lanzouk.com/iGV2w27etyvi' },
    { Name: '小熊猫 Dev C++', Version: '3.1_win64.MinGW64_11.4', Date: '2024-09-18', icon: 'images/download/pandacpp.svg', Link: 'https://frexcheat.lanzouk.com/i7vrV2acbwve' },
    { Name: 'Code::Blocks', Version: 'v20.03_mingw', Date: '2024-09-18', icon: 'images/download/codeblocks.svg', Link: 'https://demo.frexlink.cn/codeblocks-20.03mingw-setup.exe' },
    { Name: 'CodeBlocks 20.03 汉化包', Version: 'v20.03_mingw', Date: '2024-09-18', icon: 'images/download/normal.svg', Link: 'https://frexcheat.lanzouk.com/iJ4IA2aceyzi' },
    { Name: 'MSYS2 x86_64', Version: '20240727 Build', Date: '2024-09-18', icon: 'images/download/msys2.svg', Link: 'https://frexcheat.lanzouk.com/i35q32achboh' },
]
function downloadFileByUrl(url: string, fileName: string) {
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    document.body.appendChild(link)
    link.setAttribute('download', fileName)
    link.click()
    link.remove()
}
function downloadFileByWindow(url: string) {
    window.open(url, '_blank');
}
</script>

<style scoped>
.grid-container {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    justify-content: center;
}

.grid-item {
    display: flex;
    padding: 15px;
    align-items: center;
    border-radius: 10px;
    background-color: var(--vp-c-default-soft);
}

.icon-container {
    margin-right: 20px;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-content: center;
}

.content-container {
    display: flex;
    flex-direction: column;
    gap: 5px
}

.version-container {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 2px 5px;
    text-align: center;
    border-radius: 5px;
    color: var(--vp-c-text-2);
    background: var(--vp-c-default-2);
}

.button-container {
    width: 100px;
    height: 40px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-size: contain;
    background-image: conic-gradient(from var(--border-gradient-angle) at 50% 50%, transparent, #00ccff 20%, transparent 17%);
    animation: buttonBorderSpin 6s linear infinite 0ms;
}

.button-download {
    width: 100%;
    height: 100%;
    background: var(--vp-c-gray-1);
    transition: 0.2s linear all;
    border-radius: 10px;
}

.button-download:hover {
    background: var(--vp-c-gray-2);
}

@property --border-gradient-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
}

@keyframes buttonBorderSpin {
    0% {
        --border-gradient-angle: 0turn;
    }

    100% {
        --border-gradient-angle: 1turn;
    }
}
</style>