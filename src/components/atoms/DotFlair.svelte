<script>
  import CoreUtils from '../../core/utils';
  const xFlairMatrix = CoreUtils.getNumberArray(5);
  const yFlairMatrix = CoreUtils.getNumberArray(6);
  import { Positions, Theme } from '../../core/types';

  export let position;
  export let theme;
  let containerStyle = '';

  switch (position) {
    case Positions.BOTTOM_LEFT: {
      containerStyle = `bottom: 0; left: -10px;`;
      break;
    }
    case Positions.BOTTOM_RIGHT: {
      containerStyle = `bottom: 0; right: -10px;`;
      break;
    }
    case Positions.TOP_LEFT: {
      containerStyle = `top: 0; left: -10px;`;
      break;
    }
    case Positions.TOP_RIGHT: {
      containerStyle = `top: 0; right: -10px;`;
      break;
    }
    default: {
      containerStyle = `bottom: 0; right: -10px;`;
      break;
    }
  }

  $: themeClass = theme === Theme.PRIMARY ? 'primary' : 'secondary'
</script>

<div id="flairTwoContainer" style={containerStyle}>
  {#each xFlairMatrix as x}
    <div class="flairTwoIndContainer">
      {#each yFlairMatrix as y}
        <div class="flairTwoInd {themeClass}" />
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  @import '../../styles/variables';
  #flairTwoContainer {
    position: absolute;

    .flairTwoIndContainer {
      display: flex;
      flex-direction: row;

      .flairTwoInd {
        width: 8px;
        height: 8px;
        border-radius: 5px;
        margin-right: 2px;
        margin-bottom: 2px;
      }

      .primary {
        background-color: $flair-blue;
      }

      .secondary{
        background-color: $flair-orange;
      }
    }
  }
</style>
