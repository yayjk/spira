<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  export let emptyColor;
  export let percentage;
  export let fillColor;

  const per = tweened(0, { duration: 500, easing: cubicOut, delay: 500  });

  const emptyBarStyle = `--emptyColor:${emptyColor};`;
  $: fillBarStyle = `--percentage: ${$per}%; --fillColor: ${fillColor}`;
  per.set(percentage);
</script>

<div id="fill-bar" style={emptyBarStyle}>
  <div style={fillBarStyle} />
</div>

<style lang="scss">
  #fill-bar {
    height: 2px;
    background-color: var(--emptyColor);
    width: 100%;

    div {
      width: var(--percentage);
      background-color: var(--fillColor);
      height: 100%;
    }
  }
</style>
