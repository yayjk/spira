<script lang="ts">
  import Goals from './components/organisms/Goal.svelte'
  import HomeHeader from './components/molecules/HomeHeader.svelte'
  import BalanceCard from './components/molecules/BalanceCard.svelte'
</script>

<main>
  <HomeHeader />
  <BalanceCard balance={170000}/>
  <Goals />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Karla','Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
  }
</style>
