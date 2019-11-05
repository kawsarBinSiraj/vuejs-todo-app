<template>
  <div id="todos">
    <div class="todoAction">
      <div class="row justify-content-center text-left">
        <div class="col-lg-6">
          <form v-on:submit.prevent="add">
            <div class="form-group">
              <input
                type="text"
                class="form-control rounded-pill"
                id="todoText"
                aria-describedby="todoHelp"
                placeholder="Add Todo"
                v-model="todo.title"
              />
              <small
                id="todoHelp"
                class="form-text text-muted"
              >We'll never share your todos with anyone else.</small>
            </div>
            <button
              type="submit"
              class="btn rounded-pill px-5"
              v-bind:class="{ 'btn-success': isEdit.edit === false, 'btn-warning': isEdit.edit }"
            >{{ isEdit.edit == false ? 'Add' : 'Edit' }}</button>
          </form>
        </div>
        <div class="col-lg-2">
          <router-link
            :to="{ name: 'recycle', params: {recycleTodos }}"
            v-bind:class="{ 'btn-danger': recycleTodos.length > 0, 'disabled': recycleTodos.length <= 0 }"
            class="btn btn-secondary"
          >
            Recycle Bin
            <span class="badge badge-light">{{recycleTodos.length}}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div id="todosView" class="pt-5 text-left">
      <h6>
        Total todo item :
        <strong>{{todos.length}}</strong>
      </h6>
      <div class="row mt-3 text-light">
        <div v-for="todo in todos" v-bind:key="todo.id" class="col-lg-3">
          <div class="todo-item py-2 px-4 bg-success rounded text-right mb-4">
            <p class="mb-1 text-left">Id : {{todo.id}}</p>
            <p class="mb-1 text-left">{{todo.title}}</p>
            <button class="btn px-1 py-1 text-light" v-on:click="del(todo.id)">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button class="btn px-2 py-1 text-light" v-on:click="edit(todo.id)">
              <i class="fa fa-edit" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Todos",
  data: () => {
    return {
      isDanger: true,
      isEdit: {
        edit: false,
        id: null
      },
      todo: {
        id: null,
        title: ""
      },
      recycleTodos: [],
      todos: [{ id: 1, title: "Default todo title" }]
    };
  },
  methods: {
    add: function() {
      if (this.isEdit.edit) {
        return this.confirmEdit(this.isEdit.id);
      }
      this.todo.id = this.todos.length + 1;
      this.todos.push(this.todo);
      this.resetForm();
      this.isEdit.edit = false;
      this.isEdit.id = null;
    },
    resetForm: function() {
      this.todo = {
        ...this.todo,
        title: "",
        id: null
      };
    },
    edit: function(currentId) {
      this.todos.forEach(item => {
        if (item.id === currentId) {
          this.isEdit = {
            edit: true,
            id: currentId
          };
          return (this.todo.title = item.title);
        }
      });
    },
    confirmEdit: function(currentId) {
      this.todos.forEach(item => {
        if (item.id === currentId) {
          item.title = this.todo.title;
        }
      });
      this.resetForm();
      return (this.isEdit = {
        edit: false,
        id: null
      });
    },
    del(currentId) {
      let todos = [];
      this.todos.forEach(item => {
        if (item.id !== currentId) {
          todos.push(item);
        }
        if (item.id === currentId) {
          this.recycleTodos.push({
            ...item,
            title: item.title
          });
        }
      });
      this.todos = todos;
    }
  }
};
</script>

