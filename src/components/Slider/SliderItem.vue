<template lang="jade">
    li.slider-item(:style="itemStyle")
      img(:src="item.src", :alt="item.alt")
      p test
</template>

<script>
  export default {
    name: 'SliderItem',
    props: {
      count: {
        type: Number,
        required: true
      },
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      itemStyle () {
        return { 'width': 100 / this.count + '%' }
      }
    }
  }
</script>