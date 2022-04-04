<script>
    export let emptyColor;
    export let percentage;
    export let fillColor;
</script>

<div id="fill-bar" style="--emptyColor:{emptyColor};">
    <div style="--percentage: {percentage}%; --fillColor: {fillColor}"></div>
</div>

<style lang="scss">
    #fill-bar{
        height: 2px;
        background-color: var(--emptyColor);
        width: 100%;

        div{
            width: var(--percentage);
            background-color: var(--fillColor);
            height: 100%;
        }
    }
</style>