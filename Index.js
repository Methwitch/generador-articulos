const axios = require('axios');

class ArticleGenerator {
  constructor() {
    console.log("Ingrese las palabras clave para el artículo (separadas por comas):");
    let keywords = prompt();
    while (keywords.trim() === "") {
      console.log("Debe ingresar al menos una palabra clave. Inténtelo de nuevo:");
      keywords = prompt();
    }
    this.keywords = keywords.split(",");
  }

  async generate() {
    // Se envía una petición a la API de OpenAI GPT-3
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: `Escriba un artículo sobre ${this.keywords.join(", ")}`,
        temperature: 0.5,
        max_tokens: 100,
        api_key: 'SU_API_KEY_AQUI'
      });
      return response.data.choices[0].text;
    } catch (error) {
      console.error(error);
    }
  }
}

let generator = new ArticleGenerator();
let article = generator.generate();
console.log(article);
