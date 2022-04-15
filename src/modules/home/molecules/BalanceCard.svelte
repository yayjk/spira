<script>
  import CoreUtils from '@/core/utils';
  import { Positions, Theme } from '@/core/types';
  import CircleFlair from '@/components/atoms/CircleFlair.svelte';
  import DotFlair from '@/components/atoms/DotFlair.svelte';

  export let balance;
</script>

<div id="container">
  <h1>{CoreUtils.formatMoney(balance)}</h1>
  <p>Total Balance</p>
  <CircleFlair position={Positions.TOP_LEFT} theme={Theme.PRIMARY} />
  <DotFlair position={Positions.BOTTOM_RIGHT} theme={Theme.PRIMARY} />
</div>

<style lang="scss">
  @import './src/styles/variables';

  #container {
    position: relative;
    border-radius: 32px;
    background-color: $primary;
    padding: 32px;
    padding-left: 48px;
    margin-bottom: 16px;
    margin-top: 24px;
    overflow: hidden;

    h1 {
      color: white;
      margin: 0;
      margin-bottom: 4px;
      font-size: 40px;
      position: relative;
      z-index: 2;
    }

    p {
      margin: 0;
      color: $gray;
      position: relative;
      z-index: 2;
    }
  }
</style>
