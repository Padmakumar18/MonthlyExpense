<script lang="ts">
  import { onMount } from "svelte";
  import type { dataType, homeFormValues } from "../type";
  import '../CSS/Home.css';
  import Table from "./Table.svelte";

  export let loading: boolean;
  export let showLogin: boolean;

  let formValue : homeFormValues = {
    date : new Date(),
    subject : "",
    amount : 0,
    type : "",
    typeOfType : ""
  }

  let balance: number = 0;

  let profit: number = 0;

  let totalExpence: number = 0;

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

  const getData = async () => {
    console.log("Getting data....")
  };

  function handleFormSubmit() {
    console.dir(formValue,{depth:null})
  }

</script>

<main>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-lg-4">
        <p class="date">
           Date = {`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}
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

    <div class="row mainValues">
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

    <Table bind:totalExpence bind:profit bind:balance bind:data/>

    <hr />

    <div class="mt-3">
      <form on:submit|preventDefault="{handleFormSubmit}">
        <div class="form">
          <div class="row">

            <div class="col-lg-3 ">
              <label class="mb-1" for="date">Date</label>
              <input class="form-control" type="date" name="date" bind:value={formValue.date} required />
            </div>

            <div class="col-lg-3 ">
              <label class="mb-1" for="date">Amount</label>
              <input class="form-control" type="number" name="date" bind:value={formValue.amount} required />
            </div>

            <div class="col-lg-3 ">
              <label class="mb-1" for="type">Income / Expense</label>
              <select
                class="form-select"
                id="languages"
                name="languages"
                bind:value={formValue.type}
                required
              >
                <option selected>Select option</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div class="col-lg-3 ">
              <label class="mb-1" for="Amount">Type</label>
              <select
                class="form-select"
                aria-label="Default select example"
                bind:value={formValue.typeOfType}
                required
              >
                <option selected>Select option</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="col-lg-12 ">
              <label class="mb-1" for="subject">Subject</label>
              <textarea
                class="form-control"
                name="subject"
                id="subject"
                bind:value={formValue.subject}
                required
              ></textarea>
            </div>

            <div class="buttons mt-3">
              <div class="row">
                <div class="col-lg-6">
                  <button type="reset" class="clearButton">Clear</button>
                </div>
    
                <div class="col-lg-6 submit">
                  <button type="submit" class="submitButton">Submit</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  </div>
</main>

<style>
  .submit {
    display: flex;
    justify-content: end;
  }
</style>
