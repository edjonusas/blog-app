<template>
  <section class="post-list">
    <PostPreview
      id="1"
      title="Post Title"
      preview-text="text there"
      thumbnail="https://syntechnologies.co.uk/img/structured-cabling.png"
    />
    <PostPreview
      id="2"
      title="Post Title 2"
      preview-text="text there 2"
      thumbnail="https://syntechnologies.co.uk/img/structured-cabling.png"
    />
  </section>
</template>

<script>
export default {
  name: 'PostList',
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
