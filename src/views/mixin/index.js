
export default {
  created() {
    this.$store.dispatch('m1/getParts');
  },
  computed: {
    parths() {
      return this.$store.state.m1.parts;
    },
  },
};
