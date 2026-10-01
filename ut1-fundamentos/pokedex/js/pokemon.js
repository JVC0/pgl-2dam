// Exportamos por defecto la clase Pokemon
export default class Pokemon {
  // Constructor que recibe como parámetro data que contiene los datos de los Pokemon que obtenemos desde la API
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.pkm_front = data.sprites.front_default;
    this.pkm_back = data.sprites.back_default;
    this.pkm_type = data.types; // Tipo del pokemon (Devuelve un array)
    this.pkm_weight = data.weight;
    this.pkm_height = data.height;
    this.pkm_sfront = data.sprites.front_shiny;
    this.pkm_sback = data.sprites.back_shiny;
  }
}
