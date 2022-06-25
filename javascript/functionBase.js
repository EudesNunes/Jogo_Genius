
var CoresLevel = [];
localStorage.setItem('CoresLevel', CoresLevel);

var test = 0;

var clicavel = true;
localStorage.setItem('clicavel', clicavel);

var iniciado = false;
localStorage.setItem('iniciado', iniciado);

var ganhou = false;

var level = 0
localStorage.setItem('level', level);

var nivelSel = localStorage.getItem("nivelSelecionado");

const MusicErro = new Audio('../sons/erro.mp3');
const MusicVermelho = new Audio('../sons/bongo_1.wav');
const MusicVerde = new Audio('../sons/bongo_2.wav');
const MusicAzul = new Audio('../sons/bongo_3.wav');
const MusicAmarelo = new Audio('../sons/bongo_4.wav');
const MusicGanhou = new Audio('../sons/ganhou.mp3');
const MusicGamerOver = new Audio('../sons/gameover.mp3');




async function procura(cores) {

  
    if (clicavel === true) {
        eval(cores)
        console.log(cores)

        if (iniciado === true) {

            if (cores === CoresLevel[test]) {
                test += 1
                ganhou = true
                if (test === CoresLevel.length) {
                    test = 0
                    leves()
                }

            } else if (cores !== CoresLevel[test]) {
                ganhou = false
                MusicErro.play()
                alert("Game Over")
                history.go(0);
            }

        }
    }
    await delay(1);
    apagar()
}

function iniciar() {

    const btnlevel = document.getElementsByName('btnlevel');

    if (iniciado === true) {
        history.go(0);
    }

    if (nivelSel === 'btnEasy') {
        console.log('level Easy')
        level = 1
        window.level_one()
    } else if (nivelSel === 'btnMedium') {
        console.log('level Medium')
        level = 2
        window.level_two();

    } else if (nivelSel === 'btnHardcore') {
        console.log('level Hardcore')
        level = 3
        level_three()

    }

}
function leves() {
    CoresLevel = []

    if (level === 1) {
        console.log('level 1')
        window.level_one();

    } else if (level === 2) {
        console.log('level 2')
        window.level_two();

    } else if (level === 3) {
        console.log('level 3')
        level_three()
    }
}
function levelganho() {
    console.log("Fim do jogo")
    MusicGanhou.play()
    alert("Você Ganhou!!!!")
    history.go(0);
}


//=============================================================Cores piscando========================================================

//----------------------------Selecionar cores Aleatorias--------------------------------------------

function aleatorio() {
    let nomes = ['none', 'Vermelho100()', 'azul100()', 'Verde100()', 'amarelo100()'];
    let name = nomes[Math.ceil(Math.random() * (nomes.length - 1))];
    return name
}
//----------------------------Vermelho--------------------------------------------
function Vermelho100() {
    const vm = document.getElementById('vm');
    vm.classList.remove('bg-opacity-75');
    vm.classList.add('bg-opacity-100');
    vm.classList.add('border');
    MusicVermelho.play()

}
//-----------------------------Verde----------------------------------------
function Verde100() {
    const vd = document.getElementById('vd');
    vd.classList.remove('bg-opacity-75');
    vd.classList.add('bg-opacity-100');
    vd.classList.add('border');
    MusicVerde.play()

}

//-----------------------Azul---------------------------------
function azul100() {
    const az = document.getElementById('az');
    az.classList.remove('bg-opacity-75');
    az.classList.add('bg-opacity-100');
    az.classList.add('border');
    MusicAzul.play()

}

//------------------------Amarelo----------------------------------
function amarelo100() {
    const am = document.getElementById('am');
    am.classList.remove('bg-opacity-75');
    am.classList.add('bg-opacity-100');
    am.classList.add('border');
    MusicAmarelo.play()

}
//------------------------Voltar a opacidade para 75----------------------------------

function apagar() {
    const vd = document.getElementById('vd');
    const vm = document.getElementById('vm');
    const am = document.getElementById('am');
    const az = document.getElementById('az');
    vd.classList.remove('bg-opacity-100');
    vd.classList.add('bg-opacity-75');
    vm.classList.remove('bg-opacity-100');
    vm.classList.add('bg-opacity-75');
    am.classList.remove('bg-opacity-100');
    am.classList.add('bg-opacity-75');
    az.classList.remove('bg-opacity-100');
    az.classList.add('bg-opacity-75');
    vd.classList.remove('border');
    vm.classList.remove('border');
    am.classList.remove('border');
    az.classList.remove('border');

}

//-----------------------temporizador-------------------------------------------

function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 200);
    });
}
