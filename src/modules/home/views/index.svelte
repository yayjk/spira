<script lang="ts">
  import Goals from "@/components/organisms/Goal.svelte";
  import HomeHeader from "@/modules/home/molecules/HomeHeader.svelte";
  import BalanceCard from "@/modules/home/molecules/BalanceCard.svelte";
  import TransactionItem from "@/components/molecules/TransactionItem.svelte";
  import MoneyTerminal from "@/modules/home/atoms/MoneyTerminal.svelte";
  import Space from "@/components/atoms/Space.svelte";
  import Header from "@/components/atoms/Header.svelte";
  import CategoryExpenditureCard from "../molecules/CategoryExpenditureCard.svelte";

  const dummyData = [
    { num: 1, category: "a", val: 500 },
    { num: 2, category: "b", val: 500 },
    { num: 3, category: "c", val: 500 },
    { num: 4, category: "d", val: 500 },
    { num: 5, category: "e", val: 500 },
    { num: 6, category: "f", val: 500 },
    { num: 7, category: "g", val: 500 },
    { num: 8, category: "h", val: 500 },
    { num: 9, category: "i", val: 500 },
    { num: 10, category: "j", val: 500 },
    { num: 11, category: "k", val: 500 },
  ];
</script>

<HomeHeader />
<Space size="2em" />
<div>
  <BalanceCard balance={170000} />
  <Space size="1.2em" />
  <div id="terminal-container">
    <MoneyTerminal value={100} title="Income" type="up" />
    <MoneyTerminal value={600} title="Expense" type="down" />
  </div>
</div>
<Space size="1.5em" />
<div>
  <Header linkText="See all" link="/" title="Category Expenses" />
  <Space />
  <div id="category-expense-container">
    {#each dummyData as { num, category, val }}
      <CategoryExpenditureCard type={(num % 8) + 1} {category} value={val} />
    {/each}
  </div>
</div>
<Space />
<Goals />
<Space />
<TransactionItem />

<style lang="scss">
  #terminal-container {
    display: flex;
    justify-content: space-around;
  }

  #category-expense-container {
    display: flex;
    overflow: scroll;
  }
</style>
