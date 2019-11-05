<template>
  <div class="recycle pt-3">
    <div class="container text-left">
      <button class="btn btn-primary rounded-pill" @click="$router.go(-1)">- Reset & Go Back</button>
      <h6 class="text-danger text-bold mt-5">
        Total deleted items :
        <strong>{{recycleTodos.length}}</strong>
      </h6>
      <div class="row mt-3 text-light">
        <div v-for="todo in recycleTodos" v-bind:key="todo.id" class="col-lg-3">
          <div class="todo-item py-2 px-4 bg-danger rounded text-right mb-4">
            <p class="mb-1 text-left">{{todo.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecycleTodos",
  props: ["recycleTodos"]
};
</script>

<style scope>
</style>
