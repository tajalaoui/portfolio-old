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
@media (max-width: 900px) {
  .cursor {
    display: none;
  }
}
</style>
