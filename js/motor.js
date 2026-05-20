(function () {
  const banco = {
    secuencias: {
      titulo: "Secuencias en Piedra",
      instrucciones: "Observa las marcas talladas y completa el hueco.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "2, 4, 6, 8, __", respuesta: "10", pista: "Cada piedra avanza igual." },
        { nivel: 1, tipo: "opciones", pregunta: "3, 6, 9, 12, __", respuesta: "15", opciones: ["14", "15", "16", "18"], pista: "Son saltos de tres." },
        { nivel: 2, tipo: "input", pregunta: "3, 6, 11, 18, __", respuesta: "27", pista: "Los saltos son 3, 5, 7..." },
        { nivel: 2, tipo: "opciones", pregunta: "4, 8, 16, 32, __", respuesta: "64", opciones: ["48", "56", "64", "72"], pista: "Cada valor duplica al anterior." },
        { nivel: 3, tipo: "input", pregunta: "1, 1, 2, 3, 5, __", respuesta: "8", pista: "Mira los dos valores anteriores." },
        { nivel: 3, tipo: "opciones", pregunta: "1, 4, 9, 16, __", respuesta: "25", opciones: ["20", "24", "25", "32"], pista: "Son cuadrados perfectos." }
      ]
    },
    figuras: {
      titulo: "Figuras del Templo",
      instrucciones: "Elige la figura que continua la transformacion.",
      desafios: [
        { nivel: 1, tipo: "opciones", pregunta: "▲, ▶, ▼, __", respuesta: "◀", opciones: ["▲", "▶", "▼", "◀"], pista: "La figura gira un cuarto de vuelta." },
        { nivel: 1, tipo: "opciones", pregunta: "■, □, ■, □, __", respuesta: "■", opciones: ["●", "□", "■", "△"], pista: "Alterna relleno y contorno." },
        { nivel: 2, tipo: "opciones", pregunta: "▲ rojo, ▲ azul, ■ rojo, ■ azul, __", respuesta: "● rojo", opciones: ["■ rojo", "● rojo", "● azul", "▲ rojo"], pista: "Cambia la forma cada dos pasos." },
        { nivel: 2, tipo: "opciones", pregunta: "◐, ◓, ◑, __", respuesta: "◒", opciones: ["◐", "◒", "◓", "●"], pista: "La zona iluminada gira." },
        { nivel: 3, tipo: "opciones", pregunta: "△, △△, △△△△, __", respuesta: "△△△△△△△△", opciones: ["△△△△△", "△△△△△△", "△△△△△△△△", "△△△"], pista: "La cantidad se duplica." },
        { nivel: 3, tipo: "opciones", pregunta: "◇, ◇◆, ◇◆◆◇, __", respuesta: "◇◆◆◇◇◆◆◇", opciones: ["◇◆◇◆", "◇◆◆◇◇◆◆◇", "◆◇◇◆", "◇◇◆◆"], pista: "El bloque completo se repite." }
      ]
    },
    codigo: {
      titulo: "El Codigo de la Puerta",
      instrucciones: "Deduce la regla que abre la puerta. Usa x para el numero que entra, o escribe la operacion con palabras.",
      desafios: [
        { nivel: 1, tipo: "regla", pregunta: "Entra 1 y sale 5. Entra 2 y sale 6. Entra 3 y sale 7. ¿Cual es la formula?", respuesta: ["+4", "x+4", "x + 4", "sumar 4", "suma 4", "añadir 4", "agregar 4"], pista: "La salida es cuatro mas que el numero que entra." },
        { nivel: 1, tipo: "opciones", pregunta: "Entra 2 y sale 6. Entra 3 y sale 9. Entra 4 y sale 12. ¿Que regla usa la puerta?", respuesta: "multiplicar por 3", opciones: ["sumar 3", "multiplicar por 3", "restar 3", "multiplicar por 2"], pista: "La salida triplica la entrada." },
        { nivel: 2, tipo: "regla", pregunta: "Entra 1 y sale 5. Entra 2 y sale 7. Entra 3 y sale 9. ¿Cual es la formula?", respuesta: ["x2+3", "x*2+3", "2x+3", "2*x+3", "x x 2 + 3", "por 2 mas 3", "multiplicar por 2 y sumar 3", "*2+3"], pista: "Primero duplica el numero que entra; despues suma 3." },
        { nivel: 2, tipo: "input", pregunta: "Si la regla es x2 + 1, que sale con 8?", respuesta: "17", pista: "Duplica 8 y suma 1." },
        { nivel: 3, tipo: "regla", pregunta: "Entra 2 y sale 5. Entra 4 y sale 17. Entra 6 y sale 37. ¿Cual es la formula?", respuesta: ["x^2+1", "x²+1", "x*x+1", "cuadrado mas 1", "elevar al cuadrado y sumar 1", "x2+1"], pista: "Piensa en el cuadrado del numero que entra, y despues suma 1." },
        { nivel: 3, tipo: "input", pregunta: "Regla oculta: n al cuadrado menos n. Si entra 7, sale:", respuesta: "42", pista: "7 x 7 menos 7." }
      ]
    },
    frecuencia: {
      titulo: "Frecuencia de la Senal",
      instrucciones: "Repara pulsos y detecta ruido en la transmision.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "5, 10, 15, 20, __", respuesta: "25", pista: "Los pulsos suben de cinco en cinco." },
        { nivel: 1, tipo: "opciones", pregunta: "2, 6, 18, __", respuesta: "54", opciones: ["24", "36", "54", "72"], pista: "Cada pulso se triplica." },
        { nivel: 2, tipo: "input", pregunta: "Senal con ruido: 4, 8, 12, 19, 20. Que valor rompe el patron?", respuesta: "19", pista: "Deberia crecer de cuatro en cuatro." },
        { nivel: 2, tipo: "opciones", pregunta: "La señal deberia sumar 3 cada vez: 1, 4, 7, 11, 13. ¿Que pulso tiene ruido?", respuesta: "11", opciones: ["4", "7", "11", "13"], pista: "Despues de 7 deberia venir 10 para mantener +3." },
        { nivel: 3, tipo: "input", pregunta: "Dos senales alternadas: 2, 10, 4, 20, 6, 30, __", respuesta: "8", pista: "Mira las posiciones impares." },
        { nivel: 3, tipo: "opciones", pregunta: "3, 100, 6, 90, 12, 80, __", respuesta: "24", opciones: ["18", "21", "24", "70"], pista: "Una senal duplica; la otra baja 10." }
      ]
    },
    mapa_estelar: {
      titulo: "Mapa Estelar",
      instrucciones: "Usa la grilla para ubicar la siguiente estrella.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "(1,1), (2,1), (3,1), __. Escribe x,y", respuesta: ["4,1", "(4,1)"], pista: "Avanza a la derecha." },
        { nivel: 1, tipo: "opciones", pregunta: "(1,2), (2,3), (3,4), __", respuesta: "(4,5)", opciones: ["(3,5)", "(4,5)", "(5,4)", "(4,4)"], pista: "Suma 1 a cada coordenada." },
        { nivel: 2, tipo: "input", pregunta: "(2,2), (4,2), (4,4), (6,4), __", respuesta: ["6,6", "(6,6)"], pista: "Derecha, arriba, derecha, arriba." },
        { nivel: 2, tipo: "opciones", pregunta: "Reflejo de (3,2) sobre eje vertical x=5", respuesta: "(7,2)", opciones: ["(2,3)", "(7,2)", "(3,7)", "(5,2)"], pista: "Esta a la misma distancia del eje." },
        { nivel: 3, tipo: "input", pregunta: "(1,1), (2,4), (3,9), (4,16), __", respuesta: ["5,25", "(5,25)"], pista: "La segunda coordenada es un cuadrado." },
        { nivel: 3, tipo: "opciones", pregunta: "(1,3), (2,6), (3,11), (4,18), __", respuesta: "(5,27)", opciones: ["(5,25)", "(5,26)", "(5,27)", "(6,27)"], pista: "y = x al cuadrado + 2." }
      ]
    },
    maquina_alien: {
      titulo: "La Maquina Alien",
      instrucciones: "Prueba entradas y descubre como traduce la maquina.",
      maquina: { regla: "entrada % 2 === 0 ? entrada * 2 : entrada + 5", texto: "si es par x2; si es impar +5" },
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "Regla: x3. Si entra 6, sale:", respuesta: "18", pista: "Multiplica por tres." },
        { nivel: 1, tipo: "regla", pregunta: "2 -> 6, 5 -> 15, 8 -> 24. Regla:", respuesta: ["x3", "*3", "por 3", "multiplicar por 3"], pista: "Todas las salidas son triples." },
        { nivel: 2, tipo: "input", pregunta: "Regla: x2 + 1. Si entra 9, sale:", respuesta: "19", pista: "Duplica y suma uno." },
        { nivel: 2, tipo: "regla", pregunta: "1 -> 3, 2 -> 5, 3 -> 7. Regla:", respuesta: ["x2+1", "*2+1", "por 2 mas 1", "multiplicar por 2 y sumar 1"], pista: "Duplica y suma uno." },
        { nivel: 3, tipo: "input", pregunta: "Si par x2, si impar +5. Entra 7:", respuesta: "12", pista: "7 es impar." },
        { nivel: 3, tipo: "regla", pregunta: "Entra 2 y sale 4. Entra 3 y sale 8. Entra 4 y sale 8. Entra 5 y sale 10. ¿Que regla usa la maquina?", respuesta: ["si par x2 si impar +5", "si es par x2 si es impar +5", "si es par multiplicar por 2 si es impar sumar 5", "si es par multiplica por 2 si es impar suma 5", "par por 2 impar mas 5", "par *2 impar +5", "pares x2 impares +5", "los pares se multiplican por 2 y los impares suman 5"], pista: "Los numeros pares se multiplican por 2. Los impares suman 5." }
      ]
    },
    maquina: {
      titulo: "La Maquina de Numeros",
      instrucciones: "Investiga la maquina principal de la fabrica.",
      maquina: { regla: "entrada * 3 - 2", texto: "x3 - 2" },
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "Maquina x4. Si entra 5, sale:", respuesta: "20", pista: "Cuatro veces cinco." },
        { nivel: 1, tipo: "regla", pregunta: "1 -> 6, 2 -> 7, 3 -> 8. Regla:", respuesta: ["+5", "sumar 5", "suma 5"], pista: "Agrega cinco." },
        { nivel: 2, tipo: "input", pregunta: "Regla x3 - 2. Si entra 7, sale:", respuesta: "19", pista: "Tres veces siete menos dos." },
        { nivel: 2, tipo: "regla", pregunta: "2 -> 8, 4 -> 14, 6 -> 20. Regla:", respuesta: ["x3+2", "*3+2", "por 3 mas 2"], pista: "Triplica y suma dos." },
        { nivel: 3, tipo: "input", pregunta: "Caja negra: 3 -> 7, 5 -> 11, 8 -> 17. Si entra 10:", respuesta: "21", pista: "Duplica y suma uno." },
        { nivel: 3, tipo: "regla", pregunta: "1 -> 4, 2 -> 7, 3 -> 12, 4 -> 19. Regla:", respuesta: ["x^2+3", "cuadrado mas 3", "x2+3"], pista: "Cuadrado de la entrada mas tres." }
      ]
    },
    engranajes: {
      titulo: "Engranajes",
      instrucciones: "Predice vueltas y direcciones en cadenas de engranajes.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "Engranaje A tiene 10 dientes y B 20. Si A da 2 vueltas, B da:", respuesta: "1", pista: "B tiene el doble de dientes." },
        { nivel: 1, tipo: "opciones", pregunta: "Dos engranajes tocandose giran en sentido:", respuesta: "contrario", opciones: ["igual", "contrario", "aleatorio", "no gira"], pista: "Cuando uno empuja, el otro invierte giro." },
        { nivel: 2, tipo: "input", pregunta: "A 8 dientes mueve B 24. Si A da 6 vueltas, B da:", respuesta: "2", pista: "B es tres veces mas grande." },
        { nivel: 2, tipo: "opciones", pregunta: "A mueve B, B mueve C. C gira respecto de A en sentido:", respuesta: "igual", opciones: ["igual", "contrario", "mitad", "doble"], pista: "Dos inversiones vuelven al sentido inicial." },
        { nivel: 3, tipo: "input", pregunta: "A 12 -> B 36 -> C 18. Si A da 6 vueltas, C da:", respuesta: "4", pista: "A a B reduce a 2; B a C duplica a 4." },
        { nivel: 3, tipo: "opciones", pregunta: "A horario, cadena de 4 engranajes. Ultimo gira:", respuesta: "antihorario", opciones: ["horario", "antihorario", "no gira", "depende del color"], pista: "Cada contacto cambia el sentido." }
      ]
    },
    cinta: {
      titulo: "Cinta Transportadora",
      instrucciones: "Observa colores, formas y numeros sobre la cinta.",
      desafios: [
        { nivel: 1, tipo: "opciones", pregunta: "rojo, azul, rojo, azul, __", respuesta: "rojo", opciones: ["rojo", "azul", "verde", "amarillo"], pista: "Alterna dos colores." },
        { nivel: 1, tipo: "input", pregunta: "1, 2, 1, 2, 1, __", respuesta: "2", pista: "Ciclo de dos objetos." },
        { nivel: 2, tipo: "opciones", pregunta: "rojo ▲, rojo ■, azul ▲, azul ■, __", respuesta: "verde ▲", opciones: ["azul ▲", "verde ▲", "verde ■", "rojo ▲"], pista: "El color cambia cada dos; la forma alterna." },
        { nivel: 2, tipo: "input", pregunta: "A1, B2, A3, B4, A5, __", respuesta: "B6", pista: "Letra alterna y numero sube." },
        { nivel: 3, tipo: "opciones", pregunta: "R▲1, A■2, V●3, R▲4, A■5, __", respuesta: "V●6", opciones: ["R▲6", "V●6", "A■6", "V▲6"], pista: "Tres variables en ciclo." },
        { nivel: 3, tipo: "input", pregunta: "Ciclo: forma cada 2, color cada 3. Paso 6 usa color:", respuesta: ["tercer color", "color 3", "3"], pista: "Cuenta en grupos de tres." }
      ]
    },
    cardumen: {
      titulo: "El Cardumen",
      instrucciones: "Predice el movimiento y crecimiento del grupo.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "12, 16, 20, 24, __ peces", respuesta: "28", pista: "Llegan cuatro peces." },
        { nivel: 1, tipo: "opciones", pregunta: "5, 10, 15, __", respuesta: "20", opciones: ["18", "20", "25", "30"], pista: "Suma cinco." },
        { nivel: 2, tipo: "input", pregunta: "3, 6, 12, 24, __", respuesta: "48", pista: "El cardumen se duplica." },
        { nivel: 2, tipo: "regla", pregunta: "10, 20, 40, 80. Regla:", respuesta: ["x2", "*2", "duplicar", "multiplicar por 2"], pista: "Cada paso duplica." },
        { nivel: 3, tipo: "input", pregunta: "2, 6, 12, 20, 30, __", respuesta: "42", pista: "Suma 4, 6, 8, 10..." },
        { nivel: 3, tipo: "regla", pregunta: "4, 7, 13, 22, 34. Regla:", respuesta: ["sumar 3 6 9 12", "+3 +6 +9 +12", "sumas multiplos de 3"], pista: "Los saltos crecen de tres en tres." }
      ]
    },
    espiral: {
      titulo: "La Espiral del Caracol",
      instrucciones: "Lee vueltas, radios y patrones naturales.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "Vueltas: 1, 2, 3, 4, __", respuesta: "5", pista: "Una vuelta mas." },
        { nivel: 1, tipo: "opciones", pregunta: "Segmentos: 2, 4, 6, __", respuesta: "8", opciones: ["7", "8", "10", "12"], pista: "Suma dos." },
        { nivel: 2, tipo: "input", pregunta: "1, 1, 2, 3, 5, __", respuesta: "8", pista: "Patron Fibonacci." },
        { nivel: 2, tipo: "opciones", pregunta: "Radio: 2, 4, 8, 16, __", respuesta: "32", opciones: ["24", "30", "32", "36"], pista: "Se duplica." },
        { nivel: 3, tipo: "input", pregunta: "Lados iluminados: 3, 6, 12, 24, __", respuesta: "48", pista: "Fractal simple: duplica." },
        { nivel: 3, tipo: "regla", pregunta: "1, 3, 6, 10, 15. Regla:", respuesta: ["sumar 2 3 4 5", "numeros triangulares", "+2 +3 +4 +5"], pista: "Los saltos suben de uno en uno." }
      ]
    },
    profundidad: {
      titulo: "Profundidad y Presion",
      instrucciones: "Completa la tabla del submarino.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "Profundidad 10,20,30 m. Presion 2,4,__", respuesta: "6", pista: "Relacion proporcional." },
        { nivel: 1, tipo: "opciones", pregunta: "Si cada 5 m suma 1 unidad, a 20 m hay:", respuesta: "4", opciones: ["3", "4", "5", "6"], pista: "20 dividido 5." },
        { nivel: 2, tipo: "input", pregunta: "Presion = profundidad/10 + 1. A 50 m:", respuesta: "6", pista: "Cinco mas uno." },
        { nivel: 2, tipo: "regla", pregunta: "0m -> 1, 10m -> 3, 20m -> 5. Regla:", respuesta: ["dividir por 5 mas 1", "profundidad/5+1", "/5+1"], pista: "Cada 10 metros suma 2." },
        { nivel: 3, tipo: "input", pregunta: "Tabla: 10->4, 20->7, 30->10. A 80:", respuesta: "25", pista: "Suma tres por cada 10 m." },
        { nivel: 3, tipo: "opciones", pregunta: "Regla p = 2d + 5. Si d=12:", respuesta: "29", opciones: ["24", "27", "29", "34"], pista: "Doble de 12 mas 5." }
      ]
    },
    virus: {
      titulo: "El Virus",
      instrucciones: "Anticipa la propagacion y detecta anomalias.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "4, 8, 12, 16, __ colonias", respuesta: "20", pista: "Crecimiento lineal." },
        { nivel: 1, tipo: "opciones", pregunta: "10, 20, 30, __", respuesta: "40", opciones: ["35", "40", "45", "60"], pista: "Suma diez." },
        { nivel: 2, tipo: "input", pregunta: "2, 4, 8, 16, __", respuesta: "32", pista: "Crecimiento exponencial simple." },
        { nivel: 2, tipo: "regla", pregunta: "3, 9, 27, 81. Regla:", respuesta: ["x3", "*3", "multiplicar por 3", "triplicar"], pista: "Cada valor se triplica." },
        { nivel: 3, tipo: "input", pregunta: "5, 10, 20, 41, 80. Valor anomalo:", respuesta: "41", pista: "Deberia duplicarse." },
        { nivel: 3, tipo: "opciones", pregunta: "1, 2, 4, 7, 16. Anomalia:", respuesta: "7", opciones: ["2", "4", "7", "16"], pista: "Busca potencias de dos." }
      ]
    },
    cristales: {
      titulo: "Cristales",
      instrucciones: "Predice cuantos bloques tendra el cristal.",
      desafios: [
        { nivel: 1, tipo: "input", pregunta: "1, 4, 7, 10, __ bloques", respuesta: "13", pista: "Suma tres bloques." },
        { nivel: 1, tipo: "opciones", pregunta: "Triangulos: 2, 4, 6, __", respuesta: "8", opciones: ["7", "8", "10", "12"], pista: "Suma dos." },
        { nivel: 2, tipo: "input", pregunta: "1, 3, 9, 27, __", respuesta: "81", pista: "Se multiplica por tres." },
        { nivel: 2, tipo: "opciones", pregunta: "Fractal: 4, 16, 64, __", respuesta: "256", opciones: ["128", "192", "256", "320"], pista: "Multiplica por cuatro." },
        { nivel: 3, tipo: "input", pregunta: "Paso n tiene n x n cristales. Paso 9:", respuesta: "81", pista: "9 por 9." },
        { nivel: 3, tipo: "regla", pregunta: "1, 4, 9, 16, 25. Regla:", respuesta: ["cuadrados", "n al cuadrado", "x^2", "numero cuadrado"], pista: "Cuadrados perfectos." }
      ]
    },
    adn: {
      titulo: "Cadena de ADN",
      instrucciones: "Completa ciclos y cadenas complementarias.",
      desafios: [
        { nivel: 1, tipo: "opciones", pregunta: "A, T, A, T, __", respuesta: "A", opciones: ["A", "T", "G", "C"], pista: "Alterna A y T." },
        { nivel: 1, tipo: "input", pregunta: "1, 2, 3, 1, 2, __", respuesta: "3", pista: "Ciclo de tres." },
        { nivel: 2, tipo: "opciones", pregunta: "Complemento de A-T-G-C es:", respuesta: "T-A-C-G", opciones: ["A-T-G-C", "T-A-C-G", "G-C-A-T", "C-G-T-A"], pista: "A con T, G con C." },
        { nivel: 2, tipo: "input", pregunta: "A, T, G, C, A, T, __", respuesta: "G", pista: "Ciclo de cuatro bases." },
        { nivel: 3, tipo: "input", pregunta: "Patron A,T,G,C. Base en posicion 11:", respuesta: "G", pista: "11 deja resto 3 al dividir por 4." },
        { nivel: 3, tipo: "opciones", pregunta: "Si posicion 20 en ciclo A,T,G,C:", respuesta: "C", opciones: ["A", "T", "G", "C"], pista: "Multiplo de cuatro." }
      ]
    }
  };

  const estado = {
    config: null,
    perfil: null,
    desafioIndex: 0,
    vidas: 5,
    intentoActual: 1,
    xpGanada: 0,
    correctas: 0,
    nivelInterno: 1,
    perdioVidas: false,
    terminado: false
  };

  function normalizar(valor) {
    return String(valor || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ");
  }

  function esCorrecta(valor, respuesta) {
    const intento = normalizar(valor);
    const respuestas = Array.isArray(respuesta) ? respuesta : [respuesta];
    return respuestas.some((opcion) => normalizar(opcion) === intento);
  }

  function mostrarFeedback(tipo, texto) {
    const panel = document.querySelector("[data-feedback]");
    if (!panel) return;
    panel.className = "feedback " + tipo;
    panel.textContent = texto;
    if (tipo === "incorrecto" && navigator.vibrate) navigator.vibrate(100);
  }

  function renderVidas() {
    const contenedor = document.querySelector("[data-vidas]");
    if (!contenedor) return;
    contenedor.innerHTML = Array.from({ length: 5 }, (_, index) => `<span class="${index < estado.vidas ? "vida viva" : "vida"}">★</span>`).join("");
  }

  function desafiosActivos() {
    return banco[estado.config.minijuego].desafios;
  }

  function desafioActual() {
    return desafiosActivos()[estado.desafioIndex];
  }

  function renderMaquina(definicion) {
    if (!definicion) return "";
    return `
      <section class="machine-panel" aria-label="Maquina experimental">
        <div class="machine-core">Entrada <span>→</span> Maquina <span>→</span> Salida</div>
        <div class="machine-controls">
          <input data-machine-input type="number" inputmode="numeric" placeholder="Probar numero">
          <button type="button" data-machine-run>Probar</button>
        </div>
        <div class="machine-log" data-machine-log>La maquina espera una entrada.</div>
      </section>
    `;
  }

  function renderDesafio() {
    const desafio = desafioActual();
    estado.nivelInterno = desafio.nivel;
    const area = document.querySelector("[data-juego]");
    if (!area) return;
    const ayudaRegla = desafio.tipo === "regla"
      ? `<p class="rule-help">Podes escribir la regla con <strong>x</strong> como numero que entra, por ejemplo <strong>x+4</strong> o <strong>x*2+3</strong>. Si cambia segun el caso, escribi algo como <strong>si es par x2, si es impar +5</strong>. Tambien vale escribirlo con palabras.</p>`
      : "";
    const opciones = desafio.tipo === "opciones"
      ? `<div class="options">${desafio.opciones.map((opcion) => `<button type="button" data-option="${opcion}">${opcion}</button>`).join("")}</div>`
      : `<div class="answer-row"><input data-respuesta type="text" inputmode="${desafio.tipo === "input" ? "numeric" : "text"}" maxlength="80" placeholder="${desafio.tipo === "regla" ? "Escribi la regla" : "Tu respuesta"}"><button type="button" data-check>Verificar</button></div>`;

    area.innerHTML = `
      <div class="challenge-meta">
        <span>Nivel interno ${desafio.nivel}/3</span>
        <span>Desafio ${estado.desafioIndex + 1}/${desafiosActivos().length}</span>
      </div>
      ${renderMaquina(banco[estado.config.minijuego].maquina)}
      <div class="challenge-card">
        <p class="challenge-question">${desafio.pregunta}</p>
        ${ayudaRegla}
        ${opciones}
        <button type="button" class="ghost hint" data-hint>Ver pista</button>
      </div>
    `;
    mostrarFeedback("neutro", "Lee el patron y prueba una respuesta.");
    renderVidas();
    conectarEventos();
  }

  function conectarEventos() {
    const salir = document.querySelector("[data-exit-game]");
    if (salir) {
      salir.addEventListener("click", () => {
        if (confirm("¿Seguro que quieres salir? Se perdera el avance de esta partida.")) {
          window.location.href = estado.config.mundoHome;
        }
      });
    }
    document.querySelectorAll("[data-option]").forEach((boton) => {
      boton.addEventListener("click", () => registrarRespuesta(esCorrecta(boton.dataset.option, desafioActual().respuesta)));
    });
    const check = document.querySelector("[data-check]");
    if (check) {
      check.addEventListener("click", () => {
        const input = document.querySelector("[data-respuesta]");
        registrarRespuesta(esCorrecta(input.value, desafioActual().respuesta));
      });
    }
    const input = document.querySelector("[data-respuesta]");
    if (input) input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") document.querySelector("[data-check]").click();
    });
    const hint = document.querySelector("[data-hint]");
    if (hint) hint.addEventListener("click", () => mostrarFeedback("pista", desafioActual().pista));
    const run = document.querySelector("[data-machine-run]");
    if (run) {
      run.addEventListener("click", () => {
        const inputMachine = document.querySelector("[data-machine-input]");
        const log = document.querySelector("[data-machine-log]");
        const entrada = Number(inputMachine.value);
        if (Number.isNaN(entrada)) {
          log.textContent = "Ingresa un numero para probar.";
          return;
        }
        const salida = Function("entrada", `return ${banco[estado.config.minijuego].maquina.regla}`)(entrada);
        log.textContent = `${entrada} entra y sale ${salida}.`;
      });
    }
  }

  function registrarRespuesta(correcta) {
    if (estado.terminado) return;
    const perfilId = estado.perfil.id;
    if (correcta) {
      const xp = window.XP.xpPorIntento(estado.intentoActual);
      estado.xpGanada += xp;
      estado.correctas += 1;
      window.Perfiles.actualizarXP(perfilId, xp);
      window.Perfiles.registrarCorrecta(perfilId, estado.intentoActual === 1);
      mostrarFeedback("correcto", `Correcto: +${xp} XP.`);
      estado.desafioIndex += 1;
      estado.intentoActual = 1;
      setTimeout(() => {
        if (estado.desafioIndex >= desafiosActivos().length) finalizarJuego(true);
        else renderDesafio();
      }, 650);
      return;
    }

    estado.vidas -= 1;
    estado.perdioVidas = true;
    estado.intentoActual += 1;
    window.Perfiles.registrarIncorrecta(perfilId);
    renderVidas();
    if (estado.vidas <= 0) {
      finalizarJuego(false);
    } else {
      mostrarFeedback("incorrecto", `Esa clave no abre todavia. Te quedan ${estado.vidas} vidas.`);
    }
  }

  function finalizarJuego(completado) {
    estado.terminado = true;
    const area = document.querySelector("[data-juego]");
    let bonusPerfecto = 0;
    let bonusMundo = 0;
    let perfilFinal = window.Perfiles.obtenerPerfil(estado.perfil.id);
    if (completado) {
      if (!estado.perdioVidas) {
        bonusPerfecto = window.XP.bonusPerfecto;
        estado.xpGanada += bonusPerfecto;
        perfilFinal = window.Perfiles.actualizarXP(estado.perfil.id, bonusPerfecto);
      }
      const resultado = window.Perfiles.marcarMinijuegoCompleto(estado.perfil.id, estado.config.mundo, estado.config.minijuego, !estado.perdioVidas);
      bonusMundo = resultado.bonusMundo;
      estado.xpGanada += bonusMundo;
      perfilFinal = resultado.perfil;
    }
    const nivel = window.XP.obtenerNivel(perfilFinal.xp);
    const subioNivel = window.Perfiles.consumirSubidaNivel(estado.perfil.id);
    area.innerHTML = `
      <section class="summary-panel ${completado ? "win" : "retry"}">
        <h2>${completado ? "Clave descifrada" : "Sin vidas"}</h2>
        <p>${completado ? "Completaste el minijuego y registraste el descubrimiento." : "El patron quedo cerca. Podes reintentarlo con nuevas pistas en mente."}</p>
        <div class="summary-grid">
          <span>Correctas</span><strong>${estado.correctas}</strong>
          <span>XP ganada</span><strong>${estado.xpGanada}</strong>
          <span>Nivel actual</span><strong>${nivel.nivel} · ${nivel.nombre}</strong>
          <span>Bonus perfecto</span><strong>${bonusPerfecto}</strong>
          <span>Bonus mundo</span><strong>${bonusMundo}</strong>
        </div>
        ${subioNivel ? `<div class="level-up">Subiste a nivel ${nivel.nivel}: ${nivel.nombre}</div>` : ""}
        <div class="summary-actions">
          <button type="button" onclick="location.reload()">Reintentar</button>
          <a class="button ghost" href="${estado.config.mundoHome}">Volver al mundo</a>
          <a class="button" href="../../mapa.html">Mapa</a>
        </div>
      </section>
    `;
    mostrarFeedback(completado ? "nivelSuperado" : "sinVidas", completado ? "Nivel superado." : "El minijuego termino.");
  }

  function iniciarJuego(config) {
    const perfil = window.Perfiles.obtenerPerfilActivo();
    if (!perfil) {
      window.location.href = "../../index.html";
      return;
    }
    estado.config = Object.assign({ vidasIniciales: 5 }, config);
    estado.perfil = perfil;
    estado.vidas = estado.config.vidasIniciales;
    estado.desafioIndex = 0;
    estado.intentoActual = 1;
    estado.xpGanada = 0;
    estado.correctas = 0;
    estado.perdioVidas = false;
    estado.terminado = false;

    const juego = banco[config.minijuego];
    document.querySelector("[data-game-title]").innerHTML = `<span class="game-title-icon"><img src="../../assets/iconos/${config.minijuego}.svg" alt="" width="50" height="50"></span><span>${juego.titulo}</span>`;
    document.querySelector("[data-game-subtitle]").textContent = juego.instrucciones;
    renderDesafio();
  }

  function guardarProgreso(perfilId, mundo, minijuego, nivel, xpGanada) {
    window.Perfiles.actualizarXP(perfilId, xpGanada);
    if (nivel >= 3) window.Perfiles.marcarMinijuegoCompleto(perfilId, mundo, minijuego, false);
  }

  function cargarEstado(perfilId) {
    return window.Perfiles.obtenerPerfil(perfilId);
  }

  window.MotorJuego = {
    iniciarJuego,
    registrarRespuesta,
    mostrarFeedback,
    guardarProgreso,
    cargarEstado,
    banco
  };
})();
