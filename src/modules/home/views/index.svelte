<script lang="ts">
  import Goals from '@/components/organisms/Goal.svelte';
  import HomeHeader from '@/modules/home/molecules/HomeHeader.svelte';
  import BalanceCard from '@/modules/home/molecules/BalanceCard.svelte';
  import TransactionItem from '@/components/molecules/TransactionItem.svelte';
</script>

<HomeHeader />
<BalanceCard balance={170000} />
<Goals />
<TransactionItem />

