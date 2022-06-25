

//---------------------------------------Variaveis Globais------------------------------------------------------------
var CoresLevel = localStorage.getItem("CoresLevel");
var clicavel = localStorage.getItem("clicavel");
var iniciado = localStorage.getItem("iniciado");
var level = localStorage.getItem("level");
//-----------------------------------Level 1----------------------------------------------------
var leves_one = 4
var qtd_cores_one = 2
var tempo_one = 7

async function level_one() {
  CoresLevel = []
  iniciado = true
  if (leves_one === 0) {
    window.levelganho()
  }
  while (leves_one > 0) {
    clicavel = false

    for (let i1 = 0; i1 < qtd_cores_one; i1++) {
      let name = window.aleatorio()
      await window.delay(tempo_one);
      window.eval(name);
      CoresLevel.push(name)
      await window.delay(tempo_one);
      window.apagar()

    }
    leves_one -= 1
    qtd_cores_one += 1
    if (tempo_two > 2) {
      tempo_two -= 1
    }
    console.log(leves_one)
    console.log(CoresLevel)
    clicavel = true;
    break

  };
}

//-----------------------------------Level 2----------------------------------------------------

var leves_two = 6
var qtd_cores_two = 2
var tempo_two = 7

async function level_two() {
  CoresLevel = []
  iniciado = true
  if (leves_two === 0) {
    window.levelganho()
  }
  while (leves_two > 0) {
    clicavel = false

    for (let i1 = 0; i1 < qtd_cores_two; i1++) {
      let name = window.aleatorio()
      await window.delay(tempo_two);
      window.eval(name);
      CoresLevel.push(name)
      await window.delay(tempo_two);
      window.apagar()

    }
    leves_two -= 1
    qtd_cores_two += 2
    if (tempo_two > 3) {
      tempo_two -= 2
    }
    console.log(leves_two)
    console.log(CoresLevel)
    clicavel = true;
    break

  };
}
//-----------------------------------Level 3----------------------------------------------------

var leves_three = 8
var qtd_cores_three = 4
var tempo_three = 5

async function level_three() {
  CoresLevel = []
  iniciado = true
  if (leves_three === 0) {
    window.levelganho()
  }
  while (leves_three > 0) {
    clicavel = false

    for (let i1 = 0; i1 < qtd_cores_three; i1++) {
      let name = window.aleatorio()
      await window.delay(tempo_three);
      window.eval(name);
      CoresLevel.push(name)
      await window.delay(tempo_three);
      window.apagar()

    }
    leves_three -= 1
    qtd_cores_three += 2
    if (tempo_three > 2) {
      tempo_three -= 2
    }
    console.log(leves_three)
    console.log(CoresLevel)
    clicavel = true;
    break

  };
}