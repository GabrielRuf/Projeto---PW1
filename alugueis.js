let imoveis = [];
let clientes = [];
let i = 0;

function CadastraImoveis() {
  event.preventDefault()

  let imovel = {
    cpf: document.getElementById("cpf").value,
    codigo: document.getElementById("code").value,
    dataentrada: document.getElementById("dataentrada").value,
    cpffiador: document.getElementById("cpffiador").value,
    nomefiador: document.getElementById("nomefiador").value,
    datasaida: document.getElementById("datasaida").value,
    valormensal: document.getElementById("valormensal").value,
  }

  Cadastro = BuscarCadastro(imoveis, imovel.codigo)

  if (Cadastro == -1) {
    imoveis.push(imovel)
    alert('Imóvel cadastrado !')
  } else {
    alert('Imóvel já cadastrado !')
  }
}

function ListarTodos() {
  let linhaCadastro =
    '<table><tr><th>Cpf</td><td>Código</td><td>Data de entrada</td><td>Cpf Fiador</td><td>Nome do fiador</td><td>Data de saída</td><td>Valor mensal</td>'

  let i = 0
  if (imoveis.length > 0) {
    for (i = 0; i < imoveis.length; i++) {
      linhaCadastro +=
        '<tr><td>' +
        imoveis[i].cpf +
        '</td>' +
        '<td>' +
        imoveis[i].code +
        '</td>' +
        '<td>' +
        imoveis[i].dataentrada +
        '</td>' +
        '<td>' +
        imoveis[i].cpffiador +
        '</td>' +
        '<td>' +
        imoveis[i].nomefiador +
        '</td>' +
        '<td>' +
        imoveis[i].datasaida +
        '</td>' +
        '<td>' +
        imoveis[i].valormensal +
        '</td>' +
        '<td>' +   
        '</td></tr>'
    }
    linhaCadastro += '</table>'

    document.getElementById('tabela1').innerHTML = linhaCadastro
  } else {
    document.getElementById('tabela1').innerHTML = 'Nenhum imóvel cadastrado !'
  }
}

function ListarEspecifico() {
  let codigoEspecifico = document.getElementById('codigolistar').value
  let linhaCadastro =
  '<table><tr><th>Cpf</td><td>Código</td><td>Data de entrada</td><td>Cpf Fiador</td><td>Nome do fiador</td><td>Data de saída</td><td>Valor mensal</td>'
  if (imoveis.length > 0) {
    Cadastro = BuscarCadastro(imoveis, codigoEspecifico)
    if (Cadastro != -1) {
       linhaCadastro +=
        '<tr><td>' +
        imoveis[i].cpf +
        '</td>' +
        '<td>' +
        imoveis[i].code +
        '</td>' +
        '<td>' +
        imoveis[i].dataentrada +
        '</td>' +
        '<td>' +
        imoveis[i].cpffiador +
        '</td>' +
        '<td>' +
        imoveis[i].nomefiador +
        '</td>' +
        '<td>' +
        imoveis[i].datasaida +
        '</td>' +
        '<td>' +
        imoveis[i].valormensal +
        '</td>' +
        '<td>' +   
        '</td></tr>'
      linhaCadastro += '</table>'
      document.getElementById('tabela2').innerHTML = linhaCadastro
    } else {
      document.getElementById('tabela2').innerHTML =
        'Imóvel não foi encontrado '
    }
  } else {
    document.getElementById('tabela2').innerHTML =
      'Nenhum imóvel foi cadastrado '
  }
}

let DadoparaAlterar = '';
let possivelAlterar = false;
let ImoveisAlterando = -1;

function pesquisar() {
  let codigoEspecifico = document.getElementById('codigoalterar').value
  let linhaCadastro =
  '<table><tr><th>Cpf</td><td>Código</td><td>Data de entrada</td><td>Cpf Fiador</td><td>Nome do fiador</td><td>Data de saída</td><td>Valor mensal</td>'
  if (imoveis.length > 0) {
    Cadastro = BuscarCadastro(imoveis, codigoEspecifico)
    if (Cadastro != -1) {
       linhaCadastro +=
        '<tr><td>' +
        imoveis[i].cpf +
        '</td>' +
        '<td>' +
        imoveis[i].code +
        '</td>' +
        '<td>' +
        imoveis[i].dataentrada +
        '</td>' +
        '<td>' +
        imoveis[i].cpffiador +
        '</td>' +
        '<td>' +
        imoveis[i].nomefiador +
        '</td>' +
        '<td>' +
        imoveis[i].datasaida +
        '</td>' +
        '<td>' +
        imoveis[i].valormensal +
        '</td>' +
        '<td>' +   
        '</td></tr>'
        linhaCadastro += '</table>'
        document.getElementById('tabela3').innerHTML = linhaCadastro
        ImoveisAlterando = Cadastro;
      } else {
        document.getElementById('tabela3').innerHTML = 'Cliente não encontrado !'
      }
    } else {
      document.getElementById('tabela3').innerHTML = 'Nenhum Cliente cadastrado !'
    }
  }

  function BuscarCadastro(VetorImovel, CODIGO) {
    let i = 0
    for (i = 0; i < VetorImovel.length; i++) {
      if (VetorImovel[i].codigo == CODIGO) {
        return i
      }
    }
    return -1
  }

  function checkedOnClick(el) {
    var checkboxesList = document.getElementsByClassName('checkoption')
    for (var i = 0; i < checkboxesList.length; i++) {
      checkboxesList.item(i).checked = false
    }
    el.checked = true
  
    if ((el.checked = '3')) {
      document.getElementById('novodado').innerHTML =
        '<p id="pdadonovo"><input type="text" id="novodado"></p>'
      DadoparaAlterar = el.id
      possivelAlterar = true
    }
    if (el.id == '4') {
      document.getElementById('pdadonovo').innerHTML =
        '<p id="pdadonovo"><input type="text" id="novodado"></p>'
      DadoparaAlterar = el.id
      possivelAlterar = true
    }
    if (el.id == '5') {
      document.getElementById('pdadonovo').innerHTML =
        '<p id="pdadonovo"><input type="number" id="novodado"></p>'
      DadoparaAlterar = el.id
      possivelAlterar = true
    }
    if (el.id == '6') {
      document.getElementById('pdadonovo').innerHTML =
        '<p id="pdadonovo"><input type="text" id="novodado"></p>'
      DadoparaAlterar = el.id
      possivelAlterar = true
    }
    if (el.id == '7') {
      document.getElementById('pdadonovo').innerHTML =
        '<p id="pdadonovo"><input type="text" id="novodado"></p>'
      DadoparaAlterar = el.id
      possivelAlterar = true
    }
  }
  
  function ConfirmarAlterar() {
    let novodado = document.getElementById("novodado").value;
    if (possivelAlterar == true) {
      alert('Imóvel alterado com sucesso !');
      if (DadoparaAlterar == '3') {
        imoveis[ImoveisAlterando].description = novodado;
      }
      if (DadoparaAlterar == '4') {
        imoveis[ImoveisAlterando].rua = novodado;
      }
      if (DadoparaAlterar == '5') {
        imoveis[ImoveisAlterando].num = novodado;
      }
      if (DadoparaAlterar == '6') {
        imoveis[ImoveisAlterando].bairro = novodado;
      }
      if (DadoparaAlterar == '7') {
        imoveis[ImoveisAlterando].city = novodado;
      }
    } else {
      alert('Não foi possível alterar o imóvel !')
    }
  }

  function pesquisarexc() {
    let codigoexcluir = document.getElementById("codigoexcluir").value
    let linhaCadastro =
    '<table><tr><th>Cpf</td><td>Código</td><td>Data de entrada</td><td>Cpf Fiador</td><td>Nome do fiador</td><td>Data de saída</td><td>Valor mensal</td>'
  if (imoveis.length > 0) {
    Cadastro = BuscarCadastro(imoveis, codigoEspecifico)
    if (Cadastro != -1) {
       linhaCadastro +=
        '<tr><td>' +
        imoveis[i].cpf +
        '</td>' +
        '<td>' +
        imoveis[i].code +
        '</td>' +
        '<td>' +
        imoveis[i].dataentrada +
        '</td>' +
        '<td>' +
        imoveis[i].cpffiador +
        '</td>' +
        '<td>' +
        imoveis[i].nomefiador +
        '</td>' +
        '<td>' +
        imoveis[i].datasaida +
        '</td>' +
        '<td>' +
        imoveis[i].valormensal +
        '</td>' +
        '<td>' +   
        '</td></tr>'
        linhaCadastro += '</table>'
        document.getElementById('tabela5').innerHTML = linhaCadastro
      } else {
        document.getElementById('tabela5').innerHTML =
          'Imóvel não foi encontrado '
      }
    } else {
      document.getElementById('tabela5').innerHTML =
        'Nenhum imóvel foi cadastrado '
    }
  }

  function confirmarexc() {
    let imoveisnovo = imoveis.filter(excluir)
    imoveis = imoveisnovo
    alert('Imóvel excluido com sucesso !')
  }

  function excluir(elemento) {
    let codigoexcluir = document.getElementById('codigoexcluir').value
    if (elemento.codigo != codigoexcluir) {
      return elemento
    }
  }