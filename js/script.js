document.getElementById("generate-button").addEventListener("click", function() {
    const paletteType = document.getElementById("palette-type").value;
    generatePalette(paletteType);
});

function generatePalette(type) {
    const colorPalette = document.getElementById("color-palette");
    colorPalette.innerHTML = "";

    const baseColor1 = chroma.random();
    const baseColor2 = chroma.random();
    const baseColor3 = chroma.random();
    const baseColor4 = chroma.random();
    const baseColor5 = chroma.random();

    switch (type) {
        case "analogous":
            // Gerar uma paleta de cores análogas
            for (let i = 0; i < 5; i++) {
                const color = baseColor1.set("hsl.h", baseColor1.get("hsl.h") + i * 30);
                createColorBox(color);
            }
            break;
        case "complementary":
            // Gerar uma paleta de cores complementares
            createColorBox(baseColor1);
            createColorBox(baseColor2);
            break;
        case "triadic":
            // Gerar uma paleta de cores triádicas
            createColorBox(baseColor1);
            createColorBox(baseColor2.set("hsl.h", baseColor2.get("hsl.h") + 120));
            createColorBox(baseColor3.set("hsl.h", baseColor3.get("hsl.h") + 240));
            break;
    }
}

function createColorBox(color) {
    const colorBox = document.createElement("div");
    const hexCode = color.hex();  // Obtém o código de cor hex
    colorBox.style.backgroundColor = hexCode;
    colorBox.className = "color-box";
    
    // Cria um elemento de parágrafo para exibir o código hex
    const hexText = document.createElement("p");
    hexText.textContent = hexCode;
    
    // Adiciona o código hex abaixo da cor
    colorBox.appendChild(hexText);
    
    // Adiciona a cor à paleta
    document.getElementById("color-palette").appendChild(colorBox);
}
