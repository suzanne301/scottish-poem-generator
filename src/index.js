function displayPoem(response) {

    console.log("poem generated");
  //response.data.answer
    new Typewriter('#poem', {
      strings: response.data.answer,
      autoStart: true,
      delay: 30,
      cursor: "",
    });
}

function generatePoem(event) {
  event.preventDefault();

  // build the API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "03351b3tc2f7fc9oa83ff4ea58bed167";
  let prompt = `User instructions: Generate a Scottish poem about ${instructionsInput.value}`;
  let context = "You are a romantic poem expert and love to write short and witty poems.  Your mission is to generate a four line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title with the poem. Sign the poem with 'SheCodes AI' inside a <strong> element underneath the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);


  // display the generated poem



  let poemElement = document.querySelector("#poem");

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);