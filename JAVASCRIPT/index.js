function displayGeneratedAnswer(response) {
  console.log("response generated ");
  new Typewriter("#ai-answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generating(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#instruction");
  let apiKey = "afe65a6af8c45atd7o6f5fb347163020";
  let context =
    "You are an intelligent AI chef who knows every possible meal in the world, like the best cooking master Use smaller, well-balanced font sizes for readability and aesthetic harmony.  Your mission is to display a cooking recipe according to the ingredients that the user provides  Design instructions: Present the recipe in a visually appealing, elegant layout that does NOT take up the whole page width.   Split the content into two main columns 🥬 On the **left side**, display the list of **ingredients** inside a beautiful, styled box.  🍳 On the **right side**, display the **instructions** for preparing the meal Each main step of the cooking process should be displayed as a `<h1>` heading.   Keep the overall look clean, modern, and balanced — maybe with soft shadows, rounded corners, and subtle and pastel colors - **Whenever** new content is generated (for example, added a step), **automatically scroll down smoothly** to show the latest added information. At the end add happy sentece using emojis🥗 ";

  let prompt = `Generate the recipe with ${instructionInput.value} `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating definition");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  let responseElement = document.querySelector("#ai-answer");
  responseElement.classList.remove("hidden");
  responseElement.innerHTML = `<div class="generating">⏳ Providing the best definition of "${instructionInput.value}" </div>`;

  axios.get(apiUrl).then(displayGeneratedAnswer);
}
let generatingFormElement = document.querySelector("#generatorForm");
generatingFormElement.addEventListener("submit", generating);
