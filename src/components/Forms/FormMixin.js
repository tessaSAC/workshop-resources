export default {
  props: {
    value: { required: true },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    update (value) {
      this.$emit('input', value)
    },
  },
}
