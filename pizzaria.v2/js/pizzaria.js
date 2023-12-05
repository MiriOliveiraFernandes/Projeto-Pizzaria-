let verificar = 0
let cliente = []
let comentario = []
let cardapio = require("./cardapio.js")

/*FUNÇÕES DA TELA DE CRIAR CONTA */
/*Function para criar conta */
function criarConta(nome, email, telefone, senha, confirmarSenha, cidade, rua, bairro, pais) {
    if (nome.length >= 3) {
        verificar = verificar + 1
    }
    else{
        console.log("Nome inválido");
    }

    if(!email.includes("@")) {
        console.log("email inválido");
    } 
    else{
        verificar = verificar + 1
    }

    if (telefone.length !== 11) {
        console.log("Telefone inválido");
    } 
    else{
        verificar = verificar + 1
    }

    if (senha.length <= 7 || !senha.includes('@', '!', '#', '$', '%', '&', '?', '*')) {
        console.log("Senha Incorreta");
    } 
    else{
        verificar = verificar + 1
    }

    if (senha === confirmarSenha) {
        verificar = verificar + 1
    } 
    else{
        console.log("Essa senha não é igual a anterior");
    }

    if (verificar === 5) {
        console.log("Cadastro feito com sucesso");

        cliente.push({
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha,
            confirmacao: confirmarSenha,
            enderecos: [
                {
                    cidade: cidade,
                    bairro: bairro,
                    ruas: rua,
                    pais: pais
                }
            ]
        })
    }

}

/*FUNÇOES DA TELA DE LOGIN */
/**Function para poder logar na contar */
function login(email, senha) {
    if (cliente.length === 0) {
        console.log("Erro! Nenhum usuário cadastrado");
    }

    const user = cliente.find((user) => user.email === email);

    if (!user) {
        console.log("Erro! Verifique o email");
    }

    if (user.senha === senha) {
        console.log("Login bem-sucedido ");
    } 
    else{
        console.log("Erro! Verique a senha, tente novamente");
    }
}


/*TELA DE PERFIL */
/*Functions para listar os dados do perfil */
let total = 0
let ultimoPedido = 0

function meuPerfil(cliente) {
    const enderecos = cliente.map((objeto) => objeto.enderecos);
    
    for (let i = 0; i < enderecos.length; i++) {
        const listando = {
            Perfil:
            {
                nome: cliente[i].nome,
                cidade: enderecos[i][i].cidade,
                telefone: cliente[i].telefone,
                email: cliente[i].email,
                rua: enderecos[i][i].ruas,
                bairro: enderecos[i][i].bairro,
                pais: enderecos[i][i].pais,

            }
        }
        console.log("Seja Bem-Vindo ao seu Perfil")
        console.log(listando);
    }
}

function pedido(quantidade, data) {
    total = total + quantidade
    ultimoPedido = data
}

function totalPedidos() {
    console.log(`O total de pedidos realizados: ${total}\n Ultimo pedido realizado em: ${ultimoPedido} `);
}


/*TELA DE HOME */
/*Pesquisar o produto atraves do nome e mostra todas as infos do mesmo */
function infos(valor) {
    let listando
    for (let i = 0; i < cardapio.length; i++) {
        if (cardapio[i].nome === valor) {
            listando = {
                InfoGerais: {
                    nome: cardapio[i].nome,
                    preços: cardapio[i].preco,
                    categoria: cardapio[i].categoria,
                }
            }
        }
    }
    return console.log(listando);
}

/*Mostra apenas os produtos que estão no meus favoritos */
function meusFavoritos(valor) {
    for (let i = 0; i < cardapio.length; i++) {
        if (cardapio[i].favoritas === valor) {
            console.log(cardapio[i].nome);
        }
    }
}

/*Mostra Apenas as bebidas */
function drink(valor) {
    for (let i = 0; i < cardapio.length; i++) {
        if (cardapio[i].categoria === valor) {
            console.log(cardapio[i].nome);
        }
    }
}

/*Adiciona um novo produto no cardapio do restaurante */
function novoProduto(nome, preco, categoria, favorita) {
    cardapio.push({
        nome: nome,
        preco: preco,
        categoria: categoria,
        favortitas: favorita
        }
    )
    console.log("Produto adiconado com sucesso");
}


/*TELA COMENTÁRIO */
function comentar(nome, data, anotacao, star) {
    comentario.push({
        nome: nome,
        data: data,
        comentario: anotacao,
        estrela: star
        }
    )
}

/*CHAMANDO AS FUNÇÕES */
// criarConta("Fulano","fulano.silva@email.com","11996549898","1234567@","1234567@","Itapevi - SP","Rua Perto de Algum Lugar","Jardim Xurupita","Brasil")

// login("fulano.silva@email.com","1234567@")

// meuPerfil(cliente)

// pedido(1, '12/04/22')
// pedido(1, '18/06/22')
// pedido(8, '19/08/23')
// pedido(5, '20/10/23')

// totalPedidos()

// infos("Sukita 2L")

// meusFavoritos(true)

// drink("Bebida")
// novoProduto("Pizza de frango com catupiry","R$45,00","Pizza",true)

// comentar("Estala Dias", "04/05/22", "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 4)

// console.log(comentario);