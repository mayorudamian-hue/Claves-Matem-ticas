(function () {
  function icono(nombre) {
    const iconos = {
      temple: "⌂",
      rocket: "✦",
      gear: "⚙",
      wave: "≈",
      flask: "⌬"
    };
    return iconos[nombre] || "◆";
  }

  function iconoMundo(mundoId, profundidad) {
    const prefijo = profundidad ? "../".repeat(profundidad) : "";
    return `<img src="${prefijo}assets/iconos/${mundoId}.svg" alt="" width="34" height="34">`;
  }

  function contarMundosDesbloqueados(perfil) {
    return Object.values(perfil.mundos).filter((mundo) => mundo.desbloqueado).length;
  }

  function contarCompletados(perfil, mundo) {
    const estado = perfil.mundos[mundo.id];
    return mundo.minijuegos.filter((mini) => estado.minijuegos[mini.id].completado).length;
  }

  function rutaRelativa(ruta, profundidad) {
    if (!profundidad) return ruta;
    return "../".repeat(profundidad) + ruta;
  }

  function protegerPerfil(rutaIndex) {
    const perfil = window.Perfiles.obtenerPerfilActivo();
    if (!perfil) window.location.href = rutaIndex;
    return perfil;
  }

  function initInicio() {
    const lista = document.querySelector("[data-profiles]");
    const form = document.querySelector("[data-create-profile]");
    const aviso = document.querySelector("[data-notice]");

    function render() {
      const perfiles = window.Perfiles.obtenerPerfiles();
      lista.innerHTML = perfiles.length
        ? perfiles.map((perfil) => {
            const nivel = window.XP.obtenerNivel(perfil.xp);
            return `
              <article class="card profile-card">
                <div class="profile-top">
                  <h3>${perfil.nombre}</h3>
                  <span class="badge">Nivel ${nivel.nivel}</span>
                </div>
                <div class="stat-row"><span>Rango</span><strong>${nivel.nombre}</strong></div>
                <div class="stat-row"><span>XP total</span><strong>${perfil.xp}</strong></div>
                <div class="stat-row"><span>Mundos desbloqueados</span><strong>${contarMundosDesbloqueados(perfil)}/5</strong></div>
                <div class="profile-actions">
                  <button type="button" data-select="${perfil.id}">Entrar</button>
                  <button type="button" class="danger" data-delete="${perfil.id}" aria-label="Eliminar ${perfil.nombre}">×</button>
                </div>
              </article>
            `;
          }).join("")
        : `<div class="empty">Crea un perfil para empezar a descubrir patrones.</div>`;

      document.querySelectorAll("[data-select]").forEach((boton) => {
        boton.addEventListener("click", () => {
          window.Perfiles.seleccionarPerfil(boton.dataset.select);
          window.location.href = "mapa.html";
        });
      });

      document.querySelectorAll("[data-delete]").forEach((boton) => {
        boton.addEventListener("click", () => {
          const perfil = window.Perfiles.obtenerPerfil(boton.dataset.delete);
          if (confirm(`Eliminar el perfil de ${perfil.nombre}?`)) {
            window.Perfiles.eliminarPerfil(boton.dataset.delete);
            render();
          }
        });
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      aviso.textContent = "";
      try {
        const input = form.querySelector("input");
        window.Perfiles.crearPerfil(input.value);
        input.value = "";
        render();
      } catch (error) {
        aviso.textContent = error.message;
      }
    });

    render();
  }

  function initMapa() {
    const perfil = protegerPerfil("index.html");
    if (!perfil) return;
    const progreso = window.XP.progresoNivel(perfil.xp);
    document.querySelector("[data-player-name]").textContent = perfil.nombre;
    document.querySelector("[data-player-level]").textContent = `Nivel ${progreso.actual.nivel}: ${progreso.actual.nombre}`;
    document.querySelector("[data-player-xp]").textContent = `${perfil.xp} XP`;
    document.querySelector("[data-progress]").style.setProperty("--value", `${progreso.porcentaje}%`);
    document.querySelector("[data-next-level]").textContent = progreso.siguiente ? `${progreso.restante} XP para ${progreso.siguiente.nombre}` : "Nivel maximo alcanzado";

    const mapa = document.querySelector("[data-world-map]");
    mapa.innerHTML = window.ClavesData.mundos.map((mundo) => {
      const estado = perfil.mundos[mundo.id];
      const completados = contarCompletados(perfil, mundo);
      const clase = estado.completado ? "completed" : estado.desbloqueado ? "" : "locked";
      return `
        <article class="world-node world-${mundo.id} ${clase}">
          <div>
            <div class="icon">${iconoMundo(mundo.id, 0)}</div>
            <h2>${mundo.nombre}</h2>
            <p>${mundo.descripcion}</p>
          </div>
          <div>
            <div class="stat-row"><span>Estado</span><strong>${estado.completado ? "Completado" : estado.desbloqueado ? "Desbloqueado" : "Bloqueado"}</strong></div>
            <div class="stat-row"><span>Minijuegos</span><strong>${completados}/3</strong></div>
          </div>
          <button type="button" class="node-action ${estado.desbloqueado ? "" : "ghost"}" data-world="${mundo.id}">${estado.desbloqueado ? "Explorar" : "Candado"}</button>
        </article>
      `;
    }).join("");

    document.querySelectorAll("[data-world]").forEach((boton) => {
      boton.addEventListener("click", () => {
        const mundo = window.ClavesData.mundos.find((item) => item.id === boton.dataset.world);
        if (!perfil.mundos[mundo.id].desbloqueado) {
          document.querySelector("[data-notice]").textContent = "Completa el mundo anterior para desbloquear este.";
          return;
        }
        window.location.href = mundo.ruta;
      });
    });

    document.querySelector("[data-change-profile]").addEventListener("click", () => {
      window.location.href = "index.html";
    });

    const stats = document.querySelector("[data-stats]");
    const mundosCompletados = Object.values(perfil.mundos).filter((mundo) => mundo.completado).length;
    stats.innerHTML = `
      <article class="card"><div class="stat-row"><span>Mundos completados</span><strong>${mundosCompletados}/5</strong></div></article>
      <article class="card"><div class="stat-row"><span>Primer intento</span><strong>${perfil.estadisticas.correctasPrimerIntento}</strong></div></article>
      <article class="card"><div class="stat-row"><span>Racha actual</span><strong>${perfil.estadisticas.rachaActual}</strong></div></article>
    `;
  }

  function initMundo(mundoId, profundidad) {
    const perfil = protegerPerfil(rutaRelativa("index.html", profundidad));
    if (!perfil) return;
    const mundo = window.ClavesData.mundos.find((item) => item.id === mundoId);
    const estado = perfil.mundos[mundoId];
    if (!estado.desbloqueado) {
      window.location.href = rutaRelativa("mapa.html", profundidad);
      return;
    }
    document.body.classList.add("world-theme", `world-${mundoId}`);
    document.querySelector("[data-world-title]").textContent = mundo.nombre;
    document.querySelector("[data-world-description]").textContent = mundo.descripcion;
    document.querySelector("[data-world-icon]").innerHTML = iconoMundo(mundo.id, profundidad);
    document.querySelector("[data-back-map]").href = rutaRelativa("mapa.html", profundidad);

    document.querySelector("[data-world-games]").innerHTML = mundo.minijuegos.map((mini) => {
      const miniEstado = estado.minijuegos[mini.id];
      const status = miniEstado.completado ? (miniEstado.perfecto ? "Completado con estrella" : "Completado") : miniEstado.mejorNivel > 0 ? "En progreso" : "Sin iniciar";
      return `
        <article class="card mini-card">
          <div>
            <span class="badge">${mini.tipo}</span>
            <h3>${mini.nombre}</h3>
            <p>${mini.descripcion}</p>
          </div>
          <div class="mini-meta">
            <span class="badge">${status}</span>
          </div>
          <a class="button" href="${mini.ruta.split("/").pop()}">Jugar</a>
        </article>
      `;
    }).join("");
  }

  window.Pantallas = { initInicio, initMapa, initMundo, icono, iconoMundo };
})();
