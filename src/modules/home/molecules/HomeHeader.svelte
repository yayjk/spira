<script>
  import CoreUtils from '@/core/utils';
  const greetingMessage = CoreUtils.getGreetingsMessage();
</script>

<div id="container">
  <div>
    <h3>{greetingMessage}</h3>
    <h1>Jaskaran Singh</h1>
  </div>
  <div id="pfp">

  </div>
</div>

<style lang="scss">
  @import './src/styles/variables';

  #container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;

    h3 {
      margin: 0;
      color: $gray;
    }

    h1 {
      margin: 0;
    }

    #pfp{
      border-radius: 100px;
      border-color: $light-gray;
      border-style: solid;
      border-width: 1px;
      width: 40px;
      height: 40px;
      background-color: $gray;
    }
  }
</style>
