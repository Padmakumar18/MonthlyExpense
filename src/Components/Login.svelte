<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import '../CSS/Login.css'

    export let email: string = "";
    export let password: string = "";

    const dispatch = createEventDispatcher();

    function clear() {
        email = "";
        password = "";
    }

    function Submit(event: Event) {
        dispatch("loginSubmit", { email, password }) ;
        clear();
    }
</script>

<main>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="login">
                    <div class="box">
                        <form on:submit|preventDefault={Submit}>
                            <div class="title  d-flex align-items-center justify-content-center">
                                <p>Login</p>
                            </div>
                            <div class="email">
                                <label for="email">Email <span>*</span></label>
                                <br />
                                <input type="email" name="email" id="email" bind:value={email} required />
                            </div>

                            <div class="password mt-2">
                                <label for="password">Password <span>*</span></label>
                                <br />
                                <input type="password" name="password" id="password" bind:value={password} required />
                            </div>

                            <div class="submit mt-3">
                                <button type="reset" class="clearButton" on:click={clear}>Clear</button>
                                <button type="submit" class="loginButton" >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>

</style>