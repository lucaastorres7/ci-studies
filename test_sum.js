import soma from "./summath";

function sumTest() {
  const total = soma(10, 10);

  if (total != 30) {
    console.log(
      `Resultado da soma é invalido: Resultado: ${total}. Esperado: 30`
    );
  } else {
    console.log("Teste passou");
  }
}
