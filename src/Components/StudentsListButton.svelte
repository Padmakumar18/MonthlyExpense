<script lang="ts">
import '../CSS/StudentsListButton.css';
import ListOfStudents from './ListOfStudents.svelte';

let showStudents : boolean[] = [false , false , false]
let courseButton : string = "" ;
let indexNum : number = 0 ;

function courseType(index : number,course : string) {
    showStudents[index] = true ;
    courseButton = course ;
    indexNum = index ;
}

function getDataFromSheet() {
    
}

</script>

<main>
    <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <h5>Courses</h5>
        </div>
    </div>

    <div class="home">
        <div class="Programming">
            <h5><b>Programming & Data base :</b></h5>
            <div class="Programming-box mt-3">
                <button class="programmingButton" on:click={()=>courseType(0,"Java")}>Java</button>
            
                <button class="programmingButton" on:click={()=>courseType(0,"Pyhton")}>Pyhton</button>
            
                <button class="programmingButton" on:click={()=>courseType(0,"MERN")}>MERN</button>
            
                <button class="programmingButton" on:click={()=>courseType(0,"MEAN")}>MEAN</button>
            
                <button class="programmingButton" on:click={()=>courseType(0,"Front-end")}>Front-end</button>
            
                <button class="programmingButton" on:click={()=>courseType(0,"Back-end")}>Back-end</button>
            
                <button class="programmingButton" on:click={()=>courseType(0,"Data base")}>Data base</button>

                <button class="programmingButton" on:click={()=>courseType(0,"Java Fullstack")}>Java Fullstack</button>

                <button class="programmingButton" on:click={()=>courseType(0,"Python Fullstack")}>Python Fullstack</button>

                <button class="programmingButton" on:click={()=>courseType(0,"Fullstack")}>Fullstack</button>
            </div>

            {#if showStudents[0]}
                <div class="col-12">
                    <hr>
                    <ListOfStudents  bind:showStudents indexToClose={0}/>
                </div>
            {/if}
            
            <hr>
            
            <h5 class="mt-3"><b>Editing :</b></h5>
            <div class="Editing-box mt-3">
                <button class="programmingButton" on:click={()=>courseType(1,"Photo shop")}>Photo shop</button>
            
                <button class="programmingButton" on:click={()=>courseType(1,"Illustrator")}>Illustrator</button>
            
                <button class="programmingButton" on:click={()=>courseType(1,"Premiere Pro")}>Premiere Pro</button>
            
                <button class="programmingButton" on:click={()=>courseType(1,"After Effects")}>After Effects</button>
            
                <button class="programmingButton" on:click={()=>courseType(1,"Davinci resolve")}>Davinci resolve</button>
            </div>

            {#if showStudents[1]}
                <div class="col-12">
                    <hr>
                    <ListOfStudents  bind:showStudents indexToClose={1}/>
                </div>
            {/if}

            <hr>
            
            <h5 class="mt-3"><b>Ui/UX & Digital marketing :</b></h5>
            <div class="Programming-box mt-3 mb-3">
                <button class="programmingButton" on:click={()=>courseType(2,"Digital marketing")}>Digital marketing</button>
            
                <button class="programmingButton" on:click={()=>courseType(2,"Ui / UX")}>Ui / UX</button>
            </div>

            {#if showStudents[2]}
                <div class="col-12">
                    <hr>
                    <ListOfStudents bind:showStudents indexToClose={2}/>
                </div>
            {/if}

        </div>
    </div>
    
</main>

<style>
    
</style>