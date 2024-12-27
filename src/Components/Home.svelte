<script lang="ts">
  import { onMount } from "svelte";
  import type { dataType, homeFormValues } from "../type";
  import '../CSS/Home.css';
  import Table from "./Table.svelte";
  import StudentForm from "./StudentForm.svelte";

  export let loading: boolean;
  export let showLogin: boolean;

  let formValue : homeFormValues = {
    date : new Date(),
    subject : "",
    amount : 0,
    type : "",
    typeOfType : ""
  }

  let student : string = "" ; // Need to change string[] for students list
  let showStudentForm : string = "existingStudent" ;

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

  function clearForm() {
    formValue = {
      date : new Date(),
      subject : "",
      amount : 0,
      type : "",
      typeOfType : ""
    }
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
        <p class="profit">Last month balance = {balance}</p>
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
                <option value="" selected>Select option</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            <div class="col-lg-3 ">
              <label class="mb-1" for="Amount">Type</label>
              <select
                class="form-select"
                aria-label="Default select example"
                bind:value={formValue.typeOfType}
                required >
              <option value="" selected>Select option</option>
                {#if formValue.type == "Income"}    
                <optgroup label="Fees">
                  <option value="studentFee">Student fee </option>
                  <option value="clientFee">Client fee</option>
                </optgroup>      
                <optgroup label="Others">
                  <option value="officeIncome">Office income </option>
                  <option value="barrowedAmount">Barrowed amount </option>
                  <option value="collectedFromHelp">Collected from help </option>
                </optgroup>      
                {:else}
                  <option value="officeExpence">Office expence</option>
                  <option value="personalExpence">Personal expence</option>
                  <option value="returnBarrowed">Return barrowed</option>
                  <option value="helpingAmount">Helping amount</option>
                  <option value="investment">Investment</option>
                {/if}
              </select>
            </div>

            <div class="col-lg-12">
              <label class="mb-1" for="subject">Subject</label>
              <textarea
                class="form-control"
                name="subject"
                id="subject"
                bind:value={formValue.subject}
                placeholder="Subject....." required></textarea>
            </div>

            {#if formValue.type == "Income" && formValue.typeOfType == "studentFee"}
              <div class="col-lg-12 mt-3">
                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" on:click={()=>{showStudentForm = "existingStudent"}} checked={showStudentForm == "existingStudent"}>
                <label class="btn btn-outline-success" for="success-outlined">Existing student</label>

                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"  on:click={()=>{showStudentForm = "newStudent"}} checked ={showStudentForm == "newStudent"}>
                <label class="btn btn-outline-success" for="danger-outlined">New Student</label>
              </div>

              {#if showStudentForm == "newStudent" }
                <div class="col-lg-12 mt-3">
                  <StudentForm /> 
                </div>
              {:else}
                <div class="col-lg-12 mt-3">
                  <label class="mb-1" for="student">Student</label>
                  <select
                    name="student"
                    class="form-select"
                    aria-label="Default select example"
                    bind:value={student}
                    required >
                      <option value="" selected>Select an option</option>
                      <option value="officeExpence">Office expence</option>
                      <option value="personalExpence">Personal expence</option>
                      <option value="returnBarrowed">Return barrowed</option>
                      <option value="helpingAmount">Helping amount</option>
                      <option value="investment">Investment</option>
                  </select>
                </div>
              {/if}
            {/if}

            <div class="buttons mt-3">
              <div class="row">
                <div class="col-lg-6">
                  <button on:click={clearForm} type="reset" class="clearButton">Clear</button>
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
