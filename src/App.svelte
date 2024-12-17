<script lang="ts">
  // import 'bootstrap/dist/css/bootstrap.min.css';
  // import 'bootstrap/dist/js/bootstrap.bundle.min.js';

  import { onMount } from "svelte";
  import { runGas } from "./gas";
  import type { dataType } from "./type";
  import Login from "./Components/Login.svelte";
  import Home from "./Components/Home.svelte";
  import Loading from "./Components/Loading.svelte";

  let date: Date = new Date();
  let subject: string = "";
  let amount: number = 0;
  let type: string = "";
  let typeOfType: string = "";
  let previousMonthAmount: number = 0;

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
  let loading: boolean = false;
  let showPage: boolean = false;
  let showLogin: boolean = false;
  let validUser: boolean = false;

  let email: string = "";
  let password: string = "";

  onMount(() => {
    let email = localStorage.getItem("email") || "";
    let password = localStorage.getItem("password") || "";
  });

  // $:if(email && password) {
  //   console.log("--------------")
  //   console.log(email)
  //   console.log(password)
  // }

  const getData = async () => {};

  async function handleLogin(event: {
    detail: { email: string; password: string };
  }) {
    // validUser = await runGas("getUser", "", email , password);
    // loading = false ;
    // if( !validUser ) {
    //   showLogin = true;
    // }
    console.log("------#######-----");
    console.log(event.detail.email);
    console.log(event.detail.password);
  }
</script>

<main>
  <Login bind:email bind:password on:loginSubmit={handleLogin} />
  {#if loading}
    <div class="loading">
      <Loading />
    </div>
  {:else if validUser}
    <Home />
  {/if}
</main>

<style>

.loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
