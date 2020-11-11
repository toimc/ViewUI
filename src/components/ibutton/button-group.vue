<template>
  <div :class="state.classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { oneOf } from '@/utils/assist'
import { defineComponent, reactive, computed } from 'vue'

const prefixCls = 'ivu-btn-group'

export default defineComponent({
  name: 'ButtonGroup',
  props: {
    size: {
      validator: (value: string) => {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    shape: {
      validator: (value: string) => {
        return oneOf(value, ['circle', 'circle-outline'])
      }
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const state = reactive({
      classes: computed(() => [
        `${prefixCls}`,
        {
          [`${prefixCls}-${props.size}`]: !!props.size,
          [`${prefixCls}-${props.shape}`]: !!props.shape,
          [`${prefixCls}-vertical`]: props.vertical
        }
      ])
    })
    return {
      state
    }
  }
})
</script>
