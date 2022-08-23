const app = new Vue({
  el: "#app",
  data: {
    titulo: "Lista de Tareas con VUE",
    tareas: [],
    nuevaTarea: "",
  },
  methods: {
    agregarTarea: function () {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });

      this.nuevaTarea = "";
    },
    editarTarea: function (index) {
      this.tareas[index].estado = true;
    },
    borrarTarea: function (index) {
      this.tareas.pop(index);
    },
  },
});
