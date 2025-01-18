<script lang="ts">
import type { dataType, tableFormValue } from '@/type';
import '../CSS/Table.css'
import { onMount } from 'svelte';
import toast, { Toaster } from 'svelte-french-toast';
  import Calculator from './Calculator.svelte';

export let data : dataType;
export let totalExpence  : number;
export let profit  : number = 0; 
export let balance  : number = 0;
let formValue : tableFormValue = {
    firstObject : {
      officeExpence: 0  ,
      personalExpence: 0  ,
      investment : 0 ,
      total: 0  ,
    } ,

    secondObject : {
      officeIncome: 0  ,
      collectedFromHelp: 0  ,
      total: 0  ,
    } ,
    
    thirdObject : {
      helpAmount: 0  ,
      collectedAmount: 0  ,
      balanceWantToCollect: 0  ,
    } ,
    
    fourthObject : {
      barrowedAmount: 0  ,
      returnBarrowed: 0  ,
      wantToPay: 0  ,
    }
}

$: if (data) {
    console.log("Editing formValue with data");

    // Mapping data to formValue's firstObject
    formValue.firstObject.officeExpence = data.office_expense;
    formValue.firstObject.personalExpence = data.personal_expense;
    formValue.firstObject.investment = 0; // Assuming no direct mapping for investment in data
    formValue.firstObject.total = data.total_expense;

    // Mapping data to formValue's secondObject
    formValue.secondObject.officeIncome = data.office_income;
    formValue.secondObject.collectedFromHelp = data.collected_from_help;
    formValue.secondObject.total = data.total;

    // Mapping data to formValue's thirdObject
    formValue.thirdObject.helpAmount = data.help_amount;
    formValue.thirdObject.collectedAmount = data.collected_from_help; // Assuming it's equivalent
    formValue.thirdObject.balanceWantToCollect = 0; // Assuming no direct mapping in data

    // Mapping data to formValue's fourthObject
    formValue.fourthObject.barrowedAmount = data.barrowed_amount;
    formValue.fourthObject.returnBarrowed = data.return_barrowed;
    formValue.fourthObject.wantToPay = 0; // Assuming no direct mapping in data

    console.log("Updated formValue:", formValue);
  }


onMount(()=> {
  console.log("on mounnt")
  formValue.fourthObject.barrowedAmount = data.barrowed_amount ;
  console.log(formValue.fourthObject.barrowedAmount);
})

let isEditing  : boolean = false ;

$:if( formValue.firstObject ) 
{
  formValue.firstObject.total = 0;
  for (const key in formValue.firstObject) 
  {
    if (formValue.firstObject.hasOwnProperty(key) && key !== "total") 
    {
      formValue.firstObject.total += formValue.firstObject[key] ;
    }
  }
  formValue.firstObject.total += formValue.fourthObject.returnBarrowed + formValue.thirdObject.helpAmount ;
  // totalExpence = data.totalExpence;
  totalExpence = 0;
  totalExpence += formValue.firstObject.officeExpence + formValue.firstObject.personalExpence ;
}

$:if( formValue.secondObject ) 
{
  formValue.secondObject.total = 0;
  for (const key in formValue.secondObject) 
  {
    if (formValue.secondObject.hasOwnProperty(key) && key !== "total")
    {
      formValue.secondObject.total += formValue.secondObject[key] ;
    }
  }
  formValue.secondObject.total += formValue.fourthObject.barrowedAmount ;
}

$:if(formValue.thirdObject)
{
  if(formValue.thirdObject.helpAmount < formValue.thirdObject.collectedAmount)
  {
    toast.error("The amount collected exceeds the amount borrowed.")
    // formValue.thirdObject.helpAmount = data.helpAmount ;
    // formValue.thirdObject.collectedAmount = data.collectedAmount ;

    // Need to command
    formValue.thirdObject.helpAmount = 0;
    formValue.thirdObject.collectedAmount = 0 ;
  }
  formValue.thirdObject.balanceWantToCollect =  formValue.thirdObject.helpAmount -  formValue.thirdObject.collectedAmount ;
}

$:if(formValue.fourthObject)
{
  if(formValue.fourthObject.returnBarrowed > formValue.fourthObject.barrowedAmount)
  {
    toast.error("The returned amount exceeds the amount borrowed.")
    formValue.fourthObject.barrowedAmount  = 0
    formValue.fourthObject.returnBarrowed = 0;
  }
  formValue.fourthObject.wantToPay = formValue.fourthObject.barrowedAmount - formValue.fourthObject.returnBarrowed ;
}

function handleSubmit() {
  isEditing = !isEditing ;
}


</script>

<main>
  <Toaster/>
  <div class="row showValues">
    <div class="col-lg-3 mb-3">
      <table>
        <tr>
          <td class="left">Office expence</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.officeExpence} />
            {:else}
              {formValue.firstObject.officeExpence}
            {/if} -->
            {formValue.firstObject.officeExpence}
          </td>
        </tr>
        <tr>
          <td class="left">Personal expence</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.personalExpence} />
            {:else}
              {formValue.firstObject.personalExpence}
            {/if} -->
            {formValue.firstObject.personalExpence}
          </td>
        </tr>
        <tr>
          <td class="left">Return barrowed</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.returnBarrowed} />
            {:else}
              {formValue.firstObject.returnBarrowed}
            {/if} -->
            {formValue.fourthObject.returnBarrowed}
          </td>
        </tr>
        <tr>
          <td class="left">Help amount</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.helpAmount} />
            {:else}
              {formValue.firstObject.helpAmount}
            {/if} -->
            {formValue.thirdObject.helpAmount}
          </td>
        </tr>
        <tr>
          <td class="left">Investment</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.investment} />
            {:else}
              {formValue.firstObject.investment}
            {/if} -->
            {formValue.firstObject.investment}
          </td>
        </tr>
        <tr>
          <td class="left">Total</td>
          <td class="right">{formValue.firstObject.total}</td>
        </tr>
      </table>
    </div>

    <div class="col-lg-3 mb-3">
      <table>
        <tr>
          <td class="left">Office income</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.secondObject.officeIncome} />
            {:else}
              {formValue.secondObject.officeIncome}
            {/if} -->
            {formValue.secondObject.officeIncome}
          </td>
        </tr>
        <tr>
          <td class="left">Barrowed amount</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.secondObject.barrowedAmount} />
            {:else}
              {formValue.secondObject.barrowedAmount}
            {/if} -->
            {formValue.fourthObject.barrowedAmount}
          </td>
        </tr>
        <tr>
          <td class="left">Collected from help</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.secondObject.collectedFromHelp} />
            {:else}
              {formValue.secondObject.collectedFromHelp}
            {/if} -->
            {formValue.secondObject.collectedFromHelp}
          </td>
        </tr>
        <tr>
          <td class="left">Total</td>
          <td class="right">{formValue.secondObject.total}</td>
        </tr>
      </table>
    </div>

    <div class="col-lg-3 mb-3">
      <table>
        <tr>
          <td class="left">Helping amount</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.thirdObject.helpAmount} />
            {:else}
              {formValue.thirdObject.helpAmount}
            {/if} -->
            {formValue.thirdObject.helpAmount}
          </td>
        </tr>
        <tr>
          <td class="left">Collected amount</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.thirdObject.collectedAmount} />
            {:else}
              {formValue.thirdObject.collectedAmount}
            {/if} -->
            {formValue.thirdObject.collectedAmount}
          </td>
        </tr>
        <tr class="separate">
          <td class="left">Balance want to collect</td>
          <td class="right">
              {formValue.thirdObject.balanceWantToCollect}
          </td>
        </tr>

        <tr>
          <td class="left">Barrowed amount</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.fourthObject.barrowedAmount} />
            {:else}
              {formValue.fourthObject.barrowedAmount}
            {/if} -->
            {formValue.fourthObject.barrowedAmount}
          </td>
        </tr>
        <tr>
          <td class="left">Returned amount</td>
          <td class="right">
            <!-- {#if isEditing}
              <input type="number" bind:value={formValue.fourthObject.returnBarrowed} />
            {:else}
              {formValue.fourthObject.returnBarrowed}
            {/if} -->
            {formValue.fourthObject.returnBarrowed}
          </td>
        </tr>
        <tr>
          <td class="left">Want to pay</td>
          <td class="right">
              {formValue.fourthObject.wantToPay}
          </td>
        </tr>
      </table>
    </div>

    <div class="col-lg-3 mt-3 mb-3 Calculator">
      <Calculator/>

      <!-- <div class="edit mt-3 mb-3">
        <button class="editButton" on:click={handleSubmit}>
          {isEditing ? "Save" : "Edit"} 
        </button>
      </div> -->

    </div>
  </div>
</main>

<style>
/* .right input {
  width: 100%;
} */
tr.separate {
    border-bottom: 2px solid #000000;
  }
</style>