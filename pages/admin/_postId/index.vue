<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'Edvinas',
        title: 'Vue vs React',
        content: 'loreum ipsum text',
        thumbnailLink:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.v8nA8Lhmjz7PhKxdpx2a6gHaC9%26pid%3DApi&f=1',
      },
    }
  },
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
