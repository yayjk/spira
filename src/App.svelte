<script lang="ts">
  import Header from './components/Header.svelte'
  import GoalCard from './components/GoalCard.svelte';
  import Space from './components/Space.svelte'
</script>

<main>
  <Header title="Goals" linkText="See all" link="/"/>
  <Space />
  <GoalCard goalAmount={100000} title="Honeymoon" goalAchieved={10} fillColor="pink"/>
  <Space />
  <GoalCard goalAmount={400000} title="House" goalAchieved={25} fillColor="blue"/>
  <Space />
  <Header title="Expense" linkText="Add new" link="/" />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Karla','Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
