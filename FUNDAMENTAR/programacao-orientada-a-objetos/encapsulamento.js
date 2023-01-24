// ESTRUTURAL
let altura = 50
let largura = 60

function calcularArea() {
  return altura * largura
}

let area = calcularArea()
console.log(area)

// Orientado a Objetos

class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calculaArea()
  }
  // função escondida no objeto
  #calculaArea() {
    return this.altura * this.largura
  }
}

//criar o objeto
let poligono = new Poligono(50, 60)

console.log(poligono.area)
