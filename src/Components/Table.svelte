<script lang="ts">
import type { dataType, tableFormValue } from '@/type';
import '../CSS/Table.css'
import { onMount } from 'svelte';
import toast, { Toaster } from 'svelte-french-toast';

export let data  : dataType;
export let totalExpence  : number;
export let profit  : number =0;
export let balance  : number = 0;

onMount(()=>{
  console.log("data")
  console.log(data)
})

let isEditing  : boolean = false ;

let formValue : tableFormValue = {
    firstObject : {
      officeExpence: 0  ,
      personalExpence: 0  ,
      returnBarrowed: 0  ,
      helpAmount: 0  ,
      total_1: 0  ,
    } ,

    secondObject : {
      officeIncome: 0  ,
      barrowedAmount_1: 0  ,
      collectedFromHelp: 0  ,
      total_2: 0  ,
    } ,
    
    thirdObject : {
      helpingAmount: 0  ,
      collectedAmount: 0  ,
      balanceWantToCollect: 0  ,
    } ,
    
    fourthObject : {
      barrowedAmount_2: 0  ,
      returnedAmount: 0  ,
      wantToPay: 0  ,
    }
}

$:if( formValue.firstObject ) 
{
  formValue.firstObject.total_1 = 0;
  for (const key in formValue.firstObject) 
  {
    if (formValue.firstObject.hasOwnProperty(key) && key !== "total_1") 
    {
      formValue.firstObject.total_1 += formValue.firstObject[key] ;
    }
  }
  // totalExpence = data.totalExpence;
  totalExpence = 0;
  totalExpence += formValue.firstObject.officeExpence + formValue.firstObject.personalExpence ;
}

$:if( formValue.secondObject ) 
{
  formValue.secondObject.total_2 = 0;
  for (const key in formValue.secondObject) 
  {
    if (formValue.secondObject.hasOwnProperty(key) && key !== "total_2")
    {
      formValue.secondObject.total_2 += formValue.secondObject[key] ;
    }
  }
}

$:if(formValue.thirdObject)
{
  if(formValue.thirdObject.helpingAmount < formValue.thirdObject.collectedAmount)
  {
    toast.error("The amount collected exceeds the amount borrowed.")
    // formValue.thirdObject.helpingAmount = data.helpingAmount ;
    // formValue.thirdObject.collectedAmount = data.collectedAmount ;

    // Need to command
    formValue.thirdObject.helpingAmount = 0;
    formValue.thirdObject.collectedAmount = 0 ;
  }
  formValue.thirdObject.balanceWantToCollect =  formValue.thirdObject.helpingAmount -  formValue.thirdObject.collectedAmount ;
}

$:if(formValue.fourthObject)
{
  if(formValue.fourthObject.returnedAmount > formValue.fourthObject.barrowedAmount_2)
  {
    toast.error("The amount collected exceeds the amount borrowed.")
  }
  formValue.fourthObject.wantToPay = formValue.fourthObject.barrowedAmount_2 - formValue.fourthObject.returnedAmount ;
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
            {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.officeExpence} />
            {:else}
              {formValue.firstObject.officeExpence}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Personal expence</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.personalExpence} />
            {:else}
              {formValue.firstObject.personalExpence}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Return barrowed</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.returnBarrowed} />
            {:else}
              {formValue.firstObject.returnBarrowed}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Help amount</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.firstObject.helpAmount} />
            {:else}
              {formValue.firstObject.helpAmount}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Total</td>
          <td class="right">{formValue.firstObject.total_1}</td>
        </tr>
      </table>
    </div>

    <div class="col-lg-3 mb-3">
      <table>
        <tr>
          <td class="left">Office income</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.secondObject.officeIncome} />
            {:else}
              {formValue.secondObject.officeIncome}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Barrowed amount</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.secondObject.barrowedAmount_1} />
            {:else}
              {formValue.secondObject.barrowedAmount_1}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Collected from help</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.secondObject.collectedFromHelp} />
            {:else}
              {formValue.secondObject.collectedFromHelp}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Total</td>
          <td class="right">{formValue.secondObject.total_2}</td>
        </tr>
      </table>
    </div>

    <div class="col-lg-3 mb-3">
      <table>
        <tr>
          <td class="left">Helping amount</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.thirdObject.helpingAmount} />
            {:else}
              {formValue.thirdObject.helpingAmount}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Collected amount</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.thirdObject.collectedAmount} />
            {:else}
              {formValue.thirdObject.collectedAmount}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Balance want to collect</td>
          <td class="right">
              {formValue.thirdObject.balanceWantToCollect}
          </td>
        </tr>
      </table>
    </div>

    <div class="col-lg-3 mb-3">
      <table>
        <tr>
          <td class="left">Barrowed amount</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.fourthObject.barrowedAmount_2} />
            {:else}
              {formValue.fourthObject.barrowedAmount_2}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Returned amount</td>
          <td class="right">
            {#if isEditing}
              <input type="number" bind:value={formValue.fourthObject.returnedAmount} />
            {:else}
              {formValue.fourthObject.returnedAmount}
            {/if}
          </td>
        </tr>
        <tr>
          <td class="left">Want to pay</td>
          <td class="right">
              {formValue.fourthObject.wantToPay}
          </td>
        </tr>
      </table>

      <div class="edit mt-3 mb-3">
        <button class="editButton" on:click={handleSubmit}>
          {isEditing ? "Save" : "Edit"} 
        </button>
      </div>

    </div>
  </div>
</main>

<style>
.right input {
  width: 100%;
}
</style>