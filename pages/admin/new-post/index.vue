<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'admin',
  methods: {
    onSubmitted(postData) {
      axios
        .post('https://newapp-73d23.firebaseio.com/posts.json', {
          ...postData,
          updatedDate: new Date(),
        })
        .then((result) => console.log(result))
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
