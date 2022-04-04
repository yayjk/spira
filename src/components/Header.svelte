<script>
    export let title;
    export let linkText = 'View all';
    export let link;
</script>

<div id="container">
    <div>{title}</div>
    <a href={link}>{linkText}</a>
</div>

<style lang="scss">

    #container{
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 18px;
        align-items: center;

        div {
            font-weight: 700;
        }

        a {
            color: #443FF0;
            text-decoration: none;
            font-weight: 500;
        }
    }
</style>