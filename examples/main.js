import 'babel-polyfill';
import {createApp} from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './app.vue';
import iView from '../src/index';

import locale from '../src/locale/lang/en-US';

import Affix from './routers/affix.vue';
import Button from './routers/button.vue';
import Divider from './routers/divider.vue';
import Card from './routers/card.vue';
import Icon from './routers/icon.vue';
import Input from './routers/input.vue';
import Split from './routers/split.vue';
import Alert from './routers/alert.vue';
import Anchor from './routers/anchor.vue';
import Autocomplete from './routers/auto-complete.vue';
import Select from './routers/select.vue';
import Avatar from './routers/avatar.vue';
import Badge from './routers/badge.vue';
import Switch from './routers/switch.vue';
import Radio from './routers/radio.vue';
import Poptip from './routers/poptip.vue';
import Slider from './routers/slider.vue';
import Tooltip from './routers/tooltip.vue';

const app = createApp(App);

app.use(iView, {
    locale,
    capture: true
});

const router = createRouter({
    // esModule: false,
    history: createWebHashHistory(),
    routes: [
        {
            path: '/split',
            component: Split
        },
        // {
        //     path: '/layout',
        //     component: (resolve) => require(['./routers/layout.vue'], resolve)
        // },
        {
            path: '/affix',
            component: Affix
        },
        {
            path: '/anchor',
            component: (resolve) => require(['./routers/anchor.vue'], resolve)
        },
        // {
        //     path: '/grid',
        //     component: (resolve) => require(['./routers/grid.vue'], resolve)
        // },
        {
            path: '/button',
            component: Button
        },
        {
            path: '/input',
            component: Input
        },
        {
            path: '/radio',
            component: Radio
        },
        // {
        //     path: '/checkbox',
        //     component: (resolve) => require(['./routers/checkbox.vue'], resolve)
        // },
        // {
        //     path: '/steps',
        //     component: (resolve) => require(['./routers/steps.vue'], resolve)
        // },
        // {
        //     path: '/timeline',
        //     component: (resolve) => require(['./routers/timeline.vue'], resolve)
        // },
        {
            path: '/switch',
            component: Switch
        },
        {
            path: '/alert',
            component: Alert
        },
        {
            path: '/badge',
            component: Badge
        },
        // {
        //     path: '/tag',
        //     component: (resolve) => require(['./routers/tag.vue'], resolve)
        // },
        // {
        //     path: '/input-number',
        //     component: (resolve) => require(['./routers/input-number.vue'], resolve)
        // },
        // {
        //     path: '/upload',
        //     component: (resolve) => require(['./routers/upload.vue'], resolve)
        // },
        // {
        //     path: '/progress',
        //     component: (resolve) => require(['./routers/progress.vue'], resolve)
        // },
        // {
        //     path: '/collapse',
        //     component: (resolve) => require(['./routers/collapse.vue'], resolve)
        // },
        // {
        //     path: '/carousel',
        //     component: (resolve) => require(['./routers/carousel.vue'], resolve)
        // },
        {
            path: '/card',
            component: Card
        },
        // {
        //     path: '/tree',
        //     component: (resolve) => require(['./routers/tree.vue'], resolve)
        // },
        // {
        //     path: '/rate',
        //     component: (resolve) => require(['./routers/rate.vue'], resolve)
        // },
        // {
        //     path: '/circle',
        //     component: (resolve) => require(['./routers/circle.vue'], resolve)
        // },
        // {
        //     path: '/tabs',
        //     component: (resolve) => require(['./routers/tabs.vue'], resolve)
        // },
        {
            path: '/tooltip',
            component: Tooltip
        },
        {
            path: '/poptip',
            component: Poptip
        },
        {
            path: '/slider',
            component: Slider
        },
        // {
        //     path: '/dropdown',
        //     component: (resolve) => require(['./routers/dropdown.vue'], resolve)
        // },
        // {
        //     path: '/breadcrumb',
        //     component: (resolve) => require(['./routers/breadcrumb.vue'], resolve)
        // },
        // {
        //     path: '/menu',
        //     component: (resolve) => require(['./routers/menu.vue'], resolve)
        // },
        // {
        //     path: '/spin',
        //     component: (resolve) => require(['./routers/spin.vue'], resolve)
        // },
        // {
        //     path: '/cascader',
        //     component: (resolve) => require(['./routers/cascader.vue'], resolve)
        // },
        {
            path: '/select',
            component: Select
        },
        // {
        //     path: '/backtop',
        //     component: (resolve) => require(['./routers/back-top.vue'], resolve)
        // },
        // {
        //     path: '/page',
        //     component: (resolve) => require(['./routers/page.vue'], resolve)
        // },
        // {
        //     path: '/transfer',
        //     component: (resolve) => require(['./routers/transfer.vue'], resolve)
        // },
        // {
        //     path: '/date',
        //     component: (resolve) => require(['./routers/date.vue'], resolve)
        // },
        // {
        //     path: '/form',
        //     component: (resolve) => require(['./routers/form.vue'], resolve)
        // },
        // {
        //     path: '/table',
        //     component: (resolve) => require(['./routers/table.vue'], resolve)
        // },
        // {
        //     path: '/loading-bar',
        //     component: (resolve) => require(['./routers/loading-bar.vue'], resolve)
        // },
        // {
        //     path: '/modal',
        //     component: (resolve) => require(['./routers/modal.vue'], resolve)
        // },
        // {
        //     path: '/message',
        //     component: (resolve) => require(['./routers/message.vue'], resolve)
        // },
        // {
        //     path: '/notice',
        //     component: (resolve) => require(['./routers/notice.vue'], resolve)
        // },
        {
            path: '/avatar',
            component: Avatar
        },
        // {
        //     path: '/color-picker',
        //     component: (resolve) => require(['./routers/color-picker.vue'], resolve)
        // },
        {
            path: '/auto-complete',
            component: Autocomplete
        },
        // {
        //     path: '/scroll',
        //     component: (resolve) => require(['./routers/scroll.vue'], resolve)
        // },
        {
            path: '/divider',
            component: Divider
        },
        // {
        //     path: '/time',
        //     component: (resolve) => require(['./routers/time.vue'], resolve)
        // },
        // {
        //     path: '/cell',
        //     component: (resolve) => require(['./routers/cell.vue'], resolve)
        // },
        // {
        //     path: '/drawer',
        //     component: (resolve) => require(['./routers/drawer.vue'], resolve)
        // },
        {
            path: '/icon',
            component: Icon
        },
        // {
        //     path: '/list',
        //     component: (resolve) => require(['./routers/list.vue'], resolve)
        // }
    ]
});

app.use(router);

app.mount('#app');
