<template lang="pug">
  el-card.my-2(v-if="image", :class="{'card--active': active}", @click="click")
    img(:src="image", :alt="name")
    p.mb-0.mt-2 {{ name }}
</template>

<script>
export default {
  name: "card",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    account: ""
  }),
  methods: {
    click() {
      //console.log("card inside");
      this.$emit("click");
    }
  }
};
</script>
<style lang="scss">
.el-card {
  &.card {
    &--active {
      .el-card__body {
        border: 1px solid #00bcd4;
      }
    }
  }
}
</style>
