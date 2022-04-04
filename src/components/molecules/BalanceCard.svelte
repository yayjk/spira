<script>
  import CoreUtils from '../../core/utils';

  export let balance;
</script>

<div id="container">
  <h1>{CoreUtils.formatMoney(balance)}</h1>
  <p>Total Balance</p>
  <div id="flair"/>
</div>

<style lang="scss">
  @import '../../styles/variables';

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

    #flair {
      position: absolute;
      width: 23%;
      height: 50%;
      border-color: $flair-blue;
      border-width: 12px;
      border-style: solid;
      border-radius: 1000px;
      top: -10%;
      left: -10%;
    }
  }
</style>
