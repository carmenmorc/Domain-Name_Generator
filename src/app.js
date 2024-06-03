document.addEventListener("DOMContentLoaded", () => {
  const pronoun = ["the", "a", "some", "kind"];
  const adj = ["great", "big", "kind", "pretty"];
  const noun = ["jogger", "racoon", "dog", "cat", "opossum"];

  let domains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domains.push(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
      }
    }
  }

  const output = document.getElementById("output");
  output.innerHTML = domains.join("<br>");
});
