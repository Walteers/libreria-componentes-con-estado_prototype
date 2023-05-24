import Component from "./ComponentTaskList_prototype.js";

//# Instanciamos un objeto Component(componente reactivo)
const app = new Component({
    el: '#todo-list',
    data: { todoList: [] },
    template: function (props) {
        if (props.todoList.length < 1)
            return `<p><em>Lista sin tareas por hacer</em></p>`;
        let todos = props.todoList.map((item) => `<li>${item}</li>`).join('\n');
        return todos;
    }
});

//# Instanciamos un objeto Component(componente reactivo)
const verduras = new Component({
    el: '#todo-list-verduras',
    data: { todoList: [] },
    template: function (props) {
        if (props.todoList.length < 1)
            return `<p><em>Sin verduras por comprar</em></p>`;
        let todos = props.todoList.map((item) => `<li>${item}</li>`).join('\n');
        return todos;
    }
});

//# ******************************************************

document.addEventListener("DOMContentLoaded", (e) => {
    app.render();
    verduras.render();
});

// Establecindo valores por defecto al state
app.setState({
    todoList: ["Tarea 1", "Tarea 2", "Tarea 3"]
});


document.addEventListener("submit", e => {
    if (e.target.matches("#todo-form")) {
        e.preventDefault();
        const $item = document.getElementById("todo-item");
        if (!$item) return;

        //Actualizar el state de forma reactiva
        const data = app.getState();
        data.todoList.push($item.value);
        app.setState({ todoList: data.todoList });

        //Limpiar el input
        $item.value = "";
        $item.focus();
    }

    // ---------------------------------------

    if (e.target.matches("#todo-form-verduras")) {
        e.preventDefault();
        const $item = document.getElementById("todo-item-verduras");
        if (!$item) return;

        //Actualizar el state de forma reactiva
        const data = verduras.getState();
        data.todoList.push($item.value);
        verduras.setState({ todoList: data.todoList });

        //Limpiar el input
        $item.value = "";
        $item.focus();
    }


    return false;
});