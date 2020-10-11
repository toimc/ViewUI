<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import { getCurrentInstance } from 'vue'

    const prefixCls = 'ivu-btn-group';

    export default {
        name: 'ButtonGroup',
        props: {
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    const internalInstance = getCurrentInstance();
                    const config = internalInstance.appContext.config;
                    return !config.$IVIEW || config.$IVIEW.size === '' ? 'default' : config.$IVIEW.size;
                }
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            }
        }
    };
</script>
