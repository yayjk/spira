<div id="container">
  <div class="group"><i class="fa-solid fa-house fa-lg" /></div>
  <div class="group"><i class="fa-solid fa-bullseye fa-lg" /></div>
  <div class="group" id="spotlight"><i class="fa-solid fa-plus fa-lg" /></div>
  <div class="group" id="disabled"><i class="fa-solid fa-spinner fa-lg" /></div>
  <div class="group"><i class="fa-solid fa-gear fa-lg" /></div>
</div>

<style lang="scss">
  @import './src/styles/variables';

  #container {
    display: flex;
    width: calc(100%);
    justify-content: space-between;
    background-color: $light-gray;
    padding-bottom: 1em;
    padding-top: 0.5em;

    #spotlight {
      position: relative;
      bottom: calc(24px + 0.5em);
      background-color: $primary;
      border-radius: 24px;
       i{
         color: white;
       }
    }

    .group {
      padding: 16px;
    }
  }
</style>
