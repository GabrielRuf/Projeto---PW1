clientes = []; //Banco de dados dos clientes,vetor global
let i = 0;
function CadastraCliente() //Função responsável por cadastrar o cliente
{
    event.preventDefault()
    let cliente = //Cria um cliente em formato de objeto
    {
        cpf : document.getElementById("cpf").value,
        nome : document.getElementById("name").value,
        datanasc : document.getElementById("nascimento").value,
        sexo : document.getElementById("sexo").value,
        salario : document.getElementById("salario").value,
        email : document.getElementById("emails").value,
        telefone : document.getElementById("telefone").value
    };
    Cadastro = BuscarCadastro(clientes,cliente.cpf); //verifica se está cadastrado
    if (Cadastro == -1)
    {
        clientes.push(cliente); //Se não estiver cadastrado coloca no vetor clientes global
        alert("Cliente cadastrado !");
    }
    else
    {
        alert("Cliente já está cadastrado !"); //Se estiver ele da um aviso e não inclui
    }
    let stringClientes = JSON.stringify(clientes);
    localStorage.setItem("Vetor clientes",stringClientes);
}
function ListarTodos() //Lista todos os clientes cadastrados no vetor global clientes
{   // Essa string LinhaCadastro representa a tabela com o cadastro do cliente, que é formada
    // assim que o botão é pressionado
    let linhaCadastro = "<table><tr><th>CPF</td><th>Nome</td><th>Data de nascimento</td><th>Sexo</td><th>Salário</td><th>Email(s)</td><th>Telefone(s)</td></tr>";
    // Nessa parte de cima se cria a parte da tabela onde vai ter as descrições e separações
    let i = 0;
    if (clientes.length > 0)
    {
        for(i=0;i<clientes.length;i++)
        {
            linhaCadastro += "<tr><td>" + clientes[i].cpf + "</td>" + "<td>" + clientes[i].nome + "</td>" + "<td>" + clientes[i].datanasc + "</td>" + "<td>" + clientes[i].sexo + "</td>" + "<td>" + clientes[i].salario + "</td>" + "<td>" + clientes[i].email + "</td>" + "<td>" + clientes[i].telefone + "</td></tr>";
        } // dentro do looping ele incrementa a tabela com os dados cadastrados
        linhaCadastro += "</table>"; //fecha a tabela
    
        document.getElementById("tabela1").innerHTML = linhaCadastro; //Substitui na página
    }
    else
    {
        document.getElementById("tabela1").innerHTML = "Nenhum Cliente cadastrado !"; 
        //Mensagem caso o vetor global estiver vazio
    };
    
}

function ListarEspecifico() //Procura o cpf e lista somente o espefico daquele cpf
{
    let cpfEspecifico = document.getElementById("cpflistar").value; //Pega o cpf que quer buscar
    // a seguir o código é basicamente o mesmo que da função acima, porém aqui ele não vai colocar
    // mais de uma cadastro, vai colocar só o que buscamos
    let linhaCadastro = "<table><tr><th>CPF</td><th>Nome</td><th>Data de nascimento</td><th>Sexo</td><th>Salário</td><th>Email(s)</td><th>Telefone(s)</td></tr>";
    if (clientes.length > 0)
    {
        Cadastro = BuscarCadastro(clientes,cpfEspecifico); // Aqui temos o retorno do indice aonde está cadastrado
        if(Cadastro != -1)
        {
            linhaCadastro += "<tr><td>" + clientes[Cadastro].cpf + "</td>" + "<td>" + clientes[Cadastro].nome + "</td>" + "<td>" + clientes[Cadastro].datanasc + "</td>" + "<td>" + clientes[Cadastro].sexo + "</td>" + "<td>" + clientes[Cadastro].salario + "</td>" + "<td>" + clientes[Cadastro].email + "</td>" + "<td>" + clientes[Cadastro].telefone + "</td></tr>";
            linhaCadastro += "</table>";
            document.getElementById("tabela2").innerHTML = linhaCadastro;

        }
        else
        {
            document.getElementById("tabela2").innerHTML = "Cliente não encontrado !";
            // caso não encontre o cliente
        }
    }
    else
    {
        document.getElementById("tabela2").innerHTML = "Nenhum Cliente cadastrado !"; //Caso o vetor está vazio
    }

}

let DadoparaAlterar = ""; //Essa variavel representa o campo no qual o usuário quer alterar
let possivelAlterar = false; //Essa é pra saber se é possivel alterar(Somento possivel se tiver alguma checkbox selecionada)
let ClienteAlterando = -1; //Indice do atual cliente sendo alterado.

function pesquisar() //Função pesquisar pega o cliente pelo cpf e mostra ele numa tabela
{                      //Basicamente uma cópia do listar especifico porém com algumas coisas a mais
    let cpfEspecifico = document.getElementById("cpfalterar").value;
    let linhaCadastro = "<table><tr><th>CPF</td><th>Nome</td><th>Data de nascimento</td><th>Sexo</td><th>Salário</td><th>Email(s)</td><th>Telefone(s)</td></tr>";
    if (clientes.length > 0)
    {
        Cadastro = BuscarCadastro(clientes,cpfEspecifico);
        if(Cadastro != -1)
        {
            linhaCadastro += "<tr><td>" + clientes[Cadastro].cpf + "</td>" + "<td>" + clientes[Cadastro].nome + "</td>" + "<td>" + clientes[Cadastro].datanasc + "</td>" + "<td>" + clientes[Cadastro].sexo + "</td>" + "<td>" + clientes[Cadastro].salario + "</td>" + "<td>" + clientes[Cadastro].email + "</td>" + "<td>" + clientes[Cadastro].telefone + "</td></tr>";
            linhaCadastro += "</table>";
            document.getElementById("tabela3").innerHTML = linhaCadastro;
            ClienteAlterando = Cadastro; // Aqui ele muda o valor do cliente atual que está sendo alterado
            // Valor esse que é passado para a variavel global acima dessa função
        }
        else
        {
            document.getElementById("tabela3").innerHTML = "Cliente não encontrado !";
        }
    }
    else
    {
        document.getElementById("tabela3").innerHTML = "Nenhum Cliente cadastrado !";
    }

}

function BuscarCadastro(VetorCliente,CPF) // Recebe o vetor pra procurar o cpf, e o cpf em si
{
    let i = 0;
    for(i=0;i<VetorCliente.length;i++)
    {
        if (VetorCliente[i].cpf == CPF)
        {
            return i; // Se achar o cpf identico, retorna o indice desse cliente
        }
    }
    return -1; //Caso não ache, retorna -1, que é tratado dentro da função aonde foi chamado e tals, como da pra ver nas funções acima

}

function checkedOnClick(el){ // Função que peguei na internet para manter só uma checkbox selecionada
    // Melhorei ela um pouco pro nosso código, ficou um poquim mais complexaKKKKKK
    // Select all checkboxes by class
    var checkboxesList = document.getElementsByClassName("checkoption");
    for (var i = 0; i < checkboxesList.length; i++) {
       checkboxesList.item(i).checked = false; // Uncheck all checkboxes
    }
    el.checked = true; // Checked clicked checkbox
    
    if(el.id=="2") //A seguir, variando do valor do id das checkbox, ele altera para o tipo de dado necessário
            // atenção que ele alterar para um input dentro de um paragrafo, só funciona direito assim, não me pergunte pqKKKKKK
        {document.getElementById("novodado").innerHTML = '<p id="pdadonovo"><input type="text" id="novodado"></p>';
        DadoparaAlterar = el.id;
        possivelAlterar = true; // Altera as variaveis globais em cima.
        }
    if(el.id=="3")
        {document.getElementById("pdadonovo").innerHTML = '<p id="pdadonovo"><input type="date" id="novodado"></p>';
        DadoparaAlterar = el.id;
        possivelAlterar = true;
        }
    if(el.id=="4")
        {document.getElementById("pdadonovo").innerHTML = '<p id="pdadonovo"><input type="text" id="novodado"></p>';
        DadoparaAlterar = el.id;
        possivelAlterar = true;
        }
    if(el.id=="5")
        {document.getElementById("pdadonovo").innerHTML = '<p id="pdadonovo"><input type="number" id="novodado"></p>';
        DadoparaAlterar = el.id;
        possivelAlterar = true;
        }
    if(el.id=="6")
        {document.getElementById("pdadonovo").innerHTML = '<p id="pdadonovo"><input type="email" id="novodado"></p>';
        DadoparaAlterar = el.id;
        possivelAlterar = true;
        }
    if(el.id=="7")
       {document.getElementById("pdadonovo").innerHTML = '<p id="pdadonovo"><input type="number" id="novodado"></p>';
       DadoparaAlterar = el.id;
       possivelAlterar = true;
       }
    
}



function ConfirmarAlterar() // Função responsável por confirmar e alterar de fato o campo
{
    let novodado = document.getElementById("novodado").value;//Detalhe que esse id é o do input ta,cuidado pra n colocar o do paragrafo
    if (possivelAlterar == true)//Verifica se pode alterar
    {
        if (DadoparaAlterar == "2")//Podendo alterar ele altera com base nas variaveis globais que foram formadas acima.
        {
            clientes[ClienteAlterando].nome = novodado;
        }
        if (DadoparaAlterar == "3")
        {
            clientes[ClienteAlterando].datanasc = novodado;
        }
        if (DadoparaAlterar == "4")
        {
            clientes[ClienteAlterando].sexo = novodado;
        }
        if (DadoparaAlterar == "5")
        {
            clientes[ClienteAlterando].salario = novodado;
        }
        if (DadoparaAlterar == "6")
        {
            clientes[ClienteAlterando].email = novodado;
        }
        if (DadoparaAlterar == "7")
        {
            clientes[ClienteAlterando].telefone = novodado;
        }
        alert("Cliente alterado com sucesso !");
    }
    else
    {
        alert("não foi possivel alterar o cliente !")
    }
}

function pesquisarexc() // Igual o listar espeficico, na segunda parte da pra reutilizar ele e tals
{
    let cpfexcluir = document.getElementById("cpfexcluir").value;
    let linhaCadastro = "<table><tr><th>CPF</td><th>Nome</td><th>Data de nascimento</td><th>Sexo</td><th>Salário</td><th>Email(s)</td><th>Telefone(s)</td></tr>";
    if (clientes.length > 0)
    {
        Cadastro = BuscarCadastro(clientes,cpfexcluir);
        if(Cadastro != -1)
        {
            linhaCadastro += "<tr><td>" + clientes[Cadastro].cpf + "</td>" + "<td>" + clientes[Cadastro].nome + "</td>" + "<td>" + clientes[Cadastro].datanasc + "</td>" + "<td>" + clientes[Cadastro].sexo + "</td>" + "<td>" + clientes[Cadastro].salario + "</td>" + "<td>" + clientes[Cadastro].email + "</td>" + "<td>" + clientes[Cadastro].telefone + "</td></tr>";
            linhaCadastro += "</table>";
            document.getElementById("tabela5").innerHTML = linhaCadastro;
        }
        else
        {
            document.getElementById("tabela5").innerHTML = "Cliente não encontrado !";
        }
    }
    else
    {
        document.getElementById("tabela5").innerHTML = "Nenhum Cliente cadastrado !";
    }

}

function confirmarexc() // Usei o filter pra excluir, creio que é a função mais simples de todas KKKKK
{
    let clientesnovo = clientes.filter(excluir);//Cria nova array que segue as condições da função excluir
    clientes = clientesnovo;
    alert("Cliente excluido com sucesso!");
}

function excluir(elemento)
{
    let cpfexcluir = document.getElementById("cpfexcluir").value;
    if(elemento.cpf != cpfexcluir) //Condição aqui é pra retornar pra arrar,somente os clientes que tem cpf diferente do cpf que queremos excluir.
    {
        return elemento;
    }
}