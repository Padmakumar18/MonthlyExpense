<script lang="ts">
import { onMount } from "svelte";
import type { studentForm } from "../type";

let formValue : studentForm = {
    joiningDate : new Date() ,
    name : "" , 
    course : "" ,
    batchNumber : "" ,
    referenceNumber : "" ,
    phoneNumber : 0 ,
    email : "" ,
    isGotCertification : ""
}

function handleFormSubmit()
{
  
}

function clear() {
  formValue = {
    joiningDate : new Date() ,
    name : "" , 
    course : "" ,
    batchNumber : "" ,
    referenceNumber : "" ,
    phoneNumber : 0 ,
    email : "" ,
    isGotCertification : ""
  }
}
</script>

<main>
  
<div class="row">
  <div class="col-12 d-flex align-items-center justify-content-center">
    <p>Student Details</p>
  </div>
  <div class="col-12">
    <form on:submit|preventDefault="{handleFormSubmit}">
      <div class="row">

        <div class="col-lg-3 mb-2">
          <label class="mb-1" for="date">Joining date</label>
          <input class="form-control" type="date" name="date" bind:value={formValue.joiningDate} required />
        </div>
  
        <div class="col-lg-3 ">
          <label class="mb-1" for="name">Name</label>
          <input class="form-control" type="text" name="name" bind:value={formValue.name} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="phoneNumber">Phone number</label>
          <input class="form-control" type="text" name="phoneNumber" bind:value={formValue.phoneNumber} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="email">Email</label>
          <input class="form-control" type="email" name="email" bind:value={formValue.email} required />
        </div>


        <div class="col-lg-3 ">
          <label class="mb-1" for="course">Course</label>
          <input class="form-control" type="text" name="course" bind:value={formValue.course} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="batchNumber">Batch number</label>
          <input class="form-control" type="text" name="batchNumber" bind:value={formValue.batchNumber} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="referenceNumber">Reference number</label>
          <input class="form-control" type="text" name="referenceNumber" bind:value={formValue.referenceNumber} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="isGotCertification">Got certification</label>
          <input class="form-control" type="text" name="isGotCertification" bind:value={formValue.isGotCertification} required />
        </div>

        <div class="buttons mt-3">
          <div class="row">
            <div class="col-lg-6">
              <button on:click={clear} type="reset" class="clear_button">Clear</button>
            </div>

            <div class="col-lg-6 submit">
              <button type="submit" class="submit_button">Save</button>
            </div>
          </div>
        </div>

      </div>
    </form>
  </div>
</div>
</main>

<style>
  main {
    border: 1px solid black;
    padding: 1em;
    border-radius: 1em;
  }

  .submit {
    display: flex;
    justify-content: end;
  }

  .clear_button {
    background-color:chocolate;
  }

  .submit_button {
    background-color: cadetblue;
  }

.submit_button,
.clear_button {
  border:none;
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
  transition: box-shadow 0.05s ease-in-out, opacity 0.05s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  letter-spacing: 2px;
}
</style>