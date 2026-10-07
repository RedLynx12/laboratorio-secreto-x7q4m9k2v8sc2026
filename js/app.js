const USERS = {
  "SCI-009-001": {
    role: "scientist",
    title: "CIENTÍFICO JUNIOR",
    welcome: "Bienvenido, Científico Junior.",
    labImage: "assets/lab-lit.png"
  },
  "ADM-002": {
    role: "supervisor",
    title: "SUPERVISIÓN ADULTA",
    welcome: "CARCAMAL DETECTADO",
    labImage: "assets/lab-dark.png"
  },
  "ADM-001": {
    role: "director",
    title: "DIRECCIÓN CIENTÍFICA",
    welcome: "Bienvenida, Doctora [NOMBRE EN CLAVE].",
    labImage: "assets/lab-lit.png"
  }
};

const XP_PER_LEVEL = 100;
const MAX_LEVEL = 10;
const RANKS = [
  "CANDIDATO CIENTÍFICO",
  "APRENDIZ DE LABORATORIO",
  "INVESTIGADOR JUNIOR",
  "ANALISTA CIENTÍFICO",
  "INVESTIGADOR CIENTÍFICO",
  "INVESTIGADOR AVANZADO",
  "ESPECIALISTA DE LABORATORIO",
  "ANALISTA SENIOR",
  "DIRECTOR DE INVESTIGACIÓN",
  "RANGO CLASIFICADO"
];

const EXPERIMENTS = [
  { id: 1, icon: "🎈", title: "EL GLOBO FANTASMA", description: "Un científico afirma haber conseguido inflar un globo sin soplar. Comprueba si una reacción química puede producir un gas capaz de hacerlo.", xp: 100, hypothesis: "¿Qué crees que ocurrirá cuando el bicarbonato entre en contacto con el vinagre?", materials: ["Bicarbonato de sodio", "Vinagre", "Globo", "Recipiente o vaso", "Cucharilla", "Cuaderno de Campo"], protocol: ["Introduce una pequeña cantidad de bicarbonato en el globo.", "Añade vinagre al recipiente.", "Coloca el globo en la boca del recipiente sin dejar caer todavía el bicarbonato.", "Cuando estés preparado, levanta el globo para que el bicarbonato caiga.", "Observa atentamente."], observations: ["¿Qué ha ocurrido al mezclar las sustancias?", "¿Has observado burbujas?", "¿Qué ha ocurrido con el globo?", "¿La reacción ha sido rápida o lenta?"], result: `El bicarbonato y el vinagre han reaccionado. Durante esta <button class="keyword-link" data-term="reacción química">reacción química</button> se ha producido <button class="keyword-link" data-term="dióxido de carbono">dióxido de carbono (CO₂)</button>. Ese <button class="keyword-link" data-term="gas">gas</button> ocupa espacio y, al quedar atrapado dentro del globo, hace que se hinche.` },
  { id: 2, icon: "🟣", title: "EL CÓDIGO DE COLORES", description: "Cuatro muestras misteriosas necesitan ser identificadas mediante un indicador natural.", xp: 100, hypothesis: "¿Crees que las cuatro muestras reaccionarán igual cuando reciban el concentrado de lombarda?", materials: ["Concentrado de lombarda", "Tubo con vinagre", "Tubo con limón", "Tubo con agua", "Tubo con agua y bicarbonato", "Pipeta o cuentagotas", "Cuaderno de Campo"], protocol: ["Observa los cuatro tubos antes de añadir nada.", "Registra tus primeras observaciones.", "Añade unas gotas de concentrado de lombarda a la primera muestra.", "Observa el cambio de color.", "Repite con las otras tres muestras.", "Registra los colores obtenidos."], observations: ["¿Qué muestras han cambiado de color?", "¿Han cambiado todas de la misma manera?", "¿Cuál presenta un cambio más llamativo?", "Ordena las muestras según el color obtenido."], result: `La lombarda contiene sustancias que cambian de color según la <button class="keyword-link" data-term="acidez">acidez</button> de una solución. Por eso su extracto puede utilizarse como un <button class="keyword-link" data-term="indicador">indicador</button> de <button class="keyword-link" data-term="pH">pH</button>. El vinagre y el limón son ácidos; el agua está aproximadamente en la zona neutra y el bicarbonato en agua produce una solución básica.` },
  { id: 3, icon: "🥣", title: "LA MATERIA IMPOSIBLE", description: "Una sustancia parece líquida... hasta que aplicamos fuerza sobre ella.", xp: 100, hypothesis: "¿Cómo crees que se comportará la mezcla cuando la muevas lentamente y cuando la presiones rápidamente?", materials: ["Maicena", "Agua", "Recipiente", "Cuchara", "Cuaderno de Campo"], protocol: ["Coloca la maicena en el recipiente.", "Añade agua poco a poco.", "Mezcla hasta conseguir una textura extraña.", "Muévela lentamente.", "Presiónala rápidamente.", "Compara lo que ocurre."], observations: ["¿Qué ocurre cuando la mueves lentamente?", "¿Qué ocurre cuando aplicas fuerza rápidamente?", "¿Se comporta siempre igual?", "Describe su textura."], result: `La mezcla de maicena y agua puede comportarse de forma diferente según cómo aplicamos fuerza sobre ella. Es un ejemplo de <button class="keyword-link" data-term="fluido no newtoniano">fluido no newtoniano</button>. Algunos materiales no se comportan siempre de la misma manera: su comportamiento puede depender de cómo los movemos o de la fuerza aplicada.` },
  { id: 4, icon: "🖍️", title: "EL MISTERIO DE LA TINTA", description: "Una tinta parece tener un único color. ¿Estamos seguros de que solo contiene un pigmento?", xp: 100, hypothesis: "¿Crees que una tinta de un solo color puede estar formada por varios pigmentos?", materials: ["Rotuladores lavables", "2 filtros de café", "Agua", "Recipiente", "Tijeras", "Cuaderno de Campo"], protocol: ["Corta una tira de papel de filtro.", "Haz una pequeña marca con un rotulador cerca de uno de los extremos.", "Coloca la tira de manera que el extremo inferior toque el agua, pero la marca quede por encima del nivel del agua.", "Espera y observa cómo asciende el agua por el papel.", "Observa qué ocurre con la tinta."], observations: ["¿El color ha permanecido igual?", "¿Han aparecido otros colores?", "¿Cuál ha viajado más lejos?", "¿Qué tinta produjo más componentes visibles?"], result: `La tinta de un rotulador puede estar formada por varios <button class="keyword-link" data-term="pigmento">pigmentos</button>. El agua asciende por el papel y arrastra sus componentes a diferentes velocidades. Por eso algunos colores se separan. Este proceso se llama <button class="keyword-link" data-term="cromatografía">cromatografía</button>.` },
  { id: 5, icon: "🌈", title: "EL LABORATORIO DE DENSIDADES", description: "Descubre por qué algunos líquidos se colocan encima de otros y qué tiene que ver la densidad.", xp: 100, hypothesis: "¿Por qué crees que algunos líquidos flotan sobre otros en lugar de mezclarse?", materials: ["Agua", "Aceite", "Azúcar", "Recipiente transparente", "Cuchara", "Cuaderno de Campo"], protocol: ["Prepara un recipiente transparente con agua.", "Añade aceite y observa cómo se coloca respecto al agua.", "Prepara otra muestra de agua y añade azúcar.", "Compara las muestras.", "Registra todo lo que observes."], observations: ["¿Qué líquido queda arriba?", "¿Cuál queda abajo?", "¿Se mezclan?", "¿Qué ocurre cuando modificamos el agua añadiendo azúcar?"], result: `La <button class="keyword-link" data-term="densidad">densidad</button> nos indica cuánta materia hay en relación con el espacio que ocupa. Dos líquidos pueden tener distinta densidad y, si además no se mezclan, pueden formar capas. La capacidad de dos líquidos para mezclarse está relacionada con su <button class="keyword-link" data-term="miscibilidad">miscibilidad</button>.` }
];

const ARCHIVE_TERMS = {
  "hipótesis": {title:"Hipótesis", definition:"Una hipótesis es una posible explicación o predicción que podemos poner a prueba. No tiene que ser correcta: lo importante es que podamos investigarla.", example:"Si añado bicarbonato al vinagre, mi hipótesis podría ser que aparecerán burbujas y se producirá un gas.", related:["método científico","observación","experimento"]},
  "método científico": {title:"Método científico", definition:"Es una forma ordenada de investigar preguntas sobre el mundo. No es una receta rígida: es una manera de hacer preguntas, recoger pruebas y sacar conclusiones basadas en lo observado.", example:"Pregunta → hipótesis → experimento → observaciones → análisis → conclusión.", related:["hipótesis","observación","variable","conclusión"]},
  "observación": {title:"Observación", definition:"Observar científicamente significa prestar atención a lo que ocurre y describirlo con cuidado, sin inventar lo que no hemos visto.", example:"‘Aparecen burbujas y el globo empieza a crecer’ es una observación. ‘El bicarbonato quiere escapar’ es una interpretación.", related:["datos","medición","conclusión"]},
  "experimento": {title:"Experimento", definition:"Un experimento es una investigación preparada para poner a prueba una idea o responder una pregunta.", example:"En el globo fantasma cambiamos una cosa: ponemos bicarbonato en contacto con vinagre y observamos el resultado.", related:["variable","control","hipótesis"]},
  "variable": {title:"Variable", definition:"Una variable es algo que puede cambiar en una investigación. Identificar qué cambia y qué permanece igual ayuda a comparar resultados.", example:"Si investigamos cuánto tarda en disolverse el azúcar, la temperatura del agua puede ser una variable.", related:["experimento","control","datos"]},
  "datos": {title:"Datos", definition:"Los datos son las informaciones que recogemos durante una investigación. Pueden ser números, medidas, colores, tiempos o descripciones.", example:"‘El líquido cambió de morado a rosa’ también es un dato.", related:["observación","medición","conclusión"]},
  "medición": {title:"Medición", definition:"Medir significa comparar una cantidad con una unidad. Medir nos permite describir resultados de una forma más precisa.", example:"Podemos medir tiempo en segundos, volumen en mililitros o masa en gramos.", related:["datos","volumen","masa"]},
  "conclusión": {title:"Conclusión", definition:"La conclusión es la respuesta que obtenemos después de analizar lo que ocurrió. Debe apoyarse en los datos, no solo en lo que esperábamos que sucediera.", example:"‘Mi hipótesis no se cumplió porque el globo no se infló’ también es una buena conclusión científica.", related:["hipótesis","datos","observación"]},
  "materia": {title:"Materia", definition:"La materia es todo aquello que tiene masa y ocupa un lugar en el espacio. Los objetos, los líquidos y los gases están hechos de materia.", example:"El agua, el aire, el bicarbonato y un globo son ejemplos de materia.", related:["masa","volumen","gas"]},
  "átomo": {title:"Átomo", definition:"Un átomo es una unidad diminuta que forma la materia. Los distintos tipos de átomos dan lugar a los diferentes elementos químicos.", example:"El oxígeno, el carbono y el hidrógeno están formados por átomos de tipos diferentes.", related:["elemento químico","molécula","materia"]},
  "elemento químico": {title:"Elemento químico", definition:"Un elemento químico es un tipo de materia formado por átomos del mismo tipo. Cada elemento tiene su propio nombre y símbolo.", example:"El oxígeno se representa con O y el carbono con C.", related:["átomo","molécula"]},
  "molécula": {title:"Molécula", definition:"Una molécula es un conjunto de átomos unidos entre sí. Muchas sustancias que encontramos en la vida cotidiana están formadas por moléculas.", example:"Una molécula de agua está formada por dos átomos de hidrógeno y uno de oxígeno: H₂O.", related:["átomo","reacción química"]},
  "reacción química": {title:"Reacción química", definition:"Una reacción química ocurre cuando unas sustancias se transforman y aparecen sustancias nuevas. Los átomos no desaparecen: se reorganizan de otra manera.", example:"En el globo fantasma, el bicarbonato y el vinagre reaccionan y se produce dióxido de carbono.", related:["reactivo","producto","gas"]},
  "reactivo": {title:"Reactivo", definition:"Un reactivo es una sustancia que participa en una reacción química y ayuda a que se produzca la transformación.", example:"En nuestro experimento, el bicarbonato y el vinagre son los reactivos principales.", related:["reacción química","producto"]},
  "producto": {title:"Producto", definition:"Un producto es una sustancia que se forma como resultado de una reacción química.", example:"El dióxido de carbono que aparece en el experimento del globo es uno de los productos de la reacción.", related:["reacción química","reactivo"]},
  "gas": {title:"Gas", definition:"Un gas es un estado de la materia que no tiene forma ni volumen fijos. Puede expandirse para ocupar el espacio disponible.", example:"El dióxido de carbono es un gas y por eso puede acumularse dentro del globo.", related:["materia","dióxido de carbono","volumen"]},
  "dióxido de carbono": {title:"Dióxido de carbono", definition:"El dióxido de carbono, CO₂, es un gas formado por carbono y oxígeno. Está presente de forma natural en la atmósfera y también puede producirse en algunas reacciones químicas.", example:"En el globo fantasma aparece cuando el bicarbonato y el vinagre reaccionan.", related:["gas","reacción química"]},
  "acidez": {title:"Acidez", definition:"La acidez describe una propiedad de una disolución. Cuanto más ácida es una disolución, más lejos se encuentra del lado básico de la escala de pH.", example:"El limón y el vinagre son sustancias ácidas.", related:["pH","ácido","indicador"]},
  "indicador": {title:"Indicador", definition:"Un indicador es una sustancia que cambia de color cuando cambia la propiedad que estamos investigando. Algunos indicadores sirven para distinguir ácidos y bases.", example:"El concentrado de lombarda contiene pigmentos que pueden cambiar de color según el pH.", related:["pH","ácido","base"]},
  "pH": {title:"pH", definition:"El pH es una escala que utilizamos para describir si una disolución es ácida, neutra o básica. En la escala habitual, 7 es aproximadamente neutro.", example:"El limón y el vinagre están en la zona ácida; una disolución de bicarbonato está en la zona básica.", related:["ácido","base","neutro"]},
  "ácido": {title:"Ácido", definition:"Una sustancia ácida tiene un pH menor que 7 en la escala habitual. Muchas sustancias ácidas tienen un sabor agrio, aunque nunca debemos probar sustancias de laboratorio para identificarlas.", example:"El zumo de limón y el vinagre son ácidos.", related:["pH","acidez","indicador"]},
  "base": {title:"Base", definition:"Una sustancia básica tiene un pH mayor que 7 en la escala habitual. Las bases tienen propiedades diferentes de los ácidos.", example:"Una disolución de bicarbonato en agua es básica.", related:["pH","ácido","indicador"]},
  "neutro": {title:"Neutro", definition:"En la escala habitual de pH, una disolución aproximadamente neutra se encuentra alrededor de pH 7.", example:"El agua pura se considera aproximadamente neutra, aunque el agua real puede variar un poco.", related:["pH","ácido","base"]},
  "fluido": {title:"Fluido", definition:"Un fluido es una sustancia que puede fluir y cambiar de forma. Los líquidos y los gases son fluidos.", example:"El agua es un fluido. El aire también lo es.", related:["viscosidad","fluido no newtoniano"]},
  "viscosidad": {title:"Viscosidad", definition:"La viscosidad describe lo fácil o difícil que es para un fluido fluir. Un fluido muy viscoso fluye con más dificultad.", example:"La miel suele fluir más lentamente que el agua porque tiene mayor viscosidad.", related:["fluido","fluido no newtoniano"]},
  "fuerza": {title:"Fuerza", definition:"Una fuerza es un empuje o un tirón. Las fuerzas pueden cambiar el movimiento de un objeto o deformarlo.", example:"Cuando presionamos la mezcla de maicena y agua, estamos aplicando una fuerza.", related:["fluido no newtoniano"]},
  "fluido no newtoniano": {title:"Fluido no newtoniano", definition:"Es un fluido cuyo comportamiento al fluir puede cambiar cuando aplicamos una fuerza de una manera diferente. La mezcla de maicena y agua es un ejemplo famoso.", example:"Puede parecer más líquida al moverla despacio y ofrecer más resistencia cuando la presionamos rápidamente.", related:["fluido","viscosidad","fuerza"]},
  "pigmento": {title:"Pigmento", definition:"Un pigmento es una sustancia que aporta color. Una tinta puede contener varios pigmentos diferentes mezclados.", example:"Una tinta que parece azul puede contener varios pigmentos que se separan durante la cromatografía.", related:["mezcla","cromatografía","color"]},
  "mezcla": {title:"Mezcla", definition:"Una mezcla contiene dos o más sustancias juntas. Sus componentes pueden conservar sus propias propiedades y, en muchos casos, podemos separarlos mediante métodos físicos.", example:"La tinta de un rotulador puede ser una mezcla de varios pigmentos.", related:["separación","cromatografía"]},
  "separación": {title:"Separación de mezclas", definition:"Separar una mezcla significa conseguir que sus componentes queden diferenciados usando alguna propiedad que los distinga.", example:"La cromatografía separa algunos componentes de la tinta porque no todos avanzan igual por el papel.", related:["mezcla","cromatografía"]},
  "cromatografía": {title:"Cromatografía", definition:"La cromatografía es una técnica que permite separar componentes de una mezcla porque no todos se desplazan de la misma manera a través de un material.", example:"En nuestro filtro, el agua sube por el papel y algunos pigmentos avanzan más que otros.", related:["pigmento","mezcla","separación"]},
  "densidad": {title:"Densidad", definition:"La densidad relaciona la cantidad de materia de una sustancia con el espacio que ocupa. Dos sustancias del mismo tamaño pueden tener densidades diferentes.", example:"El aceite y el agua tienen densidades diferentes, y además no se mezclan completamente, por eso pueden formar capas.", related:["masa","volumen","miscibilidad"]},
  "masa": {title:"Masa", definition:"La masa nos indica cuánta materia contiene un objeto o una sustancia. Se suele medir en gramos o kilogramos.", example:"Una bolsa de azúcar puede tener una masa de 500 gramos.", related:["densidad","volumen"]},
  "volumen": {title:"Volumen", definition:"El volumen indica cuánto espacio ocupa algo. En el laboratorio podemos medir líquidos en mililitros o litros.", example:"Un recipiente de 100 mL puede contener hasta 100 mililitros de líquido.", related:["densidad","masa"]},
  "miscibilidad": {title:"Miscibilidad", definition:"La miscibilidad describe si dos líquidos pueden mezclarse completamente entre sí.", example:"El agua y el aceite no son completamente miscibles: tienden a formar capas separadas.", related:["mezcla","densidad"]},
  "disolución": {title:"Disolución", definition:"Una disolución es una mezcla en la que una sustancia queda distribuida de manera uniforme dentro de otra.", example:"Cuando el azúcar se disuelve en agua, obtenemos una disolución de azúcar en agua.", related:["mezcla","pH"]},
  "soluto": {title:"Soluto", definition:"El soluto es la sustancia que se disuelve en una disolución.", example:"Si disolvemos azúcar en agua, el azúcar es el soluto.", related:["disolución","disolvente"]},
  "disolvente": {title:"Disolvente", definition:"El disolvente es la sustancia que disuelve al soluto y suele ser el componente mayoritario de una disolución.", example:"En agua con azúcar, el agua actúa como disolvente.", related:["disolución","soluto"]},
  "estado de la materia": {title:"Estados de la materia", definition:"La materia puede presentarse en distintos estados. En este nivel estudiaremos sobre todo sólidos, líquidos y gases, que tienen comportamientos diferentes.", example:"El hielo es sólido, el agua líquida y el vapor de agua es gas.", related:["materia","gas","fluido"]},
  "propiedad": {title:"Propiedad de un material", definition:"Una propiedad es una característica que podemos observar o medir para describir una sustancia o un objeto.", example:"El color, la densidad, la viscosidad o la solubilidad son propiedades que podemos investigar.", related:["observación","densidad","viscosidad"]},
  "color": {title:"Color", definition:"El color que vemos depende de cómo una sustancia interactúa con la luz. En el laboratorio, los cambios de color pueden darnos pistas sobre lo que está ocurriendo.", example:"La lombarda cambia de color según el pH de la muestra.", related:["indicador","pigmento","pH"]},

};

const INFO_TABS = [
  { id: "experimentos", label: "EXPERIMENTOS", title: "Archivo · Experimentos", body: "" },
  { id: "investigaciones", label: "INVESTIGACIONES", title: "Archivo · Investigaciones", body: "" },
  { id: "general", label: "GENERAL", title: "Archivo · Conocimiento general", body: "" }
];

const state = {
  user: null,
  xp: 0,
  completedExperiments: [],
  currentPanel: null,
  completedInvestigations: {},
  completedTests: []
};

const doorScene = document.querySelector("#door-scene");
const accessPanel = document.querySelector("#access-panel");
const usernameInput = document.querySelector("#username");
const accessButton = document.querySelector("#access-button");
const accessMessage = document.querySelector("#access-message");

const laboratory = document.querySelector("#laboratory");
const welcomeLabel = document.querySelector("#welcome-label");
const welcomeTitle = document.querySelector("#welcome-title");
const welcomeSubtitle = document.querySelector("#welcome-subtitle");

const sectionLayer = document.querySelector("#section-layer");
const deniedOverlay = document.querySelector("#denied-overlay");
const toast = document.querySelector("#toast");


/* =========================
   V1.0 — SISTEMA DE AUDIO
   Coloca los archivos en assets/audio/music y assets/audio/sfx
   ========================= */
const AUDIO_CONFIG = {
  music: ["lab-01.mp3", "lab-02.mp3", "lab-03.mp3", "lab-04.mp3"],
  sfx: {
    door: "door-open.mp3",
    granted: "access-granted.mp3",
    denied: "access-denied.mp3",
    carcamal: "carcamal-alarm.mp3"
  }
};

const audioState = {
  musicOn: localStorage.getItem("lab-music-on") !== "false",
  sfxOn: localStorage.getItem("lab-sfx-on") !== "false",
  currentMusic: null,
  musicIndex: Math.floor(Math.random() * AUDIO_CONFIG.music.length)
};

const audioEls = { music: null, sfx: {} };

function getAudioPath(folder, file) {
  return `assets/audio/${folder}/${file}`;
}

function createAudioElement(src, loop = false, volume = 1) {
  const a = new Audio(src);
  a.preload = "auto";
  a.loop = loop;
  a.volume = volume;
  return a;
}

function initAudio() {
  if (!audioEls.music) {
    audioEls.music = createAudioElement(getAudioPath("music", AUDIO_CONFIG.music[audioState.musicIndex]), true, 0.24);
  }
  Object.entries(AUDIO_CONFIG.sfx).forEach(([key, file]) => {
    if (!audioEls.sfx[key]) audioEls.sfx[key] = createAudioElement(getAudioPath("sfx", file), false, 0.72);
  });
  updateAudioControls();
}

function safePlay(audio, enabled) {
  if (!enabled || !audio) return;
  audio.currentTime = 0;
  const promise = audio.play();
  if (promise && typeof promise.catch === "function") promise.catch(() => {});
}

function playSfx(name) {
  initAudio();
  safePlay(audioEls.sfx[name], audioState.sfxOn);
}

function startMusic() {
  initAudio();
  if (!audioState.musicOn || !audioEls.music) return;
  const promise = audioEls.music.play();
  if (promise && typeof promise.catch === "function") promise.catch(() => {});
}

function stopMusic() {
  if (!audioEls.music) return;
  audioEls.music.pause();
}

function updateAudioControls() {
  const musicButton = document.querySelector("#music-toggle");
  const sfxButton = document.querySelector("#sfx-toggle");
  if (musicButton) {
    musicButton.textContent = `🎵 MÚSICA: ${audioState.musicOn ? "ON" : "OFF"}`;
    musicButton.setAttribute("aria-pressed", String(audioState.musicOn));
  }
  if (sfxButton) {
    sfxButton.textContent = `🔊 EFECTOS: ${audioState.sfxOn ? "ON" : "OFF"}`;
    sfxButton.setAttribute("aria-pressed", String(audioState.sfxOn));
  }
}

function toggleMusic() {
  audioState.musicOn = !audioState.musicOn;
  localStorage.setItem("lab-music-on", String(audioState.musicOn));
  updateAudioControls();
  if (audioState.musicOn) startMusic(); else stopMusic();
}

function toggleSfx() {
  audioState.sfxOn = !audioState.sfxOn;
  localStorage.setItem("lab-sfx-on", String(audioState.sfxOn));
  updateAudioControls();
}

function bindAudioControls() {
  document.querySelector("#music-toggle")?.addEventListener("click", toggleMusic);
  document.querySelector("#sfx-toggle")?.addEventListener("click", toggleSfx);
  updateAudioControls();
}

function triggerIntruderAlert() {
  document.body.classList.add("intruder-alert");
  deniedOverlay.classList.remove("active");
  void deniedOverlay.offsetWidth;
  deniedOverlay.classList.add("active");
  playSfx("carcamal");
  setTimeout(() => deniedOverlay.classList.remove("active"), 5200);
  setTimeout(() => document.body.classList.remove("intruder-alert"), 5400);
}

function normalizeUsername(value) {
  return value.trim().toUpperCase();
}

function showAccessDenied() {
  triggerIntruderAlert();
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = () => reject(new Error(`No se pudo cargar: ${src}`));
    image.src = src;
  });
}

async function setLaboratoryImage(src) {
  try {
    await preloadImage(src);
    laboratory.style.backgroundImage = `url("${src}")`;
  } catch (error) {
    console.error(error);
    laboratory.style.backgroundImage = "none";
    laboratory.style.backgroundColor = "#071014";
  }
}

function levelForXP(xp) { return Math.min(MAX_LEVEL, Math.floor(xp / XP_PER_LEVEL) + 1); }
function rankForLevel(level) { return RANKS[Math.max(0, Math.min(MAX_LEVEL - 1, level - 1))]; }

function updateProgress() {
  const level = levelForXP(state.xp);
  const rank = rankForLevel(level);
  const levelStartXP = (level - 1) * XP_PER_LEVEL;
  const percentage = level >= MAX_LEVEL ? 100 : ((state.xp - levelStartXP) / XP_PER_LEVEL) * 100;
  document.querySelector("#hud-rank").textContent = `NIVEL ${level} · ${rank}`;
  document.querySelector("#hud-xp").textContent = `${state.xp} XP`;
  document.querySelector("#xp-bar").style.width = `${Math.min(100, Math.max(0, percentage))}%`;
  document.querySelector("#profile-title").textContent = rank;
  document.querySelector("#profile-rank-name").textContent = rank;
  document.querySelector("#profile-xp-text").textContent = `${state.xp} XP`;
  document.querySelector("#profile-xp-bar").style.width = `${Math.min(100, Math.max(0, percentage))}%`;
  document.querySelector("#profile-next").textContent = level < MAX_LEVEL ? `Siguiente nivel: ${rankForLevel(level + 1)}` : "Rango máximo alcanzado.";
}

function renderExperiments() {
  const grid = document.querySelector("#experiment-grid");
  grid.innerHTML = "";
  EXPERIMENTS.forEach((experiment, index) => {
    const unlocked = index === 0 || state.completedExperiments.includes(EXPERIMENTS[index - 1].id);
    const completed = state.completedExperiments.includes(experiment.id);
    const card = document.createElement("article");
    card.className = `experiment-card ${unlocked ? "unlocked" : "locked"} ${completed ? "completed" : ""}`;
    if (unlocked) {
      card.innerHTML = `
        <div class="experiment-number">EXP. ${String(experiment.id).padStart(3, "0")}</div>
        <div class="experiment-status">${completed ? "COMPLETADO" : "DISPONIBLE"}</div>
        <h3>${experiment.icon} ${experiment.title}</h3>
        <p>${experiment.description}</p>
        <button class="primary-button open-exp" data-open-exp="${experiment.id}">${completed ? "CONSULTAR EXPEDIENTE" : "ABRIR EXPEDIENTE"}</button>`;
    } else {
      card.innerHTML = `
        <div class="experiment-number">EXP. ${String(experiment.id).padStart(3, "0")}</div>
        <div class="experiment-status">CLASIFICADO</div>
        <h3>${experiment.icon} ${experiment.title}</h3>
        <p>ARCHIVO BLOQUEADO</p><p>Completa el experimento anterior para continuar.</p>`;
      card.addEventListener("click", () => showToast("HAZ EL ANTERIOR ANTES DE EMPEZAR CON ESTE."));
    }
    grid.appendChild(card);
  });
  grid.querySelectorAll("[data-open-exp]").forEach(btn => btn.addEventListener("click", e => { e.stopPropagation(); openExperiment(Number(btn.dataset.openExp)); }));
  updateCompletionPermission();
}

function openExperiment(id) {
  const experiment = EXPERIMENTS.find(x => x.id === id);
  const previous = EXPERIMENTS.find(x => x.id === id - 1);
  if (!experiment || (previous && !state.completedExperiments.includes(previous.id))) { showToast("HAZ EL ANTERIOR ANTES DE EMPEZAR CON ESTE."); return; }
  const grid = document.querySelector("#experiment-grid");
  grid.innerHTML = `
    <article class="experiment-detail-card">
      <button class="back-button" id="close-experiment-detail">← VOLVER A EXPEDIENTES</button>
      <div class="experiment-number">EXPEDIENTE ${String(id).padStart(3, "0")}</div>
      <h2>${experiment.title}</h2>
      <p class="experiment-intro">${experiment.description}</p>
      <div class="experiment-block"><h4>📓 ANTES DE EMPEZAR</h4><p><strong>PROTOCOLO DE INVESTIGACIÓN</strong></p><p>Antes de continuar, abre tu Cuaderno de Campo y registra tu <button class="keyword-link" data-term="hipótesis">hipótesis</button>.</p><p>${experiment.hypothesis}</p><p>No importa si aciertas. Una buena hipótesis es una idea que podemos poner a prueba.</p></div>
      <div class="experiment-block"><h4>🧰 MATERIAL DE LABORATORIO</h4><ul>${experiment.materials.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="experiment-block"><h4>⚗️ PROTOCOLO EXPERIMENTAL</h4><ol>${experiment.protocol.map(x=>`<li>${x}</li>`).join("")}</ol></div>
      <div class="experiment-block"><h4>👀 OBSERVACIONES</h4><p>Registra tus respuestas en el Cuaderno de Campo.</p><ul>${experiment.observations.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="experiment-block"><h4>🧠 ¿QUÉ HA OCURRIDO?</h4><p>${experiment.result}</p></div>
      <div class="completion-box"><h4>📡 DATOS RECIBIDOS</h4><p>Cuando hayas realizado el experimento y registrado tus observaciones, envía los datos al sistema.</p><button class="complete-button" id="complete-current">MARCAR EXPEDIENTE COMO COMPLETADO · +${experiment.xp} XP</button></div>
    </article>`;
  document.querySelector("#close-experiment-detail").addEventListener("click", renderExperiments);
  grid.querySelectorAll(".keyword-link").forEach(el => el.addEventListener("click", () => openArchiveTerm(el.dataset.term, "experimentos")));
  document.querySelector("#complete-current").addEventListener("click", () => completeExperiment(id));
}

function openArchiveTerm(term, sourceTab = "experimentos") {
  const panel = document.querySelector('[data-panel="info"]');
  if (!panel) return;
  openPanel("info");

  const content = document.querySelector("#info-content");
  const key = String(term).toLowerCase();
  const entry = ARCHIVE_TERMS[key];

  // Siempre que un concepto venga de un experimento, el Archivo abre en EXPERIMENTOS.
  const experimentTab = document.querySelector('#info-tabs .folder-tab');
  document.querySelectorAll("#info-tabs .folder-tab").forEach((btn, index) => {
    btn.classList.toggle("active", index === 0);
  });

  if (!entry) {
    content.innerHTML = `<div class="archive-ficha"><span class="archive-stamp">FICHA EN INVESTIGACIÓN</span><h3>${term.toUpperCase()}</h3><p>Esta ficha todavía está siendo investigada.</p></div>`;
    return;
  }

  const related = (entry.related || []).map(item =>
    `<button class="archive-related keyword-link" data-term="${item}">${item}</button>`
  ).join(" ");

  content.innerHTML = `
    <button class="back-button archive-back-button">← VOLVER A EXPERIMENTOS</button>
    <div class="archive-ficha">
      <span class="archive-stamp">FICHA DESCLASIFICADA</span>
      <h3>${entry.title.toUpperCase()}</h3>
      <p class="archive-definition">${entry.definition}</p>
      <div class="archive-example"><strong>🔎 EJEMPLO DE LABORATORIO</strong><p>${entry.example}</p></div>
      <div class="archive-related"><strong>CONCEPTOS RELACIONADOS</strong><div>${related}</div></div>
    </div>`;

  content.querySelector(".archive-back-button")?.addEventListener("click", renderInfo);
  content.querySelectorAll(".archive-related[data-term], .archive-related.keyword-link").forEach(el =>
    el.addEventListener("click", () => openArchiveTerm(el.dataset.term))
  );
  content.querySelectorAll(".archive-related .keyword-link").forEach(el =>
    el.addEventListener("click", () => openArchiveTerm(el.dataset.term))
  );
}

function completeExperiment(experimentId) {
  if (!state.user || state.user.role !== "scientist" || normalizeUsername(usernameInput.value) !== "SCI-009-001") { showAccessDenied(); return; }
  const experiment = EXPERIMENTS.find(item => item.id === experimentId);
  if (!experiment || state.completedExperiments.includes(experimentId)) { showToast("ESTE EXPERIMENTO YA ESTÁ REGISTRADO."); return; }
  const previousLevel = levelForXP(state.xp);
  state.completedExperiments.push(experimentId);
  state.xp += XP_PER_LEVEL;
  localStorage.setItem("lab-xp", String(state.xp));
  localStorage.setItem("lab-completed", JSON.stringify(state.completedExperiments));
  updateProgress();
  const newLevel = levelForXP(state.xp);
  renderExperiments();
  showToast(`DATOS RECIBIDOS · EXPEDIENTE ${String(experimentId).padStart(3,"0")} · +${XP_PER_LEVEL} XP`);
  if (newLevel > previousLevel) setTimeout(() => showLevelUp(newLevel), 650);
}

function showLevelUp(level) {
  const overlay = document.querySelector("#level-up-overlay");
  if (!overlay) return;
  document.querySelector("#level-up-number").textContent = `NIVEL ${level}`;
  document.querySelector("#level-up-rank").textContent = rankForLevel(level);
  document.querySelector("#level-up-xp").textContent = `${state.xp} XP · PROGRESO CIENTÍFICO REGISTRADO`;
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
}
function closeLevelUp() {
  const overlay = document.querySelector("#level-up-overlay");
  if (!overlay) return;
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
}

function addXP(amount) {
  if (!state.user || state.user.role !== "scientist") return;
  state.xp += Number(amount) || 0;
  localStorage.setItem("lab-xp", String(state.xp));
  updateProgress();
}

function markExperimentCompleted(experimentId) {
  if (!state.completedExperiments.includes(experimentId)) {
    state.completedExperiments.push(experimentId);
    localStorage.setItem("lab-completed", JSON.stringify(state.completedExperiments));
  }
}

function resetScientificProgress() {
  if (!window.confirm("¿Seguro que quieres reiniciar TODO el progreso científico? Se borrarán XP y expedientes completados en este navegador.")) return;

  ["lab-xp", "lab-completed", "lab-investigations", "lab-tests"].forEach(key => localStorage.removeItem(key));

  // También limpiamos las claves de versiones anteriores.
  ["scientistXP","completedExperiments","completedInvestigations","completedTests","archiveProgress"].forEach(key => localStorage.removeItem(key));

  window.location.reload();
}

function loadProgress() {
  state.xp = Number(localStorage.getItem("lab-xp") || 0);
  try {
    state.completedExperiments = JSON.parse(localStorage.getItem("lab-completed") || "[]");
  } catch {
    state.completedExperiments = [];
  }
  updateProgress();
}

function openPanel(section) {
  if (!state.user) return;

  // Padres: solo pueden acceder a experimentos.
  if (state.user.role === "supervisor" && section !== "experiments") {
    triggerDenied();
    return;
  }

  state.currentPanel = section;
  sectionLayer.classList.add("is-open");
  sectionLayer.setAttribute("aria-hidden", "false");

  document.querySelectorAll(".section-panel").forEach(panel => {
    panel.classList.toggle("active", panel.dataset.panel === section);
  });

  if (section === "experiments") renderExperiments();
  if (section === "info") renderInfo();
  updateProgress();
  updateCompletionPermission();
}

function closePanel() {
  state.currentPanel = null;
  sectionLayer.classList.remove("is-open");
  sectionLayer.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".section-panel").forEach(panel => panel.classList.remove("active"));
}

function renderInfo() {
  const tabs = document.querySelector("#info-tabs");
  const content = document.querySelector("#info-content");
  if (!tabs || !content) return;

  tabs.innerHTML = "";
  INFO_TABS.forEach((tab, index) => {
    const button = document.createElement("button");
    button.className = `folder-tab ${index === 0 ? "active" : ""}`;
    button.textContent = tab.label;
    button.addEventListener("click", () => {
      tabs.querySelectorAll(".folder-tab").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const selected = INFO_TABS.find(item => item.id === tab.id);
      content.innerHTML = `<h3>${selected.title}</h3>${selected.body}`;
      populateArchiveTab(tab.id);
    });
    tabs.appendChild(button);
  });

  content.innerHTML = `<h3>${INFO_TABS[0].title}</h3>${INFO_TABS[0].body}`;
  populateArchiveTab("experimentos");
}

function populateArchiveTab(tabId) {
  const containerId = tabId === "experimentos" ? "archive-experiment-terms" : "archive-general-terms";
  const container = document.getElementById(containerId);
  if (!container) return;

  const keys = tabId === "experimentos"
    ? [
      "hipótesis","observación","reacción química","gas","dióxido de carbono",
      "acidez","indicador","pH","ácido","base","neutro","fluido","viscosidad",
      "fuerza","fluido no newtoniano","pigmento","mezcla","separación",
      "cromatografía","densidad","masa","volumen","miscibilidad"
    ]
    : Object.keys(ARCHIVE_TERMS).filter(k => ![
      "hipótesis","observación","reacción química","gas","dióxido de carbono",
      "acidez","indicador","pH","ácido","base","neutro","fluido","viscosidad",
      "fuerza","fluido no newtoniano","pigmento","mezcla","separación",
      "cromatografía","densidad","masa","volumen","miscibilidad"
    ].includes(k));

  container.innerHTML = keys.map(key =>
    `<button class="archive-term-button keyword-link" data-term="${key}">${ARCHIVE_TERMS[key]?.title || key}</button>`
  ).join("");

  container.querySelectorAll("[data-term]").forEach(el => {
    el.addEventListener("click", () => openArchiveTerm(el.dataset.term));
  });
}

function triggerDenied() {
  deniedOverlay.classList.remove("active");
  void deniedOverlay.offsetWidth;
  deniedOverlay.classList.add("active");

  setTimeout(() => deniedOverlay.classList.remove("active"), 5200);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function resetAccessState() {
  accessPanel.classList.remove("success", "supervisor", "error");
  accessMessage.textContent = "";
}

async function authorize() {
  resetAccessState();

  const username = normalizeUsername(usernameInput.value);
  const user = USERS[username];

  if (!user) {
    accessPanel.classList.add("error");
    playSfx("denied");
    accessMessage.textContent = "IDENTIFICACIÓN NO RECONOCIDA. ACCESO DENEGADO.";
    return;
  }

  state.user = user;
  playSfx("granted");
  document.body.classList.toggle("supervisor", user.role === "supervisor");
  document.body.classList.toggle("director", user.role === "director");
  updateCompletionPermission();

  await setLaboratoryImage(user.labImage);

  if (user.role === "supervisor") {
    accessPanel.classList.add("supervisor");
    accessMessage.innerHTML =
      "<strong>CARCAMAL DETECTADO</strong><br>AUTORIZACIÓN DE SUPERVISIÓN CONFIRMADA.";
  } else {
    accessPanel.classList.add("success");
    accessMessage.innerHTML =
      "<strong>IDENTIDAD CONFIRMADA</strong><br>INICIANDO APERTURA.";
  }

  welcomeLabel.textContent = user.role === "supervisor"
    ? "CENTRAL DE INVESTIGACIÓN · SUPERVISIÓN"
    : "CENTRAL DE INVESTIGACIÓN";
  welcomeTitle.textContent = user.title;
  welcomeSubtitle.textContent = user.welcome;

  setTimeout(() => {
    playSfx("door");
    startMusic();
    doorScene.classList.add("is-opening");
    laboratory.setAttribute("aria-hidden", "false");
    laboratory.classList.add("is-visible");
    loadProgress();
  }, 2400);

  setTimeout(() => {
    accessPanel.classList.add("is-hidden");
  }, 4400);

  setTimeout(() => {
    doorScene.style.pointerEvents = "none";
  }, 5900);
}

document.querySelectorAll(".hotspot").forEach(hotspot => {
  hotspot.addEventListener("click", () => openPanel(hotspot.dataset.section));
});

document.querySelectorAll(".back-button").forEach(button => {
  button.addEventListener("click", closePanel);
});

accessButton.addEventListener("click", authorize);
usernameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") authorize();
});

loadProgress();
bindAudioControls();
usernameInput.focus();


/* =========================
   V0.8 — CERRAR PUERTAS / CAMBIAR DE USUARIO
   ========================= */

function logoutAndCloseDoors() {
  // Limpiar estado visual de alertas y devolver el laboratorio a su estado neutro.
  document.body.classList.remove("intruder-alert");
  document.body.classList.remove("supervisor", "director");

  // Las puertas empiezan a cerrarse, PERO el laboratorio sigue visible
  // hasta que la animación industrial haya terminado.
  doorScene.style.pointerEvents = "auto";
  doorScene.classList.remove("is-opening");

  accessPanel.classList.add("is-hidden");

  stopMusic();

  usernameInput.value = "";
  accessMessage.textContent = "";

  welcomeTitle.textContent = "IDENTIDAD CONFIRMADA";
  welcomeSubtitle.textContent = "";
  state.user = null;
  updateCompletionPermission();

  if (typeof closeCurrentSection === "function") {
    closeCurrentSection();
  } else if (typeof showLaboratory === "function") {
    showLaboratory();
  }

  window.scrollTo(0, 0);

  // 3.2 s = duración de la compuerta. Ocultamos el laboratorio
  // solo cuando ya está completamente cerrada.
  setTimeout(() => {
    laboratory.classList.remove("is-visible");
    laboratory.setAttribute("aria-hidden", "true");

    accessPanel.classList.remove("success", "supervisor", "error");
    accessPanel.classList.remove("is-hidden");

    usernameInput.focus();
  }, 3350);
}

const logoutButton = document.querySelector("#logout-button");
if (logoutButton) {
  logoutButton.addEventListener("click", logoutAndCloseDoors);
}


function updateCompletionPermission() {
  const isScientist =
    state.user &&
    state.user.role === "scientist" &&
    normalizeUsername(usernameInput.value) === "SCI-009-001";

  document.querySelectorAll("[data-complete]").forEach(button => {
    button.disabled = !isScientist;
    button.setAttribute("aria-disabled", String(!isScientist));

    if (!isScientist) {
      button.title = "Solo SCI-009-001 puede registrar un experimento como completado.";
    } else {
      button.removeAttribute("title");
    }
  });
}

usernameInput.addEventListener("input", updateCompletionPermission);

const resetProgressButton = document.querySelector("#reset-progress-button");
if (resetProgressButton) resetProgressButton.addEventListener("click", resetScientificProgress);

function continueAfterLevelUp() {
  // El botón debe devolver al científico al mapa principal, no quedarse
  // dentro del expediente que acaba de completar.
  closeLevelUp();
  closePanel();

  const laboratory = document.querySelector("#laboratory");
  if (laboratory) {
    laboratory.classList.add("is-visible");
    laboratory.setAttribute("aria-hidden", "false");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

const levelUpContinue = document.querySelector("#level-up-continue");
if (levelUpContinue) {
  levelUpContinue.addEventListener("click", continueAfterLevelUp);
}

/* ==========================================================
   V0.16 — INVESTIGACIONES + TERMINAL DE EVALUACIÓN
   ========================================================== */

const RESEARCH_CATEGORIES = [
  {
    id: "fisica",
    icon: "🧲",
    title: "FÍSICA QUE ESTÁ POR TODAS PARTES",
    intro: "Movimiento, fuerzas, gravedad, equilibrio y rozamiento: descubre la física escondida en las cosas de todos los días.",
    items: [
      {
        id: "fisica-001", number: "001", title: "EL MISTERIO DEL MOVIMIENTO", icon: "🏃",
        type: "MISIÓN DE OBSERVACIÓN", duration: "10–15 min", xp: 15,
        description: "Observa objetos que se mueven y descubre cómo podemos describir su movimiento.",
        protocol: ["Busca al menos tres objetos o personas que estén en movimiento.", "Elige uno y observa durante un rato qué cambia de posición.", "Si puedes hacerlo de forma segura, compara cuál parece moverse más rápido y cuál más despacio.", "No necesitas instrumentos perfectos: describe lo que ves."],
        notebook: ["Qué has observado.", "Qué objeto se movía más rápido o más despacio.", "Una estimación de distancia o tiempo, si puedes obtenerla.", "Una pregunta que te haya surgido."],
        explanation: "El <button class=\"keyword-link\" data-term=\"movimiento\">movimiento</button> ocurre cuando un objeto cambia de posición respecto a un punto de referencia. Podemos describirlo usando ideas como <button class=\"keyword-link\" data-term=\"distancia\">distancia</button> y <button class=\"keyword-link\" data-term=\"tiempo\">tiempo</button>. Si comparamos cuánto tarda un objeto en recorrer una distancia, podemos hablar de su <button class=\"keyword-link\" data-term=\"velocidad\">velocidad</button>. No hace falta ser perfecto: observar y comparar ya es hacer ciencia.",
        keywords: ["movimiento","distancia","tiempo","velocidad"]
      },
      {
        id: "fisica-002", number: "002", title: "FUERZAS INVISIBLES", icon: "💪",
        type: "CAZA DE FUERZAS", duration: "15 min", xp: 15,
        description: "Encuentra ejemplos de empujes, tirones y cambios de movimiento escondidos en tu día.",
        protocol: ["Durante unas horas, busca ejemplos de objetos que alguien empuja, tira, frena o cambia de dirección.", "Encuentra también un ejemplo en el que una fuerza cambie la forma de algo flexible.", "Apunta al menos cuatro casos diferentes.", "Intenta describir qué cambió después de aplicar la fuerza."],
        notebook: ["Objeto o situación.", "¿Empuje, tirón o ambas cosas?", "¿Qué cambió: movimiento, dirección, velocidad o forma?", "Tu ejemplo favorito y por qué."],
        explanation: "Una <button class=\"keyword-link\" data-term=\"fuerza\">fuerza</button> puede ser un empuje o un tirón. Las fuerzas pueden cambiar el <button class=\"keyword-link\" data-term=\"movimiento\">movimiento</button> de un objeto, modificar su dirección o producir una <button class=\"keyword-link\" data-term=\"deformación\">deformación</button>. Muchas fuerzas no se ven directamente, pero podemos reconocerlas por sus efectos.",
        keywords: ["fuerza","empuje","tirón","deformación"]
      },
      {
        id: "fisica-003", number: "003", title: "LA GRAVEDAD NO DESCANSA", icon: "🍎",
        type: "OBSERVACIÓN DE CAMPO", duration: "20–30 min", xp: 15,
        description: "Investiga por qué los objetos caen y descubre que el aire también puede influir en lo que observamos.",
        protocol: ["Desde una altura segura y con ayuda de un adulto si hace falta, deja caer objetos ligeros y seguros.", "Compara una hoja de papel extendida con otra arrugada.", "Observa cuál llega antes al suelo.", "Pregúntate qué papel puede estar jugando el aire."],
        notebook: ["Qué objetos comparaste.", "Qué ocurrió.", "Qué crees que hizo la gravedad.", "Qué crees que hizo el aire.", "Tu hipótesis sobre por qué el papel se comportó de manera diferente."],
        explanation: "La <button class=\"keyword-link\" data-term=\"gravedad\">gravedad</button> atrae los objetos hacia la Tierra. Pero cuando un objeto cae a través del aire también aparece <button class=\"keyword-link\" data-term=\"resistencia del aire\">resistencia del aire</button>. La forma y el tamaño de un objeto pueden cambiar cuánto le afecta esa resistencia. Por eso una hoja extendida y una hoja arrugada pueden caer de manera diferente.",
        keywords: ["gravedad","caída","aire","resistencia del aire"]
      },
      {
        id: "fisica-004", number: "004", title: "EL PUNTO DE EQUILIBRIO", icon: "⚖️",
        type: "MISIÓN DE EQUILIBRIO", duration: "15–20 min", xp: 15,
        description: "Descubre dónde puedes sostener un objeto para que deje de caer hacia un lado.",
        protocol: ["Elige una regla, lápiz u objeto alargado y seguro.", "Intenta equilibrarlo sobre un dedo o un punto de apoyo.", "Mueve poco a poco el punto de apoyo hasta encontrar una posición estable.", "Repite con otro objeto y compara."],
        notebook: ["Objeto utilizado.", "Dónde encontraste el equilibrio.", "Qué ocurrió al mover el punto de apoyo.", "Qué objeto fue más fácil de equilibrar."],
        explanation: "Un objeto puede mantenerse estable cuando su <button class=\"keyword-link\" data-term=\"centro de gravedad\">centro de gravedad</button> queda en una posición adecuada respecto al apoyo. El <button class=\"keyword-link\" data-term=\"peso\">peso</button> tira del objeto hacia abajo y la posición del apoyo determina si el sistema permanece en <button class=\"keyword-link\" data-term=\"equilibrio\">equilibrio</button>. La estabilidad depende de cómo están distribuidas la masa y las fuerzas.",
        keywords: ["equilibrio","estabilidad","peso","centro de gravedad"]
      },
      {
        id: "fisica-005", number: "005", title: "EL MISTERIO DEL ROZAMIENTO", icon: "🛞",
        type: "COMPARACIÓN", duration: "15 min", xp: 15,
        description: "Descubre por qué el mismo objeto no se desliza igual sobre todas las superficies.",
        protocol: ["Elige un objeto pequeño que puedas deslizar con seguridad.", "Pruébalo sobre dos o tres superficies distintas, como cartón, papel o tela.", "Empújalo de forma parecida cada vez.", "Compara cuánto se desplaza y qué superficie ofrece más resistencia."],
        notebook: ["Superficies comparadas.", "Cuál permitió más movimiento.", "Cuál frenó antes al objeto.", "Tu explicación sobre el rozamiento."],
        explanation: "El <button class=\"keyword-link\" data-term=\"rozamiento\">rozamiento</button>, también llamado <button class=\"keyword-link\" data-term=\"fricción\">fricción</button>, aparece cuando dos superficies interactúan y se oponen al deslizamiento. Depende de las características de las superficies y de cómo se presionan entre sí. Sin rozamiento sería difícil caminar, agarrar objetos o frenar.",
        keywords: ["rozamiento","fricción","superficie","deslizamiento"]
      }
    ]
  },
  {
    id: "luz-sonido",
    icon: "🌈",
    title: "LUZ, SONIDO Y COSAS QUE NO VEMOS",
    intro: "La luz y el sonido están trabajando a tu alrededor aunque no puedas agarrarlos con las manos.",
    items: [
      {
        id: "luz-001", number: "006", title: "EL RELOJ DE LAS SOMBRAS", icon: "☀️",
        type: "MISIÓN DE CAMPO", duration: "VARIAS HORAS", xp: 15,
        description: "Observa una sombra en diferentes momentos del día y descubre cómo cambia.",
        protocol: ["Coloca un objeto vertical y seguro en un lugar donde reciba luz natural.", "Observa y registra su sombra en un primer momento.", "Vuelve a observarla más tarde, por ejemplo después de comer.", "Si puedes, realiza una tercera observación y compara las posiciones."],
        notebook: ["Hora de cada observación.", "Longitud aproximada de la sombra.", "Dirección aproximada de la sombra.", "Un pequeño dibujo de cada momento.", "Qué patrón has encontrado."],
        explanation: "Una <button class=\"keyword-link\" data-term=\"sombra\">sombra</button> aparece cuando un objeto bloquea parte de una <button class=\"keyword-link\" data-term=\"luz\">luz</button>. Como la posición aparente del Sol cambia a lo largo del día, también cambia la dirección y longitud de las sombras. Es una forma sencilla de observar cómo la posición de una fuente de luz modifica lo que vemos.",
        keywords: ["luz","sombra","fuente de luz","dirección"]
      },
      {
        id: "luz-002", number: "007", title: "LA LUZ REBOTA", icon: "🪞",
        type: "CAZA DE REFLEJOS", duration: "15 min", xp: 15,
        description: "Busca superficies que reflejen la luz y compara cómo lo hacen.",
        protocol: ["Durante el día, localiza un espejo, una ventana, una superficie metálica y, si puedes, agua.", "Observa qué imágenes o puntos de luz puedes ver reflejados.", "Compara las superficies.", "Describe cuál produce un reflejo más claro y cuál más difuso."],
        notebook: ["Superficies observadas.", "Qué reflejaba cada una.", "Cuál produjo el reflejo más claro.", "Qué tienen en común las superficies que reflejan bien."],
        explanation: "Cuando la <button class=\"keyword-link\" data-term=\"luz\">luz</button> llega a una superficie puede cambiar de dirección. A este fenómeno lo llamamos <button class=\"keyword-link\" data-term=\"reflexión\">reflexión</button>. Las superficies lisas pueden producir reflejos definidos, mientras que las superficies rugosas dispersan la luz en muchas direcciones. Nunca debemos mirar directamente al Sol ni a fuentes de luz intensas.",
        keywords: ["reflexión","espejo","superficie","luz"]
      },
      {
        id: "luz-003", number: "008", title: "EL MAPA DEL SONIDO", icon: "🔊",
        type: "MISIÓN DE CAMPO", duration: "20 min", xp: 15,
        description: "Convierte un paseo en un mapa científico de sonidos.",
        protocol: ["Durante un paseo seguro, escucha atentamente los sonidos que te rodean.", "Busca al menos seis sonidos diferentes.", "Clasifícalos como fuertes o suaves y agudos o graves.", "Intenta decidir cuáles parecen estar cerca y cuáles lejos."],
        notebook: ["Sonido.", "Cerca o lejos.", "Fuerte o suave.", "Agudo o grave.", "Qué objeto o situación crees que lo produjo."],
        explanation: "El <button class=\"keyword-link\" data-term=\"sonido\">sonido</button> se produce cuando algo vibra y esa vibración se transmite a través de un medio, como el aire. Podemos comparar los sonidos por su intensidad y por su <button class=\"keyword-link\" data-term=\"tono\">tono</button>. Escuchar con atención también es una forma de recoger datos científicos.",
        keywords: ["sonido","vibración","tono","intensidad"]
      },
      {
        id: "luz-004", number: "009", title: "EL MISTERIO DE LOS COLORES", icon: "🎨",
        type: "OBSERVACIÓN", duration: "10 min", xp: 15,
        description: "Comprueba si los objetos parecen tener exactamente el mismo color bajo distintas luces.",
        protocol: ["Elige tres objetos de colores distintos.", "Obsérvalos con luz natural y después con iluminación interior disponible.", "No necesitas cambiar ninguna bombilla: solo compara situaciones seguras.", "Busca diferencias de tono o intensidad."],
        notebook: ["Objeto.", "Color con luz natural.", "Color con luz interior.", "Qué cambió y qué permaneció igual."],
        explanation: "El color que percibimos depende de la <button class=\"keyword-link\" data-term=\"luz\">luz</button> que ilumina un objeto y de cómo ese material interactúa con ella. Parte de la luz es absorbida y parte puede ser reflejada hacia nuestros ojos. Por eso un mismo objeto puede parecer diferente bajo distintas condiciones de iluminación.",
        keywords: ["color","luz","percepción","reflexión"]
      },
      {
        id: "luz-005", number: "010", title: "¿POR QUÉ SE VE?", icon: "🔍",
        type: "CLASIFICACIÓN", duration: "10–15 min", xp: 15,
        description: "Clasifica materiales según la cantidad de luz que dejan pasar.",
        protocol: ["Busca objetos seguros de tres tipos: uno que deje ver claramente a través, otro que deje pasar luz pero no permita ver con claridad y otro que bloquee la luz.", "Clasifícalos.", "Comprueba tus ejemplos con otra persona si puedes.", "Apunta un ejemplo de cada tipo."],
        notebook: ["Objeto transparente.", "Objeto translúcido.", "Objeto opaco.", "Qué diferencia has observado."],
        explanation: "Un material <button class=\"keyword-link\" data-term=\"transparente\">transparente</button> deja pasar mucha luz y permite ver a través de él. Uno <button class=\"keyword-link\" data-term=\"translúcido\">translúcido</button> deja pasar luz, pero dispersa parte de ella. Un material <button class=\"keyword-link\" data-term=\"opaco\">opaco</button> bloquea la luz visible. Estas propiedades ayudan a decidir para qué podemos utilizar un material.",
        keywords: ["transparente","translúcido","opaco","luz"]
      }
    ]
  },
  {
    id: "quimica",
    icon: "🧪",
    title: "QUÍMICA EN LA VIDA COTIDIANA",
    intro: "Disoluciones, cambios de estado, limpieza y reacciones: la química no vive solo dentro del laboratorio.",
    items: [
      {
        id: "quimica-001", number: "011", title: "EL MISTERIO DE LA DISOLUCIÓN", icon: "🥤",
        type: "MISIÓN DE OBSERVACIÓN", duration: "15 min", xp: 15,
        description: "Investiga qué sustancias se disuelven en agua y cuáles no.",
        protocol: ["Piensa en sustancias cotidianas y seguras que conozcas: azúcar, sal, arena, aceite, etc.", "Si un adulto lo considera apropiado, prepara pequeñas muestras de agua y observa qué ocurre al añadirlas.", "No pruebes las mezclas de investigación.", "Compara cuáles se distribuyen por el agua y cuáles permanecen separadas."],
        notebook: ["Sustancia.", "¿Se disuelve o no?", "Qué aspecto tiene después.", "Una posible explicación."],
        explanation: "Una <button class=\"keyword-link\" data-term=\"disolución\">disolución</button> es una mezcla en la que una sustancia se distribuye de forma uniforme dentro de otra. La sustancia que se disuelve es el <button class=\"keyword-link\" data-term=\"soluto\">soluto</button> y la que la disuelve suele llamarse <button class=\"keyword-link\" data-term=\"disolvente\">disolvente</button>. Que algo no se disuelva no significa que haya desaparecido: simplemente no se ha distribuido de la misma manera.",
        keywords: ["disolución","soluto","disolvente","mezcla"]
      },
      {
        id: "quimica-002", number: "012", title: "EL VIAJE DEL AGUA", icon: "💧",
        type: "MISIÓN DE CAMPO", duration: "VARIAS HORAS", xp: 15,
        description: "Busca pistas de que el agua puede pasar al aire aunque no podamos verla.",
        protocol: ["Busca durante el día ejemplos de agua que desaparece de una superficie: ropa que se seca, un charco, una superficie húmeda.", "Busca también un ejemplo de gotas que aparecen sobre una superficie fría.", "No necesitas preparar nada peligroso: observa situaciones normales de casa o de la calle.", "Compara ambos fenómenos."],
        notebook: ["Ejemplo de evaporación.", "Ejemplo de condensación.", "Qué observaste.", "Dónde crees que estaba el agua antes y después."],
        explanation: "La <button class=\"keyword-link\" data-term=\"evaporación\">evaporación</button> ocurre cuando parte de un líquido pasa al estado gaseoso. La <button class=\"keyword-link\" data-term=\"condensación\">condensación</button> es el proceso contrario: un gas forma líquido al enfriarse. Por eso podemos ver gotas sobre una superficie fría aunque no hayamos echado agua directamente sobre ella.",
        keywords: ["evaporación","condensación","vapor de agua","cambio de estado"]
      },
      {
        id: "quimica-003", number: "013", title: "EL HIELO QUE DESAPARECE", icon: "🧊",
        type: "OBSERVACIÓN TEMPORAL", duration: "30–60 min", xp: 15,
        description: "Sigue durante un rato cómo un sólido cambia hasta convertirse en líquido.",
        protocol: ["Coloca un cubito de hielo en un recipiente.", "Anota cómo es al principio.", "Vuelve a observarlo cada 10 minutos aproximadamente.", "Describe cómo cambia su forma y cuánto líquido aparece."],
        notebook: ["Hora inicial.", "Aspecto inicial.", "Observación intermedia.", "Observación final.", "Qué crees que ha ocurrido con la materia."],
        explanation: "Cuando el hielo recibe energía térmica, puede pasar de sólido a líquido. Este cambio se llama <button class=\"keyword-link\" data-term=\"fusión\">fusión</button>. El agua no ha dejado de existir: ha cambiado de <button class=\"keyword-link\" data-term=\"estado de la materia\">estado de la materia</button>. Observar un cambio durante un periodo de tiempo nos ayuda a relacionar el proceso con la temperatura y la energía.",
        keywords: ["fusión","sólido","líquido","estado de la materia"]
      },
      {
        id: "quimica-004", number: "014", title: "EL EQUIPO DE LIMPIEZA", icon: "🫧",
        type: "OBSERVACIÓN COTIDIANA", duration: "10 min", xp: 15,
        description: "Descubre por qué el jabón ayuda a limpiar sustancias que el agua sola tiene dificultades para retirar.",
        protocol: ["Observa una superficie doméstica que tenga una pequeña cantidad de suciedad o grasa normal.", "Compara, con supervisión adulta y sin usar productos peligrosos, qué ocurre con agua y con agua jabonosa.", "No mezcles productos de limpieza entre sí.", "Describe la diferencia."],
        notebook: ["Superficie observada.", "Qué ocurrió con agua.", "Qué ocurrió con agua jabonosa.", "Tu explicación."],
        explanation: "El agua tiene dificultades para retirar algunas sustancias grasas porque sus propiedades son diferentes. El <button class=\"keyword-link\" data-term=\"jabón\">jabón</button> ayuda a interactuar con la grasa y facilita que pueda ser arrastrada por el agua. La limpieza es un ejemplo cotidiano de cómo las propiedades de distintas sustancias pueden trabajar juntas. Nunca debemos mezclar productos de limpieza domésticos entre sí.",
        keywords: ["jabón","grasa","agua","limpieza"]
      },
      {
        id: "quimica-005", number: "015", title: "EL CAMBIO DE COLOR SECRETO", icon: "🟣",
        type: "CAZA DE CAMBIOS", duration: "20 min", xp: 15,
        description: "Busca cambios de color cotidianos y decide si el color por sí solo demuestra una reacción química.",
        protocol: ["Observa alimentos u objetos cotidianos que hayan cambiado de color por cocción, maduración, luz o envejecimiento.", "Elige tres casos diferentes.", "Para cada uno, pregunta qué otras evidencias tienes de que ha ocurrido un cambio.", "Recuerda el experimento de la lombarda y compara."],
        notebook: ["Qué cambió de color.", "Qué otras señales observaste.", "¿Crees que hubo una reacción química?", "Qué dato te falta para estar más seguro."],
        explanation: "Un <button class=\"keyword-link\" data-term=\"cambio de color\">cambio de color</button> puede ser una pista de que ha ocurrido una <button class=\"keyword-link\" data-term=\"reacción química\">reacción química</button>, pero no demuestra por sí solo que haya una reacción. En ciencia buscamos varias <button class=\"keyword-link\" data-term=\"evidencia\">evidencias</button>: aparición de gas, formación de un sólido, cambio de temperatura, olor nuevo u otras señales. También existen cambios físicos que modifican el aspecto sin crear sustancias nuevas.",
        keywords: ["cambio de color","reacción química","evidencia","cambio físico"]
      }
    ]
  },
  {
    id: "tecnologia",
    icon: "💻",
    title: "LA CIENCIA DETRÁS DE LA TECNOLOGÍA",
    intro: "Pantallas, sensores, satélites, códigos y baterías: la tecnología es ciencia aplicada en acción.",
    items: [
      {
        id: "tec-001", number: "016", title: "EL MISTERIO DE LA PANTALLA", icon: "📱",
        type: "MISIÓN TECNOLÓGICA", duration: "10 min", xp: 15,
        description: "Descubre que una imagen digital está formada por muchísimos elementos diminutos.",
        protocol: ["Mira una pantalla de forma normal y segura.", "Si tienes una lupa y un dispositivo apropiado, observa una zona de la pantalla sin presionarla.", "Busca pequeños puntos o subpuntos de color.", "Compara una imagen muy detallada con una zona de color uniforme."],
        notebook: ["Dispositivo observado.", "Qué pequeños elementos has visto.", "Qué crees que ocurre cuando muchos se combinan.", "Qué significa para ti la palabra píxel."],
        explanation: "Las imágenes digitales pueden estar formadas por muchos pequeños elementos llamados <button class=\"keyword-link\" data-term=\"píxel\">píxeles</button>. En muchas pantallas cada píxel combina pequeñas cantidades de luz de distintos colores. El sistema <button class=\"keyword-link\" data-term=\"RGB\">RGB</button> utiliza rojo, verde y azul para crear una gran variedad de colores. Cuantos más píxeles podemos representar en un área, más detalle puede mostrar una imagen.",
        keywords: ["píxel","RGB","imagen digital","resolución"]
      },
      {
        id: "tec-002", number: "017", title: "¿CÓMO SABE EL MÓVIL DÓNDE ESTÁ?", icon: "🛰️",
        type: "MISIÓN TECNOLÓGICA", duration: "10–15 min", xp: 15,
        description: "Investiga cómo un dispositivo puede calcular una posición usando señales y satélites.",
        protocol: ["Con permiso de un adulto, abre un mapa en un dispositivo que tenga localización activada.", "Observa cómo aparece tu posición aproximada.", "Desplázate de forma normal y segura y observa cómo cambia el mapa.", "No compartas tu ubicación ni datos personales con nadie por esta investigación."],
        notebook: ["Qué dispositivo utilizaste.", "Qué observaste en el mapa.", "Qué crees que significa GPS.", "Por qué crees que hacen falta señales."],
        explanation: "El <button class=\"keyword-link\" data-term=\"GPS\">GPS</button> permite estimar una posición utilizando señales procedentes de satélites y cálculos de tiempo y distancia. El dispositivo combina esa información con otros datos para calcular dónde se encuentra aproximadamente. La idea científica importante es que una posición puede determinarse a partir de señales que viajan entre lugares diferentes.",
        keywords: ["GPS","satélite","señal","posición"]
      },
      {
        id: "tec-003", number: "018", title: "EL TELÉFONO QUE SABE CUÁNDO LO GIRAS", icon: "🔄",
        type: "MISIÓN DE SENSORES", duration: "10 min", xp: 15,
        description: "Descubre cómo los dispositivos detectan movimiento y orientación sin que nadie les diga manualmente que los has girado.",
        protocol: ["Abre una aplicación que cambie de orientación cuando giras el dispositivo, si tu dispositivo lo permite.", "Gíralo lentamente y después vuelve a colocarlo como estaba.", "Observa cuándo cambia la pantalla.", "Piensa qué tipo de sensor podría estar detectando el movimiento."],
        notebook: ["Qué ocurrió al girar el dispositivo.", "Qué sensor crees que participa.", "Qué diferencia hay entre estar quieto y girar.", "Una pregunta que te gustaría investigar después."],
        explanation: "Los dispositivos modernos contienen <button class=\"keyword-link\" data-term=\"sensor\">sensores</button> capaces de detectar cambios en el movimiento y la orientación. Uno de los componentes relacionados con esto es el <button class=\"keyword-link\" data-term=\"acelerómetro\">acelerómetro</button>, que puede detectar cambios de movimiento. El software interpreta esas señales y decide, por ejemplo, cuándo girar la pantalla.",
        keywords: ["sensor","movimiento","orientación","acelerómetro"]
      },
      {
        id: "tec-004", number: "019", title: "EL MISTERIO DEL CÓDIGO QR", icon: "▦",
        type: "MISIÓN DE INFORMACIÓN", duration: "15 min", xp: 15,
        description: "Descubre cómo un patrón de cuadrados puede almacenar información que una cámara sabe interpretar.",
        protocol: ["Observa un código QR sin necesidad de escanearlo.", "Fíjate en sus cuadrados y patrones.", "Si tienes permiso, escanea un QR seguro y conocido.", "Compara la imagen del código con la información que aparece después."],
        notebook: ["Dónde encontraste el QR.", "Qué tipo de información contenía.", "Qué patrones has observado.", "Qué crees que significa codificar información."],
        explanation: "Un código <button class=\"keyword-link\" data-term=\"QR\">QR</button> utiliza un patrón de módulos oscuros y claros para representar <button class=\"keyword-link\" data-term=\"datos\">datos</button>. Un lector analiza ese patrón y lo transforma en información que el dispositivo puede utilizar. Es un ejemplo cotidiano de <button class=\"keyword-link\" data-term=\"codificación\">codificación</button>: una forma de representar información mediante un sistema de reglas.",
        keywords: ["QR","datos","codificación","información"]
      },
      {
        id: "tec-005", number: "020", title: "LA CIENCIA DE LA BATERÍA", icon: "🔋",
        type: "MISIÓN DE OBSERVACIÓN", duration: "DURANTE EL DÍA", xp: 15,
        description: "Observa cómo utilizan energía los dispositivos que forman parte de tu vida cotidiana.",
        protocol: ["Elige dos dispositivos que funcionen con batería.", "Observa cuándo se utilizan y qué ocurre con su nivel de carga.", "Compara un dispositivo que uses mucho con otro que uses poco.", "Piensa por qué todos necesitan energía para funcionar."],
        notebook: ["Dispositivos observados.", "Nivel de carga inicial si es visible.", "Qué ocurrió después de usarlos.", "Cuál parece consumir más y por qué lo crees."],
        explanation: "Una <button class=\"keyword-link\" data-term=\"batería\">batería</button> almacena energía que un dispositivo puede transformar y utilizar. Los aparatos consumen energía a ritmos diferentes según lo que estén haciendo. Una pantalla brillante, una conexión activa o una tarea exigente pueden aumentar el <button class=\"keyword-link\" data-term=\"consumo de energía\">consumo de energía</button>. La ciencia y la tecnología se encuentran aquí: entender la energía permite diseñar dispositivos más eficientes.",
        keywords: ["batería","energía","electricidad","consumo de energía"]
      }
    ]
  }
];

const TESTS = [
  { id:1, title:"TERMINAL 001 · PRIMER CONTACTO", unlockLevel:2, questions:[
    {q:"En el experimento del globo, ¿qué gas ayuda a inflarlo?", a:["Oxígeno","Dióxido de carbono","Helio"], c:1},
    {q:"¿Qué es una hipótesis?", a:["Una predicción que podemos poner a prueba","Una respuesta que siempre es correcta","Una lista de materiales"], c:0},
    {q:"¿Qué debemos hacer con nuestras observaciones?", a:["Inventarlas si no nos gustan","Registrarlas con cuidado","Borrarlas al terminar"], c:1},
    {q:"El agua y el aceite pueden formar capas porque...", a:["Son el mismo líquido","Tienen propiedades diferentes y no se mezclan completamente","El aceite pesa siempre más"], c:1},
    {q:"¿Qué palabra describe la cantidad de materia de un objeto?", a:["Masa","Color","Temperatura"], c:0}
  ]},
  { id:2, title:"TERMINAL 002 · MATERIA Y CAMBIOS", unlockLevel:3, questions:[
    {q:"El pH nos ayuda a describir si una disolución es...", a:["Ácida, neutra o básica","Dura o blanda","Rápida o lenta"], c:0},
    {q:"La maicena con agua puede ser un...", a:["Fluido no newtoniano","Metal","Gas"], c:0},
    {q:"¿Qué hace un indicador como el extracto de lombarda?", a:["Puede cambiar de color según la muestra","Convierte todo en agua","Mide la masa"], c:0},
    {q:"En cromatografía, los pigmentos pueden separarse porque...", a:["Todos viajan exactamente igual","Se desplazan de manera diferente","Desaparecen"], c:1},
    {q:"La densidad relaciona la cantidad de materia con...", a:["El espacio que ocupa","El color","El sonido"], c:0}
  ]},
  { id:3, title:"TERMINAL 003 · FUERZAS", unlockLevel:4, questions:[
    {q:"Una fuerza puede ser...", a:["Un empuje o un tirón","Solo un sonido","Solo una luz"], c:0},
    {q:"Si un objeto cambia de dirección, una fuerza puede haber...", a:["Cambiado su movimiento","Eliminado su masa","Convertido en agua"], c:0},
    {q:"¿Qué ayuda a mantener un objeto estable?", a:["Su distribución de masa y su apoyo","Su nombre","Su color"], c:0},
    {q:"El rozamiento suele dificultar...", a:["El deslizamiento","La observación","La medición del tiempo"], c:0},
    {q:"¿Qué necesitamos para comparar científicamente dos situaciones?", a:["Observaciones y datos","Una adivinanza","Una respuesta inventada"], c:0}
  ]},
  { id:4, title:"TERMINAL 004 · LUZ", unlockLevel:5, questions:[
    {q:"Una sombra aparece cuando un objeto...", a:["Bloquea parte de la luz","Produce sonido","Se disuelve"], c:0},
    {q:"La reflexión ocurre cuando la luz...", a:["Cambia de dirección al llegar a una superficie","Se convierte en masa","Desaparece siempre"], c:0},
    {q:"¿Qué superficie suele producir un reflejo más definido?", a:["Una superficie lisa","Una superficie muy rugosa","Una pared de tela"], c:0},
    {q:"Un material translúcido...", a:["Deja pasar luz, pero dispersa parte de ella","No deja pasar nada de luz","Siempre permite ver perfectamente"], c:0},
    {q:"¿Qué puede hacer que un objeto parezca diferente?", a:["La iluminación","Su nombre","La hipótesis de otra persona"], c:0}
  ]},
  { id:5, title:"TERMINAL 005 · SONIDO Y MATERIALES", unlockLevel:6, questions:[
    {q:"El sonido está relacionado con...", a:["Vibraciones","La densidad solamente","La sombra"], c:0},
    {q:"Un tono más agudo corresponde a una vibración...", a:["De mayor frecuencia","Siempre más fuerte","Sin movimiento"], c:0},
    {q:"¿Qué material bloquea la luz visible?", a:["Opaco","Transparente","Líquido"], c:0},
    {q:"¿Qué hacemos cuando recogemos datos?", a:["Registramos información de una investigación","Cambiamos las respuestas","Eliminamos las observaciones"], c:0},
    {q:"¿Qué es una buena conclusión?", a:["Una respuesta apoyada en los datos","Lo primero que imaginamos","Una frase sin relación con el experimento"], c:0}
  ]},
  { id:6, title:"TERMINAL 006 · QUÍMICA COTIDIANA", unlockLevel:7, questions:[
    {q:"En una disolución, el soluto es la sustancia que...", a:["Se disuelve","Siempre flota","Produce sonido"], c:0},
    {q:"La evaporación es el paso de...", a:["Líquido a gas","Gas a sólido","Sólido a líquido"], c:0},
    {q:"La condensación ocurre cuando...", a:["Un gas forma líquido","Un sólido se vuelve gas directamente siempre","Una mezcla se separa por color"], c:0},
    {q:"La fusión es el cambio de...", a:["Sólido a líquido","Gas a líquido","Líquido a gas"], c:0},
    {q:"¿Por qué no debemos mezclar productos de limpieza?", a:["Porque algunas combinaciones pueden ser peligrosas","Porque cambian de color","Porque pesan menos"], c:0}
  ]},
  { id:7, title:"TERMINAL 007 · TECNOLOGÍA", unlockLevel:8, questions:[
    {q:"Una imagen digital puede estar formada por...", a:["Píxeles","Átomos visibles","Sombras solamente"], c:0},
    {q:"RGB utiliza principalmente...", a:["Rojo, verde y azul","Rojo, gris y blanco","Radio, gas y batería"], c:0},
    {q:"El GPS utiliza señales de...", a:["Satélites","Cromatografía","Espejos"], c:0},
    {q:"Un acelerómetro es un tipo de...", a:["Sensor","Pigmento","Disolvente"], c:0},
    {q:"Un QR sirve para representar...", a:["Información codificada","Solo colores bonitos","La temperatura"], c:0}
  ]},
  { id:8, title:"TERMINAL 008 · ENERGÍA Y OBSERVACIÓN", unlockLevel:9, questions:[
    {q:"Una batería permite almacenar energía para...", a:["Utilizarla en un dispositivo","Cambiar el color del aire","Crear gravedad"], c:0},
    {q:"El consumo de energía puede aumentar cuando...", a:["Un dispositivo realiza tareas exigentes","El dispositivo está apagado","No hay ninguna actividad"], c:0},
    {q:"Observar durante varias horas puede ayudarnos a estudiar...", a:["Cambios a lo largo del tiempo","Solo colores","Nada medible"], c:0},
    {q:"¿Qué hace científica una observación?", a:["Que intentamos describir lo ocurrido con cuidado","Que siempre sea una opinión","Que nunca pueda cambiar"], c:0},
    {q:"¿Qué es mejor ante una pregunta científica?", a:["Buscar pruebas","Elegir la respuesta que más nos guste","No observar"], c:0}
  ]},
  { id:9, title:"TERMINAL 009 · CONEXIONES CIENTÍFICAS", unlockLevel:10, questions:[
    {q:"Una sombra depende de la posición de...", a:["La fuente de luz, el objeto y la superficie","Solo el color del objeto","Solo el sonido"], c:0},
    {q:"La fricción puede ser útil para...", a:["Caminar y frenar","Hacer desaparecer objetos","Eliminar la masa"], c:0},
    {q:"¿Qué tienen en común un experimento y una investigación?", a:["Ambos pueden generar preguntas, observaciones y datos","Ninguno necesita observar","Ambos deben tener una única respuesta antes de empezar"], c:0},
    {q:"¿Qué concepto conecta el movimiento del teléfono con la física?", a:["Sensores que detectan movimiento","Pigmentos","Disolventes"], c:0},
    {q:"Si una observación contradice tu hipótesis...", a:["La revisas y aprendes de los datos","Borras los datos","Decides que la ciencia está equivocada"], c:0}
  ]},
  { id:10, title:"TERMINAL 010 · ACREDITACIÓN CIENTÍFICA", unlockLevel:10, questions:[
    {q:"¿Qué describe mejor la ciencia?", a:["Una forma de investigar preguntas usando observaciones y pruebas","Una lista de respuestas que nunca cambia","Una colección de trucos"], c:0},
    {q:"¿Cuál de estas es una buena práctica científica?", a:["Registrar también resultados inesperados","Cambiar los datos para que encajen","Evitar repetir observaciones"], c:0},
    {q:"¿Qué une al laboratorio con la vida cotidiana?", a:["La ciencia puede ayudarnos a explicar fenómenos de todos los días","Nada: la ciencia solo ocurre en laboratorios","Solo las sustancias químicas"], c:0},
    {q:"¿Qué palabra describe una posible explicación que se puede poner a prueba?", a:["Hipótesis","Conclusión definitiva","Resultado inventado"], c:0},
    {q:"¿Qué debe hacer un científico cuando encuentra una nueva pregunta?", a:["Investigarla","Ignorarla siempre","Inventar la respuesta"], c:0}
  ]}
];

const RESEARCH_ARCHIVE_TERMS = {};
function registerResearchArchiveTerms() {
  RESEARCH_CATEGORIES.forEach(category => category.items.forEach(item => {
    item.keywords.forEach(key => {
      if (!ARCHIVE_TERMS[key]) {
        const title = key.charAt(0).toUpperCase() + key.slice(1);
        RESEARCH_ARCHIVE_TERMS[key] = true;
        ARCHIVE_TERMS[key] = {
          title,
          definition: researchTermDefinition(key),
          example: `Aparece en la investigación «${item.title}».`,
          related: item.keywords.filter(x => x !== key).slice(0,3)
        };
      }
    });
  }));
}

function researchTermDefinition(key) {
  const definitions = {
    "movimiento":"Cambio de posición de un objeto respecto a un punto de referencia.",
    "distancia":"Separación entre dos posiciones o lugares. Podemos medirla con distintas unidades.",
    "tiempo":"Magnitud que nos permite ordenar acontecimientos y comparar cuánto duran los procesos.",
    "velocidad":"Indica qué distancia recorre algo durante un determinado tiempo.",
    "fuerza":"Empuje o tirón capaz de cambiar el movimiento o la forma de un objeto.",
    "empuje":"Fuerza que aplicamos alejando un objeto de nosotros o en una dirección determinada.",
    "tirón":"Fuerza que aplicamos atrayendo un objeto hacia nosotros o hacia otro punto.",
    "deformación":"Cambio de forma que puede producirse cuando actúa una fuerza sobre un material.",
    "gravedad":"Atracción que hace que los objetos sean atraídos hacia la Tierra y hacia otros cuerpos con masa.",
    "caída":"Movimiento de un objeto hacia abajo debido principalmente a la gravedad cuando está cerca de la Tierra.",
    "aire":"Mezcla de gases que forma la atmósfera y que puede influir en el movimiento de objetos.",
    "resistencia del aire":"Efecto que dificulta el movimiento de un objeto a través del aire.",
    "equilibrio":"Situación en la que las fuerzas que actúan sobre un sistema se compensan de manera que permanece estable.",
    "estabilidad":"Capacidad de un objeto o sistema para mantener su posición sin volcar o cambiar fácilmente.",
    "peso":"Fuerza con la que la gravedad atrae a un objeto.",
    "centro de gravedad":"Punto que representa de forma sencilla dónde podemos considerar concentrado el efecto del peso de un objeto.",
    "rozamiento":"Fuerza que se opone al deslizamiento entre superficies que están en contacto.",
    "fricción":"Otro nombre habitual para el rozamiento entre superficies.",
    "superficie":"Zona exterior de un objeto o material. Sus características pueden influir en el rozamiento y la reflexión.",
    "deslizamiento":"Movimiento en el que una superficie se desplaza respecto a otra que está en contacto con ella.",
    "luz":"Forma de energía que puede propagarse y que nos permite ver cuando llega a nuestros ojos.",
    "sombra":"Zona donde llega menos luz porque un objeto ha bloqueado parte de ella.",
    "fuente de luz":"Objeto o fenómeno que emite luz, como el Sol o una lámpara.",
    "dirección":"Orientación hacia la que se desplaza algo o desde la que procede una señal o una luz.",
    "reflexión":"Cambio de dirección de una onda o de la luz al encontrarse con una superficie.",
    "espejo":"Superficie diseñada para producir una reflexión clara de la luz.",
    "sonido":"Fenómeno producido por vibraciones que se propagan a través de un medio.",
    "vibración":"Movimiento repetido de ida y vuelta alrededor de una posición.",
    "tono":"Característica del sonido que nos permite distinguir sonidos más agudos de otros más graves.",
    "intensidad":"Cantidad relacionada con lo fuerte o suave que percibimos un sonido.",
    "color":"Percepción producida por la forma en que la luz interactúa con los materiales y llega a nuestros ojos.",
    "percepción":"Forma en que nuestro sistema sensorial interpreta la información que recibe.",
    "transparente":"Material que deja pasar mucha luz y permite ver a través de él.",
    "translúcido":"Material que deja pasar luz, pero la dispersa y no permite ver con claridad a través de él.",
    "opaco":"Material que bloquea la luz visible y no permite ver a través de él.",
    "disolución":"Mezcla uniforme en la que una sustancia queda distribuida dentro de otra.",
    "soluto":"Sustancia que se disuelve en una disolución.",
    "disolvente":"Sustancia que disuelve al soluto y suele estar en mayor cantidad.",
    "mezcla":"Conjunto de dos o más sustancias que están juntas sin formar necesariamente una sustancia nueva.",
    "evaporación":"Paso de una sustancia desde el estado líquido al estado gaseoso.",
    "condensación":"Paso de una sustancia desde el estado gaseoso al líquido.",
    "vapor de agua":"Agua en estado gaseoso, invisible como gas aunque el vapor caliente pueda transportar pequeñas gotas visibles.",
    "cambio de estado":"Transformación de una sustancia entre estados como sólido, líquido y gas.",
    "fusión":"Cambio de estado de sólido a líquido.",
    "sólido":"Estado de la materia con forma propia y volumen definido.",
    "líquido":"Estado de la materia que mantiene aproximadamente su volumen pero adopta la forma del recipiente.",
    "jabón":"Sustancia que ayuda a retirar suciedad y grasa al facilitar su interacción con el agua.",
    "grasa":"Tipo de sustancia que no se mezcla fácilmente con el agua y que puede quedar adherida a superficies.",
    "agua":"Sustancia fundamental para la vida que puede encontrarse como sólido, líquido o gas.",
    "limpieza":"Proceso de retirar suciedad, grasa u otras sustancias de una superficie.",
    "cambio de color":"Variación observable en el color de un material o mezcla; puede tener muchas causas diferentes.",
    "evidencia":"Dato u observación que ayuda a apoyar o cuestionar una explicación científica.",
    "cambio físico":"Cambio en el que la materia puede modificar su aspecto o estado sin formar necesariamente sustancias nuevas.",
    "píxel":"Elemento diminuto que forma parte de una imagen digital representada en una pantalla o archivo.",
    "RGB":"Sistema que combina luz roja, verde y azul para representar muchos colores en dispositivos digitales.",
    "imagen digital":"Representación de una imagen mediante información que un dispositivo puede almacenar y procesar.",
    "resolución":"Cantidad de detalle que puede representar una imagen o pantalla, relacionada con el número de elementos que la forman.",
    "GPS":"Sistema de posicionamiento que permite estimar una ubicación usando señales de satélites y cálculos.",
    "satélite":"Objeto que se encuentra en órbita alrededor de otro cuerpo. Algunos sistemas de navegación utilizan satélites artificiales.",
    "señal":"Información que se transmite de un lugar o dispositivo a otro mediante algún medio.",
    "posición":"Lugar que ocupa un objeto respecto a un sistema de referencia.",
    "sensor":"Dispositivo que detecta una magnitud o cambio del entorno y proporciona información a un sistema.",
    "orientación":"Dirección o posición de un objeto respecto a un sistema de referencia.",
    "acelerómetro":"Sensor capaz de detectar cambios relacionados con la aceleración y el movimiento de un dispositivo.",
    "QR":"Código visual formado por patrones que permiten representar información y leerla con un dispositivo.",
    "datos":"Información recogida durante una investigación, como medidas, tiempos, observaciones o resultados.",
    "codificación":"Forma de representar información mediante reglas o símbolos para que pueda almacenarse o transmitirse.",
    "información":"Datos organizados de manera que pueden ser interpretados o utilizados.",
    "batería":"Dispositivo que almacena energía y puede suministrarla a un circuito o aparato.",
    "energía":"Capacidad de producir cambios o realizar transformaciones. Los dispositivos necesitan energía para funcionar.",
    "electricidad":"Fenómenos relacionados con la presencia y movimiento de cargas eléctricas.",
    "consumo de energía":"Cantidad de energía que utiliza un dispositivo o sistema durante su funcionamiento."
  };
  return definitions[key] || "Concepto científico que aparece en una de las investigaciones del laboratorio. Esta ficha se irá ampliando a medida que avance el programa.";
}
registerResearchArchiveTerms();

function allResearchItems() {
  return RESEARCH_CATEGORIES.flatMap(category => category.items);
}
function findResearch(id) { return allResearchItems().find(item => item.id === id); }
function categoryForResearch(id) { return RESEARCH_CATEGORIES.find(c => c.items.some(i => i.id === id)); }
function isResearchUnlocked(item, category) {
  const index = category.items.findIndex(i => i.id === item.id);
  if (index === 0) return true;
  return Boolean(state.completedInvestigations[category.items[index - 1].id]);
}
function researchCompleted(id) { return Boolean(state.completedInvestigations[id]); }
function completedResearchCount() { return Object.keys(state.completedInvestigations).filter(id => state.completedInvestigations[id]).length; }

function renderResearch() {
  const panel = document.querySelector('[data-panel="research"]');
  if (!panel) return;
  panel.innerHTML = `
    <button class="back-button">← REGRESAR AL LABORATORIO</button>
    <div class="section-header">
      <span class="section-kicker">CENTRO DE INVESTIGACIONES</span>
      <h2>INVESTIGACIONES DE CAMPO</h2>
      <p>Cuatro áreas de investigación. Puedes elegir por cuál empezar, pero dentro de cada área tendrás que avanzar en orden.</p>
    </div>
    <div class="research-note"><strong>📓 CUADERNO DE CAMPO OBLIGATORIO</strong><span>Lee la misión, realiza la observación, anota tus datos y vuelve aquí para enviar el informe.</span></div>
    <div class="research-categories">
      ${RESEARCH_CATEGORIES.map(category => {
        const done = category.items.filter(item => researchCompleted(item.id)).length;
        return `<details class="research-category" open>
          <summary><span class="research-category-icon">${category.icon}</span><span><strong>${category.title}</strong><small>${done}/${category.items.length} investigaciones completadas · ${category.intro}</small></span><b>▾</b></summary>
          <div class="research-list">
            ${category.items.map(item => {
              const unlocked = isResearchUnlocked(item, category);
              const completed = researchCompleted(item.id);
              return `<article class="research-card ${unlocked ? "unlocked" : "locked"} ${completed ? "completed" : ""}">
                <div class="research-card-top"><span>INV. ${item.number}</span><em>${completed ? "COMPLETADA" : unlocked ? "DISPONIBLE" : "CLASIFICADA"}</em></div>
                <h3>${item.icon} ${item.title}</h3>
                <p>${item.description}</p>
                <div class="research-meta"><span>${item.type}</span><span>⏱ ${item.duration}</span><span>+${item.xp} XP</span></div>
                ${unlocked ? `<button class="primary-button open-research" data-research-id="${item.id}">${completed ? "CONSULTAR INVESTIGACIÓN" : "ABRIR MISIÓN"}</button>` : `<div class="research-lock">🔒 COMPLETA LA INVESTIGACIÓN ANTERIOR DE ESTA ÁREA</div>`}
              </article>`;
            }).join("")}
          </div>
        </details>`;
      }).join("")}
    </div>`;
  panel.querySelector(".back-button").addEventListener("click", closePanel);
  panel.querySelectorAll(".open-research").forEach(btn => btn.addEventListener("click", () => openResearch(btn.dataset.researchId)));
}

function openResearch(id) {
  const item = findResearch(id);
  const category = categoryForResearch(id);
  if (!item || !category || !isResearchUnlocked(item, category)) {
    showToast("COMPLETA LA INVESTIGACIÓN ANTERIOR DE ESTA ÁREA.");
    return;
  }
  const panel = document.querySelector('[data-panel="research"]');
  panel.innerHTML = `
    <button class="back-button" id="close-research-detail">← VOLVER A INVESTIGACIONES</button>
    <div class="research-detail-card">
      <div class="research-card-top"><span>INVESTIGACIÓN ${item.number}</span><em>${item.type}</em></div>
      <h2>${item.icon} ${item.title}</h2>
      <p class="research-intro">${item.description}</p>
      <div class="research-block"><h4>🔎 MISIÓN</h4><ol>${item.protocol.map(x=>`<li>${x}</li>`).join("")}</ol></div>
      <div class="research-block notebook"><h4>📓 CUADERNO DE CAMPO</h4><p>Cuando termines la observación, vuelve a tu Cuaderno de Campo y registra tus datos. Estas son las pistas que necesitas recoger:</p><ul>${item.notebook.map(x=>`<li>${x}</li>`).join("")}</ul><p><strong>No hace falta que tus resultados sean perfectos.</strong> Lo importante es que sean tuyos, que estén anotados y que puedas explicar qué observaste.</p></div>
      <div class="research-block"><h4>📡 ENVÍO DEL INFORME</h4><p>¿Ya has realizado la misión y escrito tus observaciones en el Cuaderno de Campo?</p><button class="complete-button" id="complete-research">${researchCompleted(id) ? "INVESTIGACIÓN YA REGISTRADA" : `MARCAR INVESTIGACIÓN COMO COMPLETADA · +${item.xp} XP`}</button></div>
      ${researchCompleted(id) ? `<div class="research-result"><h4>🧠 INFORME CIENTÍFICO RECIBIDO</h4><p>${item.explanation}</p><div class="research-keywords"><strong>PALABRAS AÑADIDAS AL ARCHIVO</strong>${item.keywords.map(k=>`<button class="keyword-link" data-term="${k}">${k}</button>`).join("")}</div></div>` : `<div class="research-result locked-result"><h4>🔒 EXPLICACIÓN CLASIFICADA</h4><p>La explicación científica detallada aparecerá después de enviar tu informe.</p></div>`}
    </div>`;
  panel.querySelector("#close-research-detail").addEventListener("click", renderResearch);
  panel.querySelectorAll(".keyword-link").forEach(el => el.addEventListener("click", () => openArchiveTerm(el.dataset.term, "investigaciones")));
  const button = panel.querySelector("#complete-research");
  if (button && !researchCompleted(id)) button.addEventListener("click", () => completeResearch(id));
}

function completeResearch(id) {
  if (!state.user || state.user.role !== "scientist" || normalizeUsername(usernameInput.value) !== "SCI-009-001") { showAccessDenied(); return; }
  const item = findResearch(id);
  const category = categoryForResearch(id);
  if (!item || !category || !isResearchUnlocked(item, category)) { showToast("INVESTIGACIÓN BLOQUEADA."); return; }
  if (researchCompleted(id)) { showToast("ESTA INVESTIGACIÓN YA ESTÁ REGISTRADA."); return; }
  state.completedInvestigations[id] = true;
  localStorage.setItem("lab-investigations", JSON.stringify(state.completedInvestigations));
  awardXP(item.xp, `INVESTIGACIÓN ${item.number}`);
  openResearch(id);
}

function renderTests() {
  const panel = document.querySelector('[data-panel="tests"]');
  if (!panel) return;
  panel.innerHTML = `
    <button class="back-button">← REGRESAR AL LABORATORIO</button>
    <div class="section-header">
      <span class="section-kicker">TERMINAL DE EVALUACIÓN</span>
      <h2>PRUEBAS DE ACREDITACIÓN</h2>
      <p>Un terminal se desbloquea por cada nivel. Cada prueba tiene cinco preguntas y mezcla experimentos, investigaciones y Archivo.</p>
    </div>
    <div class="terminal-banner"><span>🖥️</span><div><strong>PROTOCOLO DE EVALUACIÓN</strong><small>Necesitas 4 de 5 respuestas correctas para aprobar. Si no lo consigues, puedes revisar el Archivo y volver a intentarlo.</small></div></div>
    <div class="test-list">${TESTS.map(test => {
      const unlocked = levelForXP(state.xp) >= test.unlockLevel;
      const completed = state.completedTests.includes(test.id);
      return `<article class="test-card ${unlocked ? "unlocked" : "locked"} ${completed ? "completed" : ""}">
        <div class="research-card-top"><span>TEST ${String(test.id).padStart(3,"0")}</span><em>${completed ? "APROBADO" : unlocked ? "DESBLOQUEADO" : `BLOQUEADO · NIVEL ${test.unlockLevel}`}</em></div>
        <h3>🖥️ ${test.title}</h3>
        <p>${completed ? "Acreditación registrada en el sistema." : unlocked ? "Cinco preguntas. Cuatro aciertos para superar la prueba." : "Alcanza el nivel indicado para acceder a este terminal."}</p>
        ${unlocked ? `<button class="primary-button open-test" data-test-id="${test.id}">${completed ? "CONSULTAR RESULTADO" : "INICIAR EVALUACIÓN"}</button>` : `<div class="research-lock">🔒 TERMINAL CLASIFICADO</div>`}
      </article>`;
    }).join("")}</div>`;
  panel.querySelector(".back-button").addEventListener("click", closePanel);
  panel.querySelectorAll(".open-test").forEach(btn => btn.addEventListener("click", () => openTest(Number(btn.dataset.testId))));
}

function openTest(id) {
  const test = TESTS.find(t => t.id === id);
  if (!test || levelForXP(state.xp) < test.unlockLevel) { showToast("ALCANZA EL NIVEL NECESARIO PARA DESBLOQUEAR ESTE TERMINAL."); return; }
  if (id > 1 && !state.completedTests.includes(id-1)) { showToast("DEBES SUPERAR EL TERMINAL ANTERIOR."); return; }
  const panel = document.querySelector('[data-panel="tests"]');
  const completed = state.completedTests.includes(id);
  panel.innerHTML = `
    <button class="back-button" id="close-test-detail">← VOLVER A TERMINALES</button>
    <div class="test-detail-card">
      <div class="terminal-header"><span>TERMINAL ${String(id).padStart(3,"0")}</span><b>ACCESO NIVEL ${test.unlockLevel}</b></div>
      <h2>${test.title}</h2>
      <p class="test-instruction">${completed ? "Esta evaluación ya ha sido superada. Puedes consultar las preguntas y tus respuestas." : "Selecciona una respuesta por pregunta. No hay penalización por fallar: si necesitas revisar, el Archivo sigue disponible."}</p>
      <form id="test-form">${test.questions.map((q,i)=>`<fieldset class="test-question"><legend>${i+1}. ${q.q}</legend>${q.a.map((answer,j)=>`<label class="test-option"><input type="radio" name="q${i}" value="${j}" ${completed ? "disabled" : ""}> <span>${answer}</span></label>`).join("")}</fieldset>`).join("")}
      ${completed ? `<div class="test-result success-result"><strong>✓ EVALUACIÓN SUPERADA</strong><span>Este terminal ya está registrado en tu expediente científico.</span></div>` : `<button class="primary-button" type="submit">ENVIAR RESPUESTAS</button><div id="test-feedback" class="test-feedback" aria-live="polite"></div>`}</form>
    </div>`;
  panel.querySelector("#close-test-detail").addEventListener("click", renderTests);
  if (!completed) panel.querySelector("#test-form").addEventListener("submit", e => { e.preventDefault(); submitTest(id); });
}

function submitTest(id) {
  const test = TESTS.find(t => t.id === id);
  if (!test) return;
  const form = document.querySelector("#test-form");
  let score = 0;
  let answered = 0;
  test.questions.forEach((q,i) => {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if (selected) { answered++; if (Number(selected.value) === q.c) score++; }
  });
  const feedback = document.querySelector("#test-feedback");
  if (answered < test.questions.length) {
    feedback.className = "test-feedback error-feedback";
    feedback.textContent = "FALTAN RESPUESTAS. EL TERMINAL NECESITA LAS 5 RESPUESTAS.";
    return;
  }
  if (score >= 4) {
    state.completedTests.push(id);
    localStorage.setItem("lab-tests", JSON.stringify(state.completedTests));
    awardXP(25, `TERMINAL ${String(id).padStart(3,"0")}`);
    feedback.className = "test-feedback success-feedback";
    feedback.innerHTML = `<strong>✓ EVALUACIÓN SUPERADA · ${score}/5</strong><span>Datos de acreditación registrados. +25 XP</span>`;
    setTimeout(() => renderTests(), 1100);
  } else {
    feedback.className = "test-feedback error-feedback";
    feedback.innerHTML = `<strong>⚠ EVALUACIÓN NO SUPERADA · ${score}/5</strong><span>Revisa el Archivo Científico y vuelve a intentarlo. Necesitas al menos 4 respuestas correctas.</span>`;
  }
}

function awardXP(amount, source) {
  if (!state.user || state.user.role !== "scientist") return;
  const previousLevel = levelForXP(state.xp);
  state.xp += Number(amount) || 0;
  localStorage.setItem("lab-xp", String(state.xp));
  updateProgress();
  const newLevel = levelForXP(state.xp);
  showToast(`${source} · +${amount} XP`);
  if (newLevel > previousLevel) setTimeout(() => showLevelUp(newLevel), 650);
}

function loadProgress() {
  state.xp = Number(localStorage.getItem("lab-xp") || 0);
  try { state.completedExperiments = JSON.parse(localStorage.getItem("lab-completed") || "[]"); } catch { state.completedExperiments = []; }
  try { state.completedInvestigations = JSON.parse(localStorage.getItem("lab-investigations") || "{}"); } catch { state.completedInvestigations = {}; }
  try { state.completedTests = JSON.parse(localStorage.getItem("lab-tests") || "[]"); } catch { state.completedTests = []; }
  updateProgress();
}

function completeExperiment(experimentId) {
  if (!state.user || state.user.role !== "scientist" || normalizeUsername(usernameInput.value) !== "SCI-009-001") { showAccessDenied(); return; }
  const experiment = EXPERIMENTS.find(item => item.id === experimentId);
  if (!experiment || state.completedExperiments.includes(experimentId)) { showToast("ESTE EXPERIMENTO YA ESTÁ REGISTRADO."); return; }
  const previousLevel = levelForXP(state.xp);
  state.completedExperiments.push(experimentId);
  state.xp += XP_PER_LEVEL;
  localStorage.setItem("lab-xp", String(state.xp));
  localStorage.setItem("lab-completed", JSON.stringify(state.completedExperiments));
  updateProgress();
  const newLevel = levelForXP(state.xp);
  renderExperiments();
  showToast(`DATOS RECIBIDOS · EXPEDIENTE ${String(experimentId).padStart(3,"0")} · +${XP_PER_LEVEL} XP`);
  if (newLevel > previousLevel) setTimeout(() => showLevelUp(newLevel), 650);
}

function renderInfo() {
  const tabs = document.querySelector("#info-tabs");
  const content = document.querySelector("#info-content");
  if (!tabs || !content) return;
  tabs.innerHTML = "";
  INFO_TABS.forEach((tab,index) => {
    const button = document.createElement("button");
    button.className = `folder-tab ${index===0?"active":""}`;
    button.textContent = tab.label;
    button.addEventListener("click", () => {
      tabs.querySelectorAll(".folder-tab").forEach(x=>x.classList.remove("active"));
      button.classList.add("active");
      renderArchiveTab(tab.id);
    });
    tabs.appendChild(button);
  });
  renderArchiveTab("experimentos");
}

const EXPERIMENT_ARCHIVE_KEYS = ["hipótesis","observación","reacción química","gas","dióxido de carbono","acidez","indicador","pH","ácido","base","neutro","fluido","viscosidad","fuerza","fluido no newtoniano","pigmento","mezcla","separación","cromatografía","densidad","masa","volumen","miscibilidad"];
const GENERAL_ARCHIVE_KEYS = Object.keys(ARCHIVE_TERMS).filter(k => !EXPERIMENT_ARCHIVE_KEYS.includes(k) && !RESEARCH_ARCHIVE_TERMS[k]);

function renderArchiveTab(tabId) {
  const content=document.querySelector("#info-content");
  if(!content) return;
  if(tabId === "experimentos") {
    content.innerHTML=`<h3>Archivo · Experimentos</h3><p>Palabras clave extraídas de los cinco expedientes de laboratorio.</p><div class="archive-term-grid">${EXPERIMENT_ARCHIVE_KEYS.map(k=>archiveButton(k)).join("")}</div>`;
  } else if(tabId === "investigaciones") {
    const unlockedItems=allResearchItems().filter(item=>researchCompleted(item.id));
    const keys=[...new Set(unlockedItems.flatMap(i=>i.keywords))];
    content.innerHTML=`<h3>Archivo · Investigaciones</h3><p>Cada investigación completada añade nuevos conceptos a esta carpeta.</p>${keys.length?`<div class="archive-unlocked-note">🔓 ${keys.length} conceptos desclasificados</div><div class="archive-term-grid">${keys.map(k=>archiveButton(k)).join("")}</div>`:`<div class="archive-empty"><strong>ARCHIVO EN ESPERA</strong><p>Completa una investigación para recibir las primeras fichas científicas.</p></div>`}`;
  } else {
    content.innerHTML=`<h3>Archivo · Conocimiento general</h3><p>Conceptos de apoyo para comprender mejor el laboratorio y el método científico.</p><div class="archive-term-grid">${GENERAL_ARCHIVE_KEYS.map(k=>archiveButton(k)).join("")}</div>`;
  }
  content.querySelectorAll("[data-term]").forEach(el=>el.addEventListener("click",()=>openArchiveTerm(el.dataset.term, tabId)));
}
function archiveButton(key){ return `<button class="archive-term-button keyword-link" data-term="${key}">${ARCHIVE_TERMS[key]?.title || key}</button>`; }

function openArchiveTerm(term, sourceTab = "experimentos") {
  const panel = document.querySelector('[data-panel="info"]');
  if (!panel) return;
  openPanel("info");
  const tabs=document.querySelectorAll("#info-tabs .folder-tab");
  const activeTab = ["experimentos","investigaciones","general"].includes(sourceTab) ? sourceTab : "experimentos";
  tabs.forEach((btn,index)=>btn.classList.toggle("active",btn.textContent.toLowerCase().includes(activeTab === "experimentos" ? "experimentos" : activeTab === "investigaciones" ? "investigaciones" : "general")));
  renderArchiveTab(activeTab);
  const content=document.querySelector("#info-content");
  const key=String(term).toLowerCase();
  const entry=ARCHIVE_TERMS[key];
  if(!entry){ content.innerHTML=`<div class="archive-ficha"><span class="archive-stamp">FICHA EN INVESTIGACIÓN</span><h3>${String(term).toUpperCase()}</h3><p>Esta ficha todavía está siendo investigada.</p></div>`; return; }
  const related=(entry.related||[]).filter(x=>ARCHIVE_TERMS[x]).map(x=>`<button class="archive-related keyword-link" data-term="${x}">${ARCHIVE_TERMS[x].title}</button>`).join(" ");
  content.innerHTML=`<button class="back-button archive-back-button">← VOLVER AL ARCHIVO</button><div class="archive-ficha"><span class="archive-stamp">FICHA DESCLASIFICADA</span><h3>${entry.title.toUpperCase()}</h3><p class="archive-definition">${entry.definition}</p><div class="archive-example"><strong>🔎 EJEMPLO</strong><p>${entry.example}</p></div>${related?`<div class="archive-related"><strong>CONCEPTOS RELACIONADOS</strong><div>${related}</div></div>`:""}</div>`;
  content.querySelector(".archive-back-button")?.addEventListener("click",()=>renderArchiveTab(activeTab));
  content.querySelectorAll("[data-term]").forEach(el=>el.addEventListener("click",()=>openArchiveTerm(el.dataset.term, activeTab)));
}

function openPanel(section) {
  if (!state.user) return;
  if (state.user.role === "supervisor" && section !== "experiments") { triggerDenied(); return; }
  state.currentPanel=section;
  sectionLayer.classList.add("is-open");
  sectionLayer.setAttribute("aria-hidden","false");
  document.querySelectorAll(".section-panel").forEach(panel=>panel.classList.toggle("active",panel.dataset.panel===section));
  if(section==="experiments") renderExperiments();
  if(section==="info") renderInfo();
  if(section==="research") renderResearch();
  if(section==="tests") renderTests();
  updateProgress();
  updateCompletionPermission();
}

function resetScientificProgress() {
  if (!window.confirm("¿Seguro que quieres reiniciar TODO el progreso científico? Se borrarán XP, expedientes, investigaciones y evaluaciones guardados en este navegador.")) return;
  ["lab-xp","lab-completed","lab-investigations","lab-tests"].forEach(key=>localStorage.removeItem(key));
  ["scientistXP","completedExperiments","completedInvestigations","completedTests","archiveProgress"].forEach(key=>localStorage.removeItem(key));
  window.location.reload();
}
