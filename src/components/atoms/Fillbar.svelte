<script>
    export let emptyColor;
    export let percentage;
    export let fillColor;
    
    const emptyBarStyle = `--emptyColor:${emptyColor};`
    const fillBarStyle = `--percentage: ${percentage}%; --fillColor: ${fillColor}`
</script>

<div id="fill-bar" style={emptyBarStyle}>
    <div style={fillBarStyle}></div>
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