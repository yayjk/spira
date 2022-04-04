<script>
    import Fillbar from './Fillbar.svelte'
    import Card from './Card.svelte'

    export let title;
    export let goalAmount;
    export let goalAchieved;
    export let fillColor;
</script>

<Card>
    <div id="container">
        <div id="logo-container">

        </div>
        <div id="info-container">
            <div id="text-container">
                <div id="title">{title}</div>
                <div id="goal">{goalAmount}</div>
            </div>
            <div id="fill-bar-container">
                <Fillbar emptyColor="#e5e9f0" fillColor={fillColor} percentage={goalAchieved}/>
            </div>
        </div>
    </div>
</Card>

<style lang="scss">
    #container {
        display: flex;
    }

    #logo-container {
        width: 100px;
        height: 100px;
    }

    #info-container{
        flex: 1;
        display: flex;
        flex-direction: column;

    }

    #text-container {
        flex: 1;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 500;
        align-items: center;
    }

    #fill-bar-container{
        flex: 1;
        margin-top: 16px;
    }
</style>