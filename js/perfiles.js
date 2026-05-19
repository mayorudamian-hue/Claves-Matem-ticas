(function () {
  const STORAGE_KEY = "claves_matematicas_perfiles";
  const ACTIVE_KEY = "claves_matematicas_perfil_activo";

  const mundosConfig = [
    {
      id: "ruinas",
      nombre: "Las Ruinas",
      icono: "temple",
      ruta: "mundos/ruinas/ruinas.html",
      color: "#C8A96E",
      descripcion: "Mensajes en piedra, antorchas y puertas antiguas.",
      minijuegos: [
        { id: "secuencias", nombre: "Secuencias en Piedra", tipo: "Numerico", ruta: "mundos/ruinas/secuencias.html", descripcion: "Completa marcas numericas talladas en piedra." },
        { id: "figuras", nombre: "Figuras del Templo", tipo: "Geometrico", ruta: "mundos/ruinas/figuras.html", descripcion: "Reconoce rotaciones, simetrias y cambios visuales." },
        { id: "codigo", nombre: "El Codigo de la Puerta", tipo: "Regla", ruta: "mundos/ruinas/codigo.html", descripcion: "Deduce la regla que abre la puerta del templo." }
      ]
    },
    {
      id: "espacial",
      nombre: "Senal Espacial",
      icono: "rocket",
      ruta: "mundos/espacial/espacial.html",
      color: "#4A9EFF",
      descripcion: "Pulsos, constelaciones y mensajes de otra civilizacion.",
      minijuegos: [
        { id: "frecuencia", nombre: "Frecuencia de la Senal", tipo: "Numerico", ruta: "mundos/espacial/frecuencia.html", descripcion: "Separa pulsos, ruido y ritmos ocultos." },
        { id: "mapa_estelar", nombre: "Mapa Estelar", tipo: "Geometrico", ruta: "mundos/espacial/mapa_estelar.html", descripcion: "Predice puntos en una grilla de constelaciones." },
        { id: "maquina_alien", nombre: "La Maquina Alien", tipo: "Maquina", ruta: "mundos/espacial/maquina_alien.html", descripcion: "Experimenta con entradas y salidas alienigenas." }
      ]
    },
    {
      id: "fabrica",
      nombre: "La Fabrica",
      icono: "gear",
      ruta: "mundos/fabrica/fabrica.html",
      color: "#E07B39",
      descripcion: "Maquinas, engranajes y cintas que siguen patrones.",
      minijuegos: [
        { id: "maquina", nombre: "La Maquina de Numeros", tipo: "Maquina", ruta: "mundos/fabrica/maquina.html", descripcion: "Investiga una maquina con reglas cada vez mas secretas." },
        { id: "engranajes", nombre: "Engranajes", tipo: "Geometrico", ruta: "mundos/fabrica/engranajes.html", descripcion: "Predice giros segun tamanos y dientes." },
        { id: "cinta", nombre: "Cinta Transportadora", tipo: "Mixto", ruta: "mundos/fabrica/cinta.html", descripcion: "Encuentra el siguiente objeto o el que rompe el ciclo." }
      ]
    },
    {
      id: "oceano",
      nombre: "Oceano Profundo",
      icono: "wave",
      ruta: "mundos/oceano/oceano.html",
      color: "#00E5CC",
      descripcion: "Burbujas, bioluminiscencia y datos bajo presion.",
      minijuegos: [
        { id: "cardumen", nombre: "El Cardumen", tipo: "Numerico", ruta: "mundos/oceano/cardumen.html", descripcion: "Descubre como crece o se mueve el cardumen." },
        { id: "espiral", nombre: "La Espiral del Caracol", tipo: "Geometrico", ruta: "mundos/oceano/espiral.html", descripcion: "Lee patrones naturales en espirales y vueltas." },
        { id: "profundidad", nombre: "Profundidad y Presion", tipo: "Funcion", ruta: "mundos/oceano/profundidad.html", descripcion: "Completa datos del submarino al descender." }
      ]
    },
    {
      id: "laboratorio",
      nombre: "El Laboratorio",
      icono: "flask",
      ruta: "mundos/laboratorio/laboratorio.html",
      color: "#39D353",
      descripcion: "Datos cientificos incompletos y fenomenos exactos.",
      minijuegos: [
        { id: "virus", nombre: "El Virus", tipo: "Crecimiento", ruta: "mundos/laboratorio/virus.html", descripcion: "Anticipa propagaciones y detecta valores anomalos." },
        { id: "cristales", nombre: "Cristales", tipo: "Geometrico", ruta: "mundos/laboratorio/cristales.html", descripcion: "Predice como crecen estructuras geometricas." },
        { id: "adn", nombre: "Cadena de ADN", tipo: "Mixto", ruta: "mundos/laboratorio/adn.html", descripcion: "Completa cadenas complementarias y ciclos." }
      ]
    }
  ];

  function crearMundosIniciales() {
    return mundosConfig.reduce((acc, mundo, index) => {
      acc[mundo.id] = {
        desbloqueado: index === 0,
        completado: false,
        bonusOtorgado: false,
        minijuegos: mundo.minijuegos.reduce((miniAcc, mini) => {
          miniAcc[mini.id] = { completado: false, perfecto: false, mejorNivel: 0 };
          return miniAcc;
        }, {})
      };
      return acc;
    }, {});
  }

  function leerPerfiles() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
      return [];
    }
  }

  function guardarPerfiles(perfiles) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(perfiles));
  }

  function obtenerPerfiles() {
    return leerPerfiles().sort((a, b) => b.xp - a.xp || a.nombre.localeCompare(b.nombre));
  }

  function crearPerfil(nombre) {
    const perfiles = leerPerfiles();
    if (perfiles.length >= 6) throw new Error("Solo se pueden crear hasta 6 perfiles.");
    const limpio = String(nombre || "").trim().slice(0, 20);
    if (!limpio) throw new Error("Escribi un nombre para crear el perfil.");
    const ahora = new Date().toISOString().slice(0, 10);
    const perfil = {
      id: "perfil_" + Date.now(),
      nombre: limpio,
      xp: 0,
      nivel: 1,
      mundos: crearMundosIniciales(),
      estadisticas: { correctasPrimerIntento: 0, rachaActual: 0, respuestasCorrectas: 0 },
      fechaCreacion: ahora,
      ultimaActividad: ahora
    };
    perfiles.push(perfil);
    guardarPerfiles(perfiles);
    return perfil;
  }

  function seleccionarPerfil(id) {
    localStorage.setItem(ACTIVE_KEY, id);
  }

  function obtenerPerfilActivo() {
    const id = localStorage.getItem(ACTIVE_KEY);
    return leerPerfiles().find((perfil) => perfil.id === id) || null;
  }

  function obtenerPerfil(id) {
    return leerPerfiles().find((perfil) => perfil.id === id) || null;
  }

  function actualizarPerfil(id, mutador) {
    const perfiles = leerPerfiles();
    const index = perfiles.findIndex((perfil) => perfil.id === id);
    if (index === -1) return null;
    const anteriorNivel = perfiles[index].nivel;
    mutador(perfiles[index]);
    perfiles[index].nivel = window.XP.obtenerNivel(perfiles[index].xp).nivel;
    perfiles[index].ultimaActividad = new Date().toISOString().slice(0, 10);
    if (perfiles[index].nivel > anteriorNivel) {
      perfiles[index].subioNivelPendiente = true;
    }
    guardarPerfiles(perfiles);
    return perfiles[index];
  }

  function eliminarPerfil(id) {
    const perfiles = leerPerfiles().filter((perfil) => perfil.id !== id);
    guardarPerfiles(perfiles);
    if (localStorage.getItem(ACTIVE_KEY) === id) localStorage.removeItem(ACTIVE_KEY);
  }

  function actualizarXP(id, cantidad) {
    return actualizarPerfil(id, (perfil) => {
      perfil.xp += cantidad;
    });
  }

  function desbloquearMundo(id, mundoId) {
    return actualizarPerfil(id, (perfil) => {
      if (perfil.mundos[mundoId]) perfil.mundos[mundoId].desbloqueado = true;
    });
  }

  function evaluarDesbloqueos(perfil, mundoId) {
    const indice = mundosConfig.findIndex((mundo) => mundo.id === mundoId);
    const mundoConfig = mundosConfig[indice];
    const mundo = perfil.mundos[mundoId];
    const completo = mundoConfig.minijuegos.every((mini) => mundo.minijuegos[mini.id].completado);
    let bonusMundo = 0;
    if (completo && !mundo.completado) {
      mundo.completado = true;
      if (!mundo.bonusOtorgado) {
        mundo.bonusOtorgado = true;
        perfil.xp += window.XP.bonusMundo;
        bonusMundo = window.XP.bonusMundo;
      }
      const siguiente = mundosConfig[indice + 1];
      if (siguiente) perfil.mundos[siguiente.id].desbloqueado = true;
    }
    return bonusMundo;
  }

  function marcarMinijuegoCompleto(id, mundoId, minijuegoId, perfecto) {
    let resultado = { perfil: null, bonusMundo: 0 };
    const perfil = actualizarPerfil(id, (perfilActual) => {
      const estado = perfilActual.mundos[mundoId].minijuegos[minijuegoId];
      estado.completado = true;
      estado.perfecto = estado.perfecto || Boolean(perfecto);
      estado.mejorNivel = 3;
      resultado.bonusMundo = evaluarDesbloqueos(perfilActual, mundoId);
    });
    resultado.perfil = perfil;
    return resultado;
  }

  function registrarCorrecta(id, primerIntento) {
    return actualizarPerfil(id, (perfil) => {
      perfil.estadisticas.respuestasCorrectas += 1;
      perfil.estadisticas.rachaActual += 1;
      if (primerIntento) perfil.estadisticas.correctasPrimerIntento += 1;
    });
  }

  function registrarIncorrecta(id) {
    return actualizarPerfil(id, (perfil) => {
      perfil.estadisticas.rachaActual = 0;
    });
  }

  function consumirSubidaNivel(id) {
    const perfiles = leerPerfiles();
    const index = perfiles.findIndex((perfil) => perfil.id === id);
    if (index === -1) return false;
    const pendiente = Boolean(perfiles[index].subioNivelPendiente);
    perfiles[index].subioNivelPendiente = false;
    guardarPerfiles(perfiles);
    return pendiente;
  }

  window.ClavesData = { mundos: mundosConfig };
  window.Perfiles = {
    crearPerfil,
    seleccionarPerfil,
    obtenerPerfiles,
    obtenerPerfil,
    obtenerPerfilActivo,
    eliminarPerfil,
    actualizarXP,
    desbloquearMundo,
    marcarMinijuegoCompleto,
    registrarCorrecta,
    registrarIncorrecta,
    consumirSubidaNivel,
    crearMundosIniciales
  };
})();
