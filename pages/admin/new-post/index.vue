<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form>
        <AppControlInput v-model="editedPost.author"> Author Name </AppControlInput>
        <AppControlInput v-model="editedPost.title"> Title </AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink"> Thumbnail Link </AppControlInput>
        <AppControlInput v-model="editedPost.content" control-type="textarea">
          Content
        </AppControlInput>
        <AppButton type="submit"> Save </AppButton>
        <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">
          Cancel
        </AppButton>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: '',
      },
    }
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
