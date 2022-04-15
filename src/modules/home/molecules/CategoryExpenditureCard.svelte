<script lang="ts">
  import { Positions, Theme } from "@/core/types";
  import CircleFlair from "@/components/atoms/CircleFlair.svelte";
  import DotFlair from "@/components/atoms/DotFlair.svelte";
  import CoreUtils from "@/core/utils";
  export let type = 1;
  export let value;
  export let category;

  const mod4 = type % 4;

  const isSecondary = type % 2 === 0;
  let circlePosition;
  let dotPosition;
  const themeClass = !isSecondary ? "primary" : "secondary";

  switch (mod4) {
    case 0: {
      circlePosition = Positions.TOP_LEFT;
      dotPosition = Positions.BOTTOM_RIGHT;
      break;
    }
    case 1: {
      circlePosition = Positions.BOTTOM_LEFT;
      dotPosition = Positions.TOP_RIGHT;
      break;
    }
    case 2: {
      circlePosition = Positions.BOTTOM_RIGHT;
      dotPosition = Positions.TOP_LEFT;
      break;
    }
    case 3: {
      circlePosition = Positions.TOP_RIGHT;
      dotPosition = Positions.BOTTOM_LEFT;
      break;
    }
    default: {
      circlePosition = Positions.TOP_LEFT;
      dotPosition = Positions.BOTTOM_RIGHT;
      break;
    }
  }
</script>

<div id="container" class={themeClass}>
  <div id="info-container">
    <div id="value">{CoreUtils.formatMoney(value)}</div>
    <div id="category">{category}</div>
  </div>
  <CircleFlair
    position={circlePosition}
    theme={isSecondary ? Theme.SECONDARY : Theme.PRIMARY}
    height="50%"
    width="30%"
  />

  <DotFlair
    position={dotPosition}
    theme={isSecondary ? Theme.SECONDARY : Theme.PRIMARY}
  />
</div>

<style lang="scss">
  @import "./src/styles/variables";
  #container {
    position: relative;
    flex: 0 0 33%;
    height: 160px;
    overflow: hidden;
    border-radius: 16px;
    margin-right: 16px;
    padding: 1em;

    #info-container {
      position: absolute;
      bottom: 16px;

      #value {
        position: relative;
        z-index: 2;
        color: white;
        font-weight: bold;
        font-size: 20px;
      }

      #category {
        position: relative;
        z-index: 2;
        color: white;
      }
    }
  }

  .primary {
    background-color: $primary;
  }

  .secondary {
    background-color: $secondary;
  }
</style>
