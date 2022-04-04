<div>
  <slot />
</div>

<style lang="scss">
  @import '../../styles/variables';

  div {
    border: 1px solid $light-gray;
    box-shadow: 4px 4px 4px $shadow-gray;
    padding: 16px;
    border-radius: 4px;
  }
</style>
