
var CoresLevel = [];
var test = 0;
var clicavel = true;
var iniciado = false;
var ganhou = false;
var level = 0
localStorage.setItem(CoresLevel, clicavel, iniciado, level);

const MusicErro = new Audio('../sons/erro.mp3');
const MusicBongo1 = new Audio('../sons/bongo_1.wav');
const MusicBongo2 = new Audio('../sons/bongo_2.wav');
const MusicBongo3 = new Audio('../sons/bongo_3.wav');
const MusicBongo4 = new Audio('../sons/bongo_4.wav');


async function procura(cores) {

    if (clicavel === true) {
        if (iniciado === true) {
            eval(cores)
            console.log("teste", cores)

            if (cores === CoresLevel[test]) {
                console.log('Certo')
                test += 1
                ganhou = true
                if (test === CoresLevel.length) {
                    test = 0
                    leves()
                }

            } else if (cores !== CoresLevel[test]) {
                console.log('Game Over')
                ganhou = false
                MusicErro.play()
                alert("Game Over")
                history.go(0);


            }

        } else if (iniciado === false) {
            eval(cores)
            console.log("b", cores)
        }
    }
    await delay(2);
    apagar()
}

function iniciar() {

    const btnlevel = document.getElementsByName('btnlevel');

    if (iniciado === true) {
        history.go(0);

    }

    if (btnlevel[0].checked === true) {
        console.log('level 1')
        level = 1
        window.level_one()
    } else if (btnlevel[1].checked === true) {
        console.log('level 2')
        level = 2
        window.level_two();

    } else if (btnlevel[2].checked === true) {
        console.log('level 3')
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
function levelganho(){
    console.log("Fim do jogo")
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
    console.log('vermelho 100')
    vm.classList.remove('bg-opacity-75');
    vm.classList.add('bg-opacity-100');
    vm.classList.add('border');
    MusicBongo1.play()

}
//-----------------------------Verde----------------------------------------
function Verde100() {
    const vd = document.getElementById('vd');
    console.log('verde 100')
    vd.classList.remove('bg-opacity-75');
    vd.classList.add('bg-opacity-100');
    vd.classList.add('border');
    MusicBongo2.play()

}

//-----------------------Azul---------------------------------
function azul100() {
    const az = document.getElementById('az');
    console.log('Azul 100')
    az.classList.remove('bg-opacity-75');
    az.classList.add('bg-opacity-100');
    az.classList.add('border');
    MusicBongo3.play()

}

//------------------------Amarelo----------------------------------
function amarelo100() {
    const am = document.getElementById('am');
    console.log('Amarelo 100')
    am.classList.remove('bg-opacity-75');
    am.classList.add('bg-opacity-100');
    am.classList.add('border');
    MusicBongo4.play()

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
