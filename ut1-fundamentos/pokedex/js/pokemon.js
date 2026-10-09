export default class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.pkm_front = data.sprites.front_default;
    this.pkm_back = data.sprites.back_default;
    this.pkm_weight = data.weight;
    this.pkm_height = data.height;
    this.pkm_sfront = data.sprites.front_shiny;
    this.pkm_sback = data.sprites.back_shiny;
    this.pkm_exp = data.base_experience;
    this.pkm_abilities = data.abilities;
    this.pkm_tipo1 = data.types[0]?.type.name || "";
    this.pkm_tipo2 = data.types[1]?.type.name || "";
    
    const getStat = (nombre) =>
      data.stats.find(s => s.stat.name === nombre).base_stat;

    this.pkm_stats = {
      hp: getStat("hp"),
      attack: getStat("attack"),
      defense: getStat("defense"),
      special_attack: getStat("special-attack"),
      special_defense: getStat("special-defense"),
      speed: getStat("speed"),
    };
  }
  
}