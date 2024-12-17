<script lang="ts">
  import { onMount } from "svelte";
  import { runGas } from "./gas";
  import Login from "./Components/Login.svelte";
  import Home from "./Components/Home.svelte";
  import Loading from "./Components/Loading.svelte";
  import toast, { Toaster } from 'svelte-french-toast';

  let loading: boolean = true;
  let showLogin: boolean = true;
  let validUser: boolean = false;

  let email: string = "";
  let password: string = "";

  onMount(() => {
    let email = localStorage.getItem("email") || "";
    let password = localStorage.getItem("password") || "";

    if (email !== "" && password !== "") {
      handleLogin({ detail: { email, password } });
    }
    loading = false ;
  });

  async function handleLogin(event?: { detail: { email: string; password: string }}) {
    loading = true
    let userEmail = event?.detail.email || email;
    let userPassword = event?.detail.password || password;

    localStorage.setItem('email', userEmail );
    localStorage.setItem('password', userPassword );

    validUser = await runGas("getUser", "", userEmail, userPassword);
    
    if ( validUser ) {
      showLogin = false;
    }
    else {
      toast.error("Invalid Mail or Password")
    }

    loading = false;
  }
  </script>

<main>
  <Home bind:loading bind:showLogin/>
  <!-- <Toaster />
  {#if loading}
    <div class="loading">
      <Loading />
    </div>
  {:else}
    {#if showLogin}
      <Login bind:email bind:password on:loginSubmit={handleLogin} />
    {:else}
    <Home bind:loading bind:showLogin/>
    {/if}
  {/if} -->
</main>

<style>

  main {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    border-radius: 1em;
  }

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
