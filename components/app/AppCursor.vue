<template>
  <div class="cursor"></div>
</template>

<script>
export default {
  beforeMount() {
    const cursor = document.querySelector('.cursor')

    document.addEventListener('mousemove', (e) => {
      cursor.setAttribute(
        'style',
        'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
      )
    })

    document.addEventListener('click', () => {
      cursor.classList.add('expand')

      setTimeout(() => {
        cursor.classList.remove('expand')
      }, 300)
    })
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 900px) {
  // * Cursor.
  body * {
    cursor: none !important;
  }

  .cursor {
    z-index: 99;
    width: 2rem;
    height: 2rem;
    border: 3px solid #fafafa;
    background-color: #757575a9;
    border-radius: 50%;
    position: absolute;
    animation: cursorAnim 0.5s ease-in-out infinite alternate;
    pointer-events: none;
  }

  @keyframes cursorAnim {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.8);
    }
  }

  @keyframes cursorAnim2 {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
  }

  @keyframes cursorAnim3 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.7);
    }
    100% {
      transform: scale(1);
    }
  }

  .expand {
    animation: cursorAnim3 0.3s forwards;
    border: 3px solid $secondary-color;
  }
}
</style>
