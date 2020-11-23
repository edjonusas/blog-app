<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-tilte">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on: {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by: {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail
        <a href="mailto:feedback@my-awsome-domain.com">domain.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    callback(null, {
      loadedPost: {
        id: '0',
        title: 'Geras straipsnis (ID:' + context.params.id + ')',
        previewText: 'Geras Straips...',
        author: 'Edd',
        updatedDate: new Date(),
        content: 'Content of the post',
        thumbnail:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmotionarray-portfolio.imgix.net%2Fpreview-90490-85a71cb06fc0583bd0976d8a58e16596-high.jpg&f=1&nofb=1',
      },
    })
  },
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
