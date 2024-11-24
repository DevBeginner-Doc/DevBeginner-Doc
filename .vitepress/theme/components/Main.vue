<template>
    <div class="main-container">
        <div class="card-main">
            <!-- 公告标题 -->
            <div class="card-title">
                <NoticeFull />
                <strong style="font-size: 1.3rem;">公告</strong>
            </div>
            <!-- 公告内容 -->
            <div style="padding-left: 15px;">
                <ul style="font-size: 1rem;">
                    <li>
                        本文档基于
                        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
                            CC BY-NC-SA 4.0(Creative Commons Attribution-ShareAlike 4.0)
                        </a>开源协议，内容转载请标明出处。
                    </li>
                    <li>
                        校内授权 QQ 群聊：
                        <a href="https://qm.qq.com/q/DZcC4JhnP4" target="_blank">
                            148518259(24级C语言交流群)
                        </a>、
                        <a href="https://qm.qq.com/q/L58jzI8P6y" target="_blank">
                            980609672(轻大开发交流群)
                        </a>，群内包含文档官方机器人，可以帮你实时获取文档信息。啊，也可以带你玩一些好玩的（）
                    </li>
                    <li>
                        文档持续更新中 🚀，任何文档内容问题欢迎到文档仓库提交 issues 或 pr，或者进入以上校内授权群聊进行反馈，当然，你也可以发送邮件至 admin@frexlink.com 告知我们。
                    </li>
                    <li>
                        想要加入文档的编写？当然！你可以通过向文档仓库提交 pr 来帮助我们完善文档内容，你也可以在授权群聊内联系或@管理员来申请仓库的 push 权限。期待大家的到来！
                    </li>
                    <li>
                        如果你现在或者未来有意向在 GitHub 上帮助完善此文档的内容，我们希望你在此之前已经了解了 vitepress 文档的基本结构和编写步骤以及 Git 和 GitHub 的使用基础。
                    </li>
                    <li>
                        ✨✨ 资源下载站点已经完成初步部署，你可以在右上角导航中进入下载页面 ✨✨
                    </li>
                    <li>
                        CalDav 订阅将于近期开放，请耐心等待。
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 校内比赛卡片 -->
    <div class="card">
        <div class="card-title">
            <ZZULIFull />
            <strong style="font-size: 1.1rem;">校内计算机赛事</strong>
            <div style="position: absolute; right: 0; display: flex; gap: 5px; align-items: center;">
                <CalDavFull />
                <a class="alink" style="font-size: 0.89rem" href="" target="_blank">
                    CalDav订阅
                </a>
            </div>
        </div>
        <div v-for="data in inEvents" class="card-item">
            <div class="contest-status" style="background-color: currentColor;"></div>
            <div class="contest-info">
                <a class="alink">{{ data.name }}</a>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <SummaryFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">比赛简介 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.summary }}</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <InfoFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">比赛说明 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.notes }}</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <TimeFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">比赛时间 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.startAt }}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 实验室卡片 -->
    <div class="card">
        <div class="card-title">
            <ZZULIFull />
            <strong style="font-size: 1.1rem;">校内相关实验室</strong>
        </div>
        <div v-for="data in labs" class="card-item">
            <div class="contest-status" style="background-color: currentColor;"></div>
            <div class="contest-info">
                <a class="alink">{{ data.name }}</a>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <CollegeFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">学院 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.college }}</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <SummaryFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">简介 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.summary }}</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <PositionFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">位置 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.position }}</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <TeamFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">招新范围 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.limit }}</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <QQFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">招新群聊 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.group }}</span>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; flex-shrink: 0; align-items: center; gap: 5px;">
                        <TimeFull />
                        <span style="font-weight: 600; font-size: 0.9rem;">招新时间 :</span>
                    </div>
                    <span style="font-size: 0.9rem;">{{ data.time }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <!-- 卡片标题栏 -->
        <div class="card-title">
            <InfoFull />
            <strong style="font-size: 1.1rem;">算法比赛信息</strong>
            <div style="position: absolute; right: 0; display: flex; gap: 5px; align-items: center;">
                <CalDavFull />
                <a class="alink" style="font-size: 0.89rem" href="" target="_blank">
                    CalDav订阅
                </a>
            </div>
        </div>
        <!-- 比赛状态说明栏 -->
        <div style="display: flex; align-items: center; gap: 20px">
            <!-- Public -->
            <div style="display: flex; align-items: center; gap: 5px">
                <div style="background-color: rgb(73, 185, 255); width: 14px; height: 14px; border-radius: 50px;">
                </div>
                <span style="font-weight: 500; font-size:14px">已发布</span>
            </div>
            <!-- Register -->
            <div style="display: flex; align-items: center; gap: 5px">
                <div style="background-color: #3bc539; width: 14px; height: 14px; border-radius: 50px;"></div>
                <span style="font-weight: 500; font-size:14px">报名中</span>
            </div>
            <!-- Running -->
            <div style="display: flex; align-items: center; gap: 5px">
                <div style="background-color: rgb(255, 234, 47); width: 14px; height: 14px; border-radius: 50px;">
                </div>
                <span style="font-weight: 500; font-size:14px">进行中</span>
            </div>
        </div>
        <!-- 比赛信息栏 -->
        <div v-for="data in contests" class="card-item">
            <div class="contest-status" :style="getContestClass(data.status)"></div>
            <div class="contest-info">
                <a class="alink" :href="data.link">{{ data.name }}</a>
                <div style="display: flex; align-items: center; gap: 5px">
                    <TimeFull />
                    <span style="font-weight: 600; font-size: 0.85rem;">{{ data.startAt }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import NoticeFull from './svg/NoticeFull.vue';
import ZZULIFull from './svg/ZZULIFull.vue';
import CalDavFull from './svg/CalDavFull.vue';
import SummaryFull from './svg/SummaryFull.vue';
import InfoFull from './svg/InfoFull.vue';
import TimeFull from './svg/TimeFull.vue';
import CollegeFull from './svg/CollegeFull.vue';
import PositionFull from './svg/PositionFull.vue';
import TeamFull from './svg/TeamFull.vue';
import QQFull from './svg/QQFull.vue';

const contests = ref([])
const labs = ref([])
const inEvents = ref([])
async function getContests() {
    try {
        const res = await axios.get('https://devapi.frexlink.cn/api/event/get?platform=all')
        res.data.forEach(item => {
            contests.value.push(item)
        })
    }
    catch (e) {
        console.log(e)
    }
}
async function getLabs() {
    try {
        const res = await axios.get('https://devapi.frexlink.cn/api/lab/get?release=true')
        res.data.forEach(item => {
            labs.value.push(item)
        })
    }
    catch (e) {
        console.log(e)
    }
}
async function getInnerEvents() {
    try {
        const res = await axios.get('https://devapi.frexlink.cn/api/event/inner/get?release=true')
        res.data.forEach(item => {
            inEvents.value.push(item)
        })
    }
    catch (e) {
        console.log(e)
    }
}
function getContestClass(status) {
    if (status === 'Register') {
        return 'background-color: #3bc539;'
    }
    else if (status === 'Public') {
        return 'background-color: rgb(73, 185, 255);'
    }
    else {
        return 'background-color: rgb(255, 234, 47);'
    }
}
onMounted(() => {
    getContests()
    getInnerEvents()
    getLabs()
})
</script>

<style scoped>
.alink {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.15rem;
    text-underline-offset: 2px;
    transition: all 0.3s;
}

.alink:hover {
    color: rgb(0, 162, 255);
    text-decoration-line: underline;
}

.main-container {
    margin-bottom: 40px;
    z-index: -1;
    padding: 3px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    margin: 15px 0;
    border-radius: 5px;
    border: solid 2px var(--vp-c-text-3);
}

.card-main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    background: var(--vp-c-bg);
    border-radius: 10px;
    padding: 5px;
}

.card-title {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-bottom: 5px;
}

.card-item {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    transition: all 0.2s;
    border-radius: inherit;
    border: solid 1px var(--vp-c-text-3);
    position: relative;
}

.card-item:hover {
    transform: translate(-1px, -1px);
    box-shadow: 1px 1px 2px var(--vp-c-text-3);
}

.contest-status {
    position: absolute;
    height: 90%;
    width: 6px;
    border-radius: 5px;
}

.contest-ico {
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
}

.contest-info {
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 15px;
}
</style>