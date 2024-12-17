<script lang="ts">
    import { createEventDispatcher } from "svelte";

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
    main {
        background-color: rgb(255, 255, 255);
    }

    .box {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 2em;
        border-radius: 1em;
        background-color: white;
    }

    .submit {
        display: flex;
        justify-content: space-between;
    }

    .login span {
        color: red;
    }

    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .clearButton {
        background-color: yellow;
        color: black;
    }

    .loginButton,
    .clearButton {
        background-color: #36a9ae;
        background-image: linear-gradient(#37adb2, #329ca0);
        border: 1px solid #2a8387;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
        color: #ffffff;
        cursor: pointer;
        display: block;
        font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    }

    .loginButton:hover {
        box-shadow: rgba(255, 255, 255, 0.3) 0 0 2px inset, rgba(0, 0, 0, 0.4) 0 1px 2px;
        text-decoration: none;
        transition-duration: 0.15s, 0.15s;
    }

    .loginButton:active {
        box-shadow: rgba(0, 0, 0, 0.15) 0 2px 4px inset, rgba(0, 0, 0, 0.4) 0 1px 1px;
    }

    .loginButton:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
</style>