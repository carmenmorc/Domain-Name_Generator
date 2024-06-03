document.addEventListener("DOMContentLoaded", () => {
  const pronoun = ["the", "a", "some", "kind"];
  const adj = ["great", "big", "kind", "pretty"];
  const noun = ["jogger", "racoon", "dog", "cat", "opossum"];

  let phrases = [];

  // Triple bucle anidado para combinar todos los elementos
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        phrases.push(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
      }
    }
  }

  // Mostrar las frases generadas en la página web
  const output = document.getElementById("output");
  output.innerHTML = phrases.join("<br>");
});
