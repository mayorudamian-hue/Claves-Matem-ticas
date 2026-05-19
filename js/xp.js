(function () {
  const niveles = [
    { nivel: 1, nombre: "Aprendiz", xp: 0 },
    { nivel: 2, nombre: "Explorador", xp: 500 },
    { nivel: 3, nombre: "Descifrador", xp: 1500 },
    { nivel: 4, nombre: "Investigador", xp: 3500 },
    { nivel: 5, nombre: "Maestro", xp: 7000 }
  ];

  function obtenerNivel(xp) {
    return niveles.reduce((actual, candidato) => (xp >= candidato.xp ? candidato : actual), niveles[0]);
  }

  function siguienteNivel(xp) {
    return niveles.find((nivel) => nivel.xp > xp) || null;
  }

  function progresoNivel(xp) {
    const actual = obtenerNivel(xp);
    const siguiente = siguienteNivel(xp);
    if (!siguiente) {
      return { actual, siguiente: null, porcentaje: 100, restante: 0 };
    }
    const rango = siguiente.xp - actual.xp;
    const avance = xp - actual.xp;
    return {
      actual,
      siguiente,
      porcentaje: Math.max(0, Math.min(100, Math.round((avance / rango) * 100))),
      restante: siguiente.xp - xp
    };
  }

  function xpPorIntento(intentoNumero) {
    if (intentoNumero <= 1) return 30;
    if (intentoNumero === 2) return 15;
    return 5;
  }

  window.XP = {
    niveles,
    obtenerNivel,
    siguienteNivel,
    progresoNivel,
    xpPorIntento,
    bonusPerfecto: 50,
    bonusMundo: 200
  };
})();
