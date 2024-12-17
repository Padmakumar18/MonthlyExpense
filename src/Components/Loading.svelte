<script lang="ts">
</script>

<main>
  <div class="loading">  </div>
</main>

<style>
  * {
    -webkit-tap-highretro-color: transparent;
  }

  *:focus {
    outline: none;
  }

  .loading {
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: progress;

    border-radius: 50%;
    border-top: 5px solid rgb(20, 157, 248);
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;

    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>