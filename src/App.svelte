<script lang="ts">
  import { onMount } from "svelte";
  import { runGas } from "./gas";
  import Login from "./Components/Login.svelte";
  import Home from "./Components/Home.svelte";
  import Loading from "./Components/Loading.svelte";
  import toast, { Toaster } from 'svelte-french-toast';
  import './CSS/App.css'

  let loading: boolean = true;
  let showLogin: boolean = true;
  let validUser: boolean = false;

  let email: string = "";
  let password: string = "";

  onMount(() => {
    loading = true ;
    let email = localStorage.getItem("email") || "";
    let password = localStorage.getItem("password") || "";

    if (email !== "" && password !== "") {
      handleLogin({ detail: { email, password } });
    } 
    else {
      loading = false ;
    }
    
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
      toast.success("Login successfully")
    }
    else {
      toast.error("Invalid Mail or Password")
    }
    loading = false;
  }
  </script>

<main>
  <!-- <div class = "{ !showLogin ? 'house' : '' }" > -->
  <div class = "{ !showLogin ? 'house' : 'house' }" >
    <Home bind:loading bind:showLogin />
    <Toaster />
    {#if loading}
      <div class="loadingComponent">
        <Loading />
      </div>
    {:else}
      {#if showLogin}
        <Login bind:email bind:password on:loginSubmit={handleLogin} />
      {:else}
        <Home bind:loading bind:showLogin/>
      {/if}
    {/if}
  </div>
</main>

<style>

</style>
