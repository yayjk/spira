<script lang="ts">
  import CoreUtils from "../../core/utils";
  const xFlairMatrix = CoreUtils.getNumberArray(5);
  const yFlairMatrix = CoreUtils.getNumberArray(6);
  import { Positions, Theme } from "../../core/types";

  export let position;
  export let theme;
  export let width = "8px";
  export let height = "8px";
  export let borderRadius = "5px";
  export let marginBottom = "2px";
  export let marginRight = "2px";
  let indStyle = `width: ${width}; height: ${height}; border-radius: ${borderRadius}; margin-right: ${marginRight}; margin-bottom: ${marginBottom};`;
  let containerStyle = "";

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

  $: themeClass = theme === Theme.PRIMARY ? "primary" : "secondary";
</script>

<div id="flairTwoContainer" style={containerStyle}>
  {#each xFlairMatrix as x}
    <div class="flairTwoIndContainer">
      {#each yFlairMatrix as y}
        <div class="flairTwoInd {themeClass}" style={indStyle} />
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  @import "../../styles/variables";
  #flairTwoContainer {
    position: absolute;

    .flairTwoIndContainer {
      display: flex;
      flex-direction: row;

      // .flairTwoInd {
      // }

      .primary {
        background-color: $flair-blue;
      }

      .secondary {
        background-color: $flair-orange;
      }
    }
  }
</style>
