<script>
  import { Positions, Theme } from '../../core/types';

  export let position;
  export let theme;

  let containerStyle = '';

  switch (position) {
    case Positions.BOTTOM_LEFT: {
      containerStyle = `bottom: -10%; left: -10%;`;
      break;
    }
    case Positions.BOTTOM_RIGHT: {
      containerStyle = `bottom: -10%; right: -10%;`;
      break;
    }
    case Positions.TOP_LEFT: {
      containerStyle = `top: -10%; left: -10%;`;
      break;
    }
    case Positions.TOP_RIGHT: {
      containerStyle = `top: -10%; right: -10%;`;
      break;
    }
    default: {
      containerStyle = `bottom: -10%; right: -10%;`;
      break;
    }
  }

  $: themeClass = theme === Theme.PRIMARY ? 'primary' : 'secondary';
</script>

<div id="flair" style={containerStyle} class={themeClass} />

<style lang="scss">
  @import '../../styles/variables';

  #flair {
    position: absolute;
    width: 22%;
    height: 70%;
    border-width: 12px;
    border-style: solid;
    border-radius: 1000px;
  }

  .primary {
    border-color: $flair-blue;
  }

  .secondary {
    border-color: $flair-orange;
  }
</style>
