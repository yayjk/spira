<script lang="ts">
  import CoreUtils from "@/core/utils";
  export let value;
  export let title;
  export let type;

  let isIncome = type === "up";
  let isExpense = type === "down";
  let className;

  if (isIncome) className = "green";
  else if (isExpense) className = "orange";
</script>

<div id="container">
  <div id="presentation" class={className}>
    {#if isIncome}
      <i class="fa-solid fa-arrow-up fa-lg primary" />
    {:else if isExpense}
      <i class="fa-solid fa-arrow-down fa-lg secondary" />
    {/if}
  </div>
  <div id="information">
    <div id="title">
      {title}
    </div>
    <div id="value">
      {CoreUtils.formatMoney(value)}
    </div>
  </div>
</div>

<style lang="scss">
  @import "./src/styles/variables";

  #container {
    display: flex;
    align-items: center;

    #presentation {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background-color: $light-gray;
      margin-right: 16px;
    }

    .primary {
      color: $primary;
    }

    .secondary {
      color: $secondary;
    }

    #information {
      #title {
        color: $gray;
        font-size: 14px;
      }

      #value {
        font-size: 20px;
      }
    }
  }
</style>
