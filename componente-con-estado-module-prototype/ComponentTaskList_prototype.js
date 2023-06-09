export default function Component() {
  //Constructor del Componente
  function Constructor(options) {
    console.log(options.data);
    this.el = options.el; // Elemento en el HTML
    this.data = options.data; // State Local
    this.template = options.template; // Template del HTML a renderizar
  }

  //Agregamos los métodos al prototipo del constructor del componente

  //Render UI
  Constructor.prototype.render = function() {
    const $el = document.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
    //console.log(this.data);
  };

  //Actualizar el State de forma reactiva
  Constructor.prototype.setState = function (obj) {
    console.log(obj);
    console.log(this.data);
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };

  //Obtenemos una copia inmutable del State
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
}
