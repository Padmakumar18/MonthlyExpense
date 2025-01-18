<script lang="ts">
import { onMount } from "svelte";
import type { studentForm } from "../type";
import '../CSS/StudentForm.css'

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
          <label class="mb-1" for="date">Joining date <span> *</span></label>
          <input class="form-control" type="date" name="date" bind:value={formValue.joiningDate} required />
        </div>
  
        <div class="col-lg-3 ">
          <label class="mb-1" for="name">Name <span>*</span></label>
          <input class="form-control" type="text" name="name" bind:value={formValue.name} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="phoneNumber">Phone number <span> *</span></label>
          <input class="form-control" type="text" name="phoneNumber" bind:value={formValue.phoneNumber} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="email">Email <span> *</span></label>
          <input class="form-control" type="email" name="email" bind:value={formValue.email} required />
        </div>


        <div class="col-lg-3 ">
          <label class="mb-1" for="course">Course <span> *</span></label>
          <input class="form-control" type="text" name="course" bind:value={formValue.course} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="batchNumber">Batch number <span> *</span></label>
          <input class="form-control" type="text" name="batchNumber" bind:value={formValue.batchNumber} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="referenceNumber">Reference number <span> *</span></label>
          <input class="form-control" type="text" name="referenceNumber" bind:value={formValue.referenceNumber} required />
        </div>

        <div class="col-lg-3 ">
          <label class="mb-1" for="isGotCertification">Got certification <span> *</span></label>
          <select
            name="student"
            class="form-select"
            aria-label="Default select example"
            bind:value={formValue.isGotCertification}
            required >
              <option value="" selected>Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
        </div>

        <div class="buttons mt-3">
          <div class="row">
            <div class="col-lg-6 clear">
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
  span {
    color: red;
  }
</style>