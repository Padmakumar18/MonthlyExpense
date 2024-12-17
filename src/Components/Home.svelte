<script lang="ts">
  import { onMount } from "svelte";
  import type { dataType } from "../type";

  export let loading: boolean;
  export let showLogin: boolean;

  let date: Date = new Date();
  let subject: string = "";
  let amount: number = 0;
  let type: string = "";
  let typeOfType: string = "";
  let balance: number = 0;

  let isEditing  : boolean = false ;

  let profit: number = 0;

  let officeIncome: number = 0;
  let barrowedAmount_1: number = 0;
  let collectedFromHelp: number = 0;
  let total_1: number = 0;

  let officeExpence: number = 0;
  let personalExpence: number = 0;
  let returnBarrowed: number = 0;
  let helpAmount: number = 0;
  let total_2: number = 0;

  let totalExpence: number = 0;

  let helpingAmount: number = 0;
  let collectedAmount: number = 0;
  let balanceWantToCollect: number = 0;

  let barrowedAmount_2: number = 0;
  let returnedAmount: number = 0;
  let wantToPay: number = 0;

  let data: dataType;

  onMount(() => {
    getData();
  });

  function logout() {
    loading = true;
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    showLogin = true;
    loading = false;
  }

  const getData = async () => {};
</script>

<main>
  <div class="container">
    <div class="row mt-2">
      <div class="col-lg-4">
        <p class="date">
          {`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}
        </p>
      </div>
      <div class="col-lg-4">
        <p class="title">GRAPINZ</p>
      </div>
      <div class="col-lg-4 logout">
        <button class="logoutButton" on:click={logout}>Logout</button>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-lg-4">
        <p class="profit">Profit = {profit}</p>
      </div>
      <div class="col-lg-4">
        <p class="profit">Total Expence = {totalExpence}</p>
      </div>
      <div class="col-lg-4">
        <p class="profit">Balance = {balance}</p>
      </div>
    </div>

    <hr />

    <div class="row showValues">
      <div class="col-lg-3">
        <table>
          <tr>
            <td class="left">Office expence</td>
            <td class="right">
              {#if isEditing}
                <input type="text" bind:value={officeExpence} />
              {:else}
                {officeExpence}
              {/if}</td>
          </tr>
          <tr>
            <td class="left">Personal expence</td>
            <td class="right">{personalExpence}</td>
          </tr>
          <tr>
            <td class="left">Return barrowed</td>
            <td class="right">{returnBarrowed}</td>
          </tr>
          <tr>
            <td class="left">Help amount</td>
            <td class="right">{helpAmount}</td>
          </tr>
          <tr>
            <td class="left">Total</td>
            <td class="right">{total_2}</td>
          </tr>
        </table>
      </div>

      <div class="col-lg-3">
        <table>
          <tr>
            <td class="left">Office income</td>
            <td class="right">{officeIncome}</td>
          </tr>
          <tr>
            <td class="left">Barrowed amount</td>
            <td class="right">{barrowedAmount_1}</td>
          </tr>
          <tr>
            <td class="left">Collected from help</td>
            <td class="right">{collectedFromHelp}</td>
          </tr>
          <tr>
            <td class="left">Total</td>
            <td class="right">{total_1}</td>
          </tr>
        </table>
      </div>

      <div class="col-lg-3">
        <table>
          <tr>
            <td class="left">Helping amount</td>
            <td class="right">{helpingAmount}</td>
          </tr>
          <tr>
            <td class="left">Collected amount</td>
            <td class="right">{collectedAmount}</td>
          </tr>
          <tr>
            <td class="left">Balance want to collect</td>
            <td class="right">{balanceWantToCollect}</td>
          </tr>
        </table>
      </div>

      <div class="col-lg-3 ">
        <table>
          <tr>
            <td class="left">Barrowed amount</td>
            <td class="right">{barrowedAmount_2}</td>
          </tr>
          <tr>
            <td class="left">Returned amount</td>
            <td class="right">{returnedAmount}</td>
          </tr>
          <tr>
            <td class="left">Want to pay</td>
            <td class="right">{wantToPay}</td>
          </tr>
        </table>
        <div class="edit mt-3 mb-3">
          <button class="editButton" on:click={() => isEditing = !isEditing}>
            {isEditing ? "Save" : "Edit"} 
          </button>
        </div>
      </div>
    </div>

    <hr />

    <div class="mt-3">
      <form action="">
        <div class="form">
          <div class="row p-3">

            <div class="col-lg-3 p-2">
              <label class="mb-1" for="date">Date</label>
              <input class="form-control" type="date" name="date" required />
            </div>

            <div class="col-lg-3 p-2">
              <label class="mb-1" for="date">Amount</label>
              <input class="form-control" type="text" name="date" required />
            </div>

            <div class="col-lg-3 p-2">
              <label class="mb-1" for="type">Income / Expense</label>
              <select
                class="form-select"
                id="languages"
                name="languages"
                required
              >
                <option selected>Select option</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div class="col-lg-3 p-2">
              <label class="mb-1" for="Amount">Type</label>
              <select
                class="form-select"
                aria-label="Default select example"
                required
              >
                <option selected>Select option</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="col-lg-12 p-2">
              <label class="mb-1" for="subject">Subject</label>
              <textarea
                class="form-control"
                name="subject"
                id="subject"
                required
              ></textarea>
            </div>

            <div class="col-lg-12 submit mt-3">
              <button type="submit" class="submitButton">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</main>

<style>
  
  .showValues ,.form {
    border: 1px solid rgb(109, 109, 109);
    border-radius: 1em;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  tr {
    border-bottom: 1px solid #ccc;
  }
  td {
    padding: 8px 0;
  }
  .left {
    text-align: left;
    width: 70%;
  }
  .right {
    text-align: right;
    width: 30%;
  }
  .logout,
  .submit,
  .edit {
    display: flex;
    justify-content: end;
  }
  .logoutButton,
  .submitButton,
  .editButton {
    background-color: #36a9ae;
    background-image: linear-gradient(#37adb2, #329ca0);
    border: 1px solid #2a8387;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    font-size: 17px;
    line-height: 100%;
    margin: 0;
    outline: 0;
    padding: 11px 15px 12px;
    text-align: center;
    transition:
      box-shadow 0.05s ease-in-out,
      opacity 0.05s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    letter-spacing: 2px;
  }

  .logoutButton:hover {
    box-shadow:
      rgba(255, 255, 255, 0.3) 0 0 2px inset,
      rgba(0, 0, 0, 0.4) 0 1px 2px;
    text-decoration: none;
    transition-duration: 0.15s, 0.15s;
  }

  .logoutButton:active {
    box-shadow:
      rgba(0, 0, 0, 0.15) 0 2px 4px inset,
      rgba(0, 0, 0, 0.4) 0 1px 1px;
  }

  .logoutButton:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
</style>
