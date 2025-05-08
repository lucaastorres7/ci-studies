import soma from "./summath.js";

function testSoma() {
  const total = soma(15, 15);

  if (total != 30) {
    console.log(
      `Resultado da soma é inválido: Resultado ${total}. Esperado 30`
    );
  } else {
    console.log("passou");
  }
}

testSoma();
