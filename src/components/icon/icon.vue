<template>
  <i :class="state.classes" :style="state.styles" @click="handleClick"></i>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

const prefixCls = 'ivu-icon'

interface Styles {
  'font-size': string;
  color: string;
}

export default defineComponent({
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: [Number, String],
    color: String,
    custom: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      classes: computed(() => {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${props.type}`]: props.type !== '',
            [`${props.custom}`]: props.custom !== ''
          }
        ]
      }),
      styles: computed(() => {
        const style = {} as Styles

        if (props.size) {
          style['font-size'] = `${props.size}px`
        }

        if (props.color) {
          style.color = props.color
        }

        return style
      })
    })

    const handleClick = (event: Event) => {
      emit('click', event)
    }
    return {
      state,
      handleClick
    }
  }
})
</script>
