let imoveis = []
let i = 0

function CadastraImoveis() {
  event.preventDefault()

  let imovel = {
    codigo: document.getElementById('code').value,
    description: document.getElementById('description').value,
    rua: document.getElementById('rua').value,
    num: document.getElementById('num').value,
    bairro: document.getElementById('bairro').value,
    city: document.getElementById('city').value,
    UF: document.getElementById('UF').value,
    pais: document.getElementById('pais').value,
    cep: document.getElementById('cep').value,
    tipo: document.getElementById('tipo').value,
    garagens: document.getElementById('garagens').value,
    suites: document.getElementById('suite').value,
    quartos: document.getElementById('quartos').value,
    seguranca: document.getElementById('seguranca').value,
    preco: document.getElementById('preco').value,
    condominio: document.getElementById('condominio').value
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
    '<table><tr><th>Código</td><td>Descrição</td><td>Rua</td><td>Número</td><td>Bairro</td><td>Cidade</td><td>Estado</td><td>País</td><td>CEP</td><td>Garagens</td><td>Suites</td><td>Suítes</td><td>Quartos</td><td>segurança</td><td>Preço</td><td>condominio</td></th></tr>'
  let i = 0
  if (imoveis.length > 0) {
    for (i = 0; i < imoveis.length; i++) {
      linhaCadastro +=
        '<tr><td>' +
        imoveis[i].codigo +
        '</td>' +
        '<td>' +
        imoveis[i].description +
        '</td>' +
        '<td>' +
        imoveis[i].rua +
        '</td>' +
        '<td>' +
        imoveis[i].num +
        '</td>' +
        '<td>' +
        imoveis[i].bairro +
        '</td>' +
        '<td>' +
        imoveis[i].city +
        '</td>' +
        '<td>' +
        imoveis[i].UF +
        '</td>' +
        '<td>' +
        imoveis[i].pais +
        '</td>' +
        '<td>' +
        imoveis[i].cep +
        '</td>' +
        '<td>' +
        imoveis[i].tipo +
        '</td>' +
        '<td>' +
        imoveis[i].garagens +
        '</td>' +
        '<td>' +
        imoveis[i].suites +
        '</td>' +
        '<td>' +
        imoveis[i].quartos +
        '</td>' +
        '<td>' +
        imoveis[i].seguranca +
        '</td>' +
        '<td>' +
        imoveis[i].preco +
        '</td>' +
        '<td>' +
        imoveis[i].condominio +
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
  '<table><tr><th>Código</td><td>Descrição</td><td>Rua</td><td>Número</td><td>Bairro</td><td>Cidade</td><td>Estado</td><td>País</td><td>CEP</td><td>Garagens</td><td>Suites</td><td>Suítes</td><td>Quartos</td><td>segurança</td><td>Preço</td><td>condominio</td></th></tr>'
  if (imoveis.length > 0) {
    Cadastro = BuscarCadastro(imoveis, codigoEspecifico)
    if (Cadastro != -1) {
      linhaCadastro +=
        '<tr><td>' +
        imoveis[i].codigo +
        '</td>' +
        '<td>' +
        imoveis[i].description +
        '</td>' +
        '<td>' +
        imoveis[i].rua +
        '</td>' +
        '<td>' +
        imoveis[i].num +
        '</td>' +
        '<td>' +
        imoveis[i].bairro +
        '</td>' +
        '<td>' +
        imoveis[i].city +
        '</td>' +
        '<td>' +
        imoveis[i].UF +
        '</td>' +
        '<td>' +
        imoveis[i].pais +
        '</td>' +
        '<td>' +
        imoveis[i].cep +
        '</td>' +
        '<td>' +
        imoveis[i].tipo +
        '</td>' +
        '<td>' +
        imoveis[i].garagens +
        '</td>' +
        '<td>' +
        imoveis[i].suites +
        '</td>' +
        '<td>' +
        imoveis[i].quartos +
        '</td>' +
        '<td>' +
        imoveis[i].seguranca +
        '</td>' +
        '<td>' +
        imoveis[i].preco +
        '</td>' +
        '<td>' +
        imoveis[i].condominio +
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
  '<table><tr><th>Código</td><td>Descrição</td><td>Rua</td><td>Número</td><td>Bairro</td><td>Cidade</td><td>Estado</td><td>País</td><td>CEP</td><td>Garagens</td><td>Suites</td><td>Suítes</td><td>Quartos</td><td>segurança</td><td>Preço</td><td>condominio</td></th></tr>'

  if (imoveis.length > 0) {
    Cadastro = BuscarCadastro(imoveis, codigoEspecifico)
    if (Cadastro != -1) {
      linhaCadastro +=
        '<tr><td>' +
        imoveis[Cadastro].codigo +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].description +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].rua +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].bairro +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].city +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].UF +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].pais +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].cep +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].garagens +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].suites +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].quartos +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].seguranca +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].preco +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].condominio +
        '</td></tr></td></tr>'
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

  if ((el.checked = '2')) {
    document.getElementById('novodado').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '3') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '4') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="number" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '5') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
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
  if (el.id == '8') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '9') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '10') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '11') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '12') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '13') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '14') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '15') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="text" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '16') {
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
    if (DadoparaAlterar == '2') {
      imoveis[ImoveisAlterando].description = novodado;
    }
    if (DadoparaAlterar == '3') {
      imoveis[ImoveisAlterando].rua = novodado;
    }
    if (DadoparaAlterar == '4') {
      imoveis[ImoveisAlterando].num = novodado;
    }
    if (DadoparaAlterar == '5') {
      imoveis[ImoveisAlterando].bairro = novodado;
    }
    if (DadoparaAlterar == '6') {
      imoveis[ImoveisAlterando].city = novodado;
    }
    if (DadoparaAlterar == '7') {
      imoveis[ImoveisAlterando].UF = novodado;
    }
    if (DadoparaAlterar == '8') {
      imoveis[ImoveisAlterando].pais = novodado;
    }
    if (DadoparaAlterar == '9') {
      imoveis[ImoveisAlterando].cep = novodado;
    }
    if (DadoparaAlterar == '10') {
      imoveis[ImoveisAlterando].tipo = novodado;
    }
    if (DadoparaAlterar == '11') {
      imoveis[ImoveisAlterando].garagens = novodado;
    }
    if (DadoparaAlterar == '12') {
      imoveis[ImoveisAlterando].suites = novodado;
    }
    if (DadoparaAlterar == '13') {
      imoveis[ImoveisAlterando].quartos = novodado;
    }
    if (DadoparaAlterar == '14') {
      imoveis[ImoveisAlterando].seguranca = novodado;
    }
    if (DadoparaAlterar == '15') {
      imoveis[ImoveisAlterando].preco = novodado;
    }
    if (DadoparaAlterar == '16') {
      imoveis[ImoveisAlterando].condominio = novodado;
    }
  } else {
    alert('Não foi possível alterar o imóvel !')
  }
}

function pesquisarexc() {
  let codigoexcluir = document.getElementById("codigoexcluir").value
  let linhaCadastro =
  '<table><tr><th>Código</td><td>Descrição</td><td>Rua</td><td>Número</td><td>Bairro</td><td>Cidade</td><td>Estado</td><td>País</td><td>CEP</td><td>Garagens</td><td>Suites</td><td>Suítes</td><td>Quartos</td><td>segurança</td><td>Preço</td><td>condominio</td></th></tr>'
  if (imoveis.length > 0) {
    Cadastro = BuscarCadastro(imoveis,codigoexcluir)
    if (Cadastro != -1) {
      linhaCadastro +=
        '<tr><td>' +
        imoveis[Cadastro].codigo +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].description +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].rua +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].num +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].bairro +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].city +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].UF +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].pais +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].cep +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].tipo +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].garagens +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].suites +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].quartos +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].seguranca +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].preco +
        '</td>' +
        '<td>' +
        imoveis[Cadastro].condominio +
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
