<script lang="ts">

export let showStudents : boolean[] = [] ;
export let indexToClose : number ;

let nameToSearch : string = "" ;

$:if(nameToSearch) {
    console.log(nameToSearch)
}

function handleSearch() {

}

function handleClose() {
    showStudents[indexToClose] = false ;
}
</script>

<main>
<div class="container-fluid con">
    <div class="row">
        <div class="col-6">
            <label for="search">Name to search : </label>
            <input name="search" type="text" bind:value={nameToSearch}>
            <button class="searchButton" on:click={handleSearch}>Search</button>
            <button class="emptyButton" on:click={()=>{nameToSearch = ""}}>Clear</button>
        </div>
        <div class="col-2">
            <p>Student list</p>
        </div>
        <div class="col-4 closeButton">
            <button class="button-23" on:click={()=>handleClose()}>Close X</button>
        </div>
        <!-- -------- -->
        {#if nameToSearch == ""}
            <div class="col-12 mt-3">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Student 1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-6">
                                    <p>Email :</p>
                                    <p>Phone number :</p>
                                    <p>Reference number :</p>
                                    <p>Batch number :</p>
                                </div>
                                <div class="col-6">
                                    <p>Joining Date :</p>
                                    <p>End date :</p>
                                    <p>Got certification :</p>
                                    <p>Fee details : <span>1000 </span> <span>1000 </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        {/if}
        <!-- -------- -->
        
    </div>
</div>
</main>

<style>
    .con {
        border: 1px solid black;
        padding: 1em;
        border-radius: 1em;
    }

    .closeButton {
        display: flex;
        justify-content: end;
    }

    .button-23 ,.searchButton,.emptyButton {
        background-color: #FFFFFF;
        border: 1px solid #222222;
        border-radius: 5px;
        box-sizing: border-box;
        cursor: pointer;
        line-height: 20px;
        margin: 0;
        outline: none;
        padding: 5px 7px;
        position: relative;
        text-align: center;
        text-decoration: none;
        touch-action: manipulation;
        transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
        user-select: none;
        -webkit-user-select: none;
        width: auto;
    }

    .searchButton:active,.button-23:active ,.emptyButton:active{
        border-color: #000000;
        transform: scale(.96);
    }
</style>