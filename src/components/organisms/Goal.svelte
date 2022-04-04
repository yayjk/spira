
<script lang="ts">
  import Header from '../atoms/Header.svelte'
  import GoalCard from '../molecules/GoalCard.svelte';
  import Space from '../atoms/Space.svelte'
</script>

<div>
  <Header title="Goals" linkText="See all" link="/"/>
  <Space />
  <GoalCard goalAmount={100000} title="Honeymoon" goalAchieved={10} fillColor="pink"/>
  <Space />
  <GoalCard goalAmount={400000} title="House" goalAchieved={25} fillColor="blue"/>
</div>

