import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";
import lampada from "../../img/lampada.png";
import lampadaapagada from "../../img/lampada-apagada.png"

export default function Conteudo() {
  let numeroComum = 0;

  // Estado do React
  const [numeroState, setNumeroState] = useState(0);

  // Estado da lâmpada
  const [lampadaAcesa, setLampadaAcesa] = useState(false);

  function aumentaVariavelComum() {
    numeroComum = numeroComum + 1;

    console.log("Variavel comum:", numeroComum);
  }

  function aumentarUseState() {
    setNumeroState((valorAtual) => valorAtual + 1);

    console.log("Valor do estado:", numeroState);
  }

  function alternarLampada() {
    setLampadaAcesa((estadoAtual) => !estadoAtual);
  }

  return (
    <main>
      <div>
        <h2>Exemplo de variável comum</h2>

        <p>Variável comum: {numeroComum}</p>

        <button onClick={aumentaVariavelComum}>Aumentar variável comum</button>
      </div>

      <div>
        <h2>Exemplo de UseState</h2>

        <p>Valor do state: {numeroState}</p>

        <button onClick={aumentarUseState}>Aumentar o valor do state</button>
      </div>

      <section>
        <h2>Conteúdo principal</h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          aspernatur temporibus dolorum doloribus eaque. Consequatur
          necessitatibus, voluptate odit facilis suscipit explicabo praesentium
          incidunt blanditiis fugit sequi, quos aperiam tenetur ducimus!
        </p>
      </section>

      <section>
        <h2>Imagem com link externo</h2>

        <figure>
          <img
            src="https://placehold.co/600x400/FFFFF0/FFFFFF/png"
            alt="Imagem de exemplo de 600x400px"
          />

          <figcaption>Imagem de exemplo 600x400px</figcaption>
        </figure>
      </section>

      <section>
        <h2>Imagem com referência interna</h2>

        <figure>
          <img src={imgQuadrado} alt="Imagem quadrada 400x400px" />

          <figcaption>Imagem de exemplo 400x400px</figcaption>
        </figure>
      </section>

      <section>
        <h2>Lâmpada controlada por useState</h2>

        <figure>
          <img
            style={{ width: "200px", height: "auto" }}
            src={
              lampadaAcesa
                ? "/image/lampada.png"
                : "/image/lampada-apagada.png"
            }
            alt={lampadaAcesa ? "Lâmpada acesa" : "Lâmpada apagada"}
          />

          <figcaption>
            {lampadaAcesa ? "Lâmpada acesa" : "Lâmpada apagada"}
          </figcaption>
        </figure>

        <button onClick={alternarLampada}>
          {lampadaAcesa ? "Apagar lâmpada" : "Acender lâmpada"}
        </button>
      </section>
    </main>
  );
}
