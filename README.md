## Steps:

1. `npm install` for this repo, if building separately, install the SDK `npm install @google/generative-ai`
2. Create a JS file, import `GoogleGenerativeAI` from `@google/generative-ai`
3. Signup and create an API key at https://aistudio.google.com/app/apikey
4. Add the API key as env variable. (or directly in the file if testing locally)
5. Run `node gemini-sandbox.js` to test.

## Sample Output
```
~/gemini-sandbox  node gemini-sandbox.js

The sky appears blue due to a phenomenon called **Rayleigh scattering**. Here's how it works:

* **Sunlight is made of all colors:**  Sunlight, which appears white to us, is actually a mixture of all colors of the rainbow.
* **Air molecules scatter light:**  The air in our atmosphere is filled with tiny molecules, mostly nitrogen and oxygen. When sunlight hits these molecules, it gets scattered in all directions.
* **Shorter wavelengths scatter more:**  Blue light has a shorter wavelength than other colors in the visible spectrum. This means blue light is scattered much more effectively by air molecules than longer wavelengths like red or orange.
* **Blue light reaches our eyes:**  As sunlight enters the atmosphere, the blue light is scattered in all directions. This scattered blue light is what we see as the blue sky.

**Here's a simple analogy:** Imagine shining a flashlight through a glass of water with tiny particles suspended in it. The light will scatter off these particles, making the water appear blue.

**Why sunsets are red:**  As the sun sets, the sunlight has to travel through more of the atmosphere to reach our eyes. This means more blue light gets scattered away, leaving the longer wavelengths like red and orange to dominate what we see.
```
