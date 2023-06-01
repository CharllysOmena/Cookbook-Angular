export class Receita {
  idMeal : string
  strMeal : string
  urlImage : string
  strInstructions : string[]

  constructor(idMeal : string, strMeal : string, urlImage : string, strInstructions : string[]){
    this.idMeal = idMeal
    this.strMeal = strMeal
    this.urlImage = urlImage
    this.strInstructions = strInstructions
  }

}
