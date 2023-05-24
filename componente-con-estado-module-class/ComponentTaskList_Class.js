class Component {
  //Creamos el Constructor del Componente
  constructor(options) {
    //   this.el = options.el; // Elemento en el HTML
    //   this.data = options.data; // State Local
    //   this.template = options.template; // Template del HTML a renderizar
    // };    
    this.el = options.el; // Elemento en el HTML
    this.data = options.data; // State Local
    this.template = options.template; // Template del HTML a renderizar
  }
  //# -------------------------------------------------------------
  //Agregamos los métodos de la clase Component del componente

  //Render UI
  render() {
    const $el = document.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
    //console.log(this.data);
  };

  //Actualizar el State de forma reactiva
  setState(obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };

  //Obtenemos una copia inmutable del State
  getState() {
    return JSON.parse(JSON.stringify(this.data));
  };

};

export default Component;

