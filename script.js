const readline = require('readline');

// Interface para receber a entrada do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPartidasRankeadas() {
    let nivel = '';
    let saldoVitorias = 0;

    // Função para calcular o nível com base no saldo de vitórias
    function calcularNivel(saldoVitorias) {
        if (saldoVitorias < 10) {
            nivel = "Ferro";
        } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            nivel = "Bronze";
        } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            nivel = "Prata";
        } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            nivel = "Ouro";
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            nivel = "Diamante";
        } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            nivel = "Lendário";
        } else {
            nivel = "Imortal";
        }
    }

    // Função para solicitar a entrada do usuário
    function receberPartidas() {
        rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
            rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
                // Converte as entradas para números inteiros e calcula o saldo de vitórias
                saldoVitorias = parseInt(vitorias) - parseInt(derrotas);

                // Determina o nível com base no saldo de vitórias
                calcularNivel(saldoVitorias);

                // Exibe a mensagem final
                console.log(`O Herói tem o saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`);

                // Fecha a interface de leitura
                rl.close();
            });
        });
    }

    // Chama a função para receber partidas
    receberPartidas();
}

// Chamada da função principal
calcularPartidasRankeadas();