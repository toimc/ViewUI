<template>
  <component
    :is="tagName"
    :class="state.classes"
    :disabled="state.itemDisabled"
    @click="handleClickLink"
    v-bind="tagProps"
  >
    <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
    <Icon
      :type="icon"
      :custom="customIcon"
      v-if="(icon || customIcon) && !loading"
    ></Icon>
    <span v-if="state.showSlot" ref="slot"><slot></slot></span>
  </component>
</template>

<script lang="ts">
import Icon from '../icon'
import { oneOf } from '@/utils/assist'
import { computed, defineComponent, inject, reactive, Component } from 'vue'
import { RouteLocationRaw, useRouter } from 'vue-router'

const prefixCls = 'ivu-btn'

export default defineComponent({
  name: 'iButton',
  components: { Icon },
  props: {
    type: {
      type: String,
      validator: (value:string) => {
        return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'])
      },
      default: 'default'
    },
    shape: {
      type: String,
      validator: (value: string) => {
        return oneOf(value, ['circle', 'circle-outline'])
      }
    },
    size: {
      validator: (value: string) => {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    loading: Boolean,
    disabled: {
      default: false,
      type: Boolean
    },
    htmlType: {
      default: 'button',
      validator: (value: string) => {
        return oneOf(value, ['button', 'submit', 'reset'])
      }
    },
    icon: {
      type: String,
      default: ''
    },
    customIcon: {
      type: String,
      default: ''
    },
    long: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    to: {
      type: [Object, String],
      default: ''
    },
    replace: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      validator: (value: string) => {
        return oneOf(value, ['_blank', '_self', '_parent', '_top'])
      },
      default: '_self'
    },
    append: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup (props, { emit, slots }) {
    const form = inject<Component & {disabled: boolean}>('FormInstance') || ''
    const state = reactive({
      showSlot: computed(() => !!slots),
      classes: computed(() => {
        return [
          `${prefixCls}`,
          `${prefixCls}-${props.type}`,
          {
            [`${prefixCls}-long`]: props.long,
            [`${prefixCls}-${props.shape}`]: !!props.shape,
            [`${prefixCls}-${props.size}`]: props.size !== 'default',
            [`${prefixCls}-loading`]: props.loading != null && props.loading,
            [`${prefixCls}-icon-only`]: !state.showSlot && (!!props.icon || !!props.customIcon || props.loading),
            [`${prefixCls}-ghost`]: props.ghost
          }
        ]
      }),
      itemDisabled: computed(() => {
        let state = props.disabled
        if (!state && form) state = form.disabled
        return state
      }),
      isHrefPattern: computed(() => !!props.to)
    })

    const tagName = computed(() => state.isHrefPattern ? 'a' : 'button')

    const router = useRouter()

    const linkUrl = computed(() => {
      const type = typeof props.to
      if (type !== 'string') {
        return null
      }
      if (typeof props.to === 'string' && props.to.includes('//')) {
        /* Absolute URL, we do not need to route this */
        return props.to
      }
      if (router) {
        // const current = useRoute()
        let route
        if (typeof props.to === 'string') {
          route = router.resolve(props.to + props.append)
        } else if (typeof props.to === 'object') {
          route = router.resolve(props.to as RouteLocationRaw)
        }
        return route ? route.href : props.to
      }
      return props.to
    })

    const tagProps = computed(() => state.isHrefPattern ? { href: linkUrl, target: props.target } : { type: props.htmlType })
    // const tagProps = computed(() => {
    //   if (state.isHrefPattern) {
    //     return { href: linkUrl, target: props.target }
    //   } else {
    //     return { type: props.htmlType }
    //   }
    // })

    const handleClick = (newWindow = false) => {
      if (newWindow) {
        let to = props.to
        if (router) {
          let route
          if (typeof props.to === 'string') {
            route = router.resolve(props.to + props.append)
          } else if (typeof props.to === 'object') {
            route = router.resolve(props.to as RouteLocationRaw)
          }
          to = route ? route.href : props.to
        }
        window.open(to as string)
      } else {
        if (router) {
          if ((typeof props.to === 'string') && props.to.includes('//')) {
            window.location.href = props.to
          } else {
            props.replace ? router.replace(props.to) : router.push(props.to)
          }
        } else {
          window.location.href = props.to
        }
      }
    }
    const handleCheckClick = (event, newWindow = false) => {
      if (props.to) {
        if (props.target === '_blank') {
          return false
        } else {
          event.preventDefault()
          handleClick(newWindow)
        }
      }
    }

    const handleClickLink = (event) => {
      emit('click', event)
      const openInNewWindow = event.ctrlKey || event.metaKey

      handleCheckClick(event, openInNewWindow)
    }

    return {
      state,
      tagName,
      tagProps,
      linkUrl,
      handleClick,
      handleCheckClick,
      handleClickLink
    }
  }
})
</script>
