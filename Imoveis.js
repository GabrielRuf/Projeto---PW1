let imoveis = []
let i = 0

function CadastraImoveis() 
{
  event.preventDefault()

  let imovel = {
    codigo : document.getElementById("code").value,
    description: document.getElementById("description").value,
    rua: document.getElementById("rua").value,
    num: document.getElementById("num").value,
    bairro: document.getElementById("bairro").value,
    city: document.getElementById("city").value,
    estado: document.getElementById("UF").value,
    pais: document.getElementById("pais").value,
    cep: document.getElementById("cep").value,
    tipo: document.getElementById("tipo").value,
    garagens: document.getElementById("garagens").value,
    suites: document.getElementById("suite").value,
    quartos: document.getElementById("quartos").value,
    seguranca: document.getElementById("seguranca").value,
    preco: document.getElementById("preco").value,
    condominio: document.getElementById("condominio").value
  };
  
  Cadastro = BuscarCadastro(imoveis,imovel.codigo);
  
  if (Cadastro == -1) 
  {
    imoveis.push(imovel);
    alert('Imóvel cadastrada !');
  } 
  else {
    alert('Imóvel já cadastrado !');
  }
}
function ListarTodos() {
  let linhaCadastro =
    '<table><tr><th>Código</td><th>Descrução</td>Rua<th>Número</td><th>Bairro</td><th>Cidade</td><th>Estado</td><th>País</td><th>CEP</td><th>Garagens</td><th>Suites</td></th>Suítes</td><th>Quartos</td><th>segurança</td><th>Preço</td><th>condominio</td></tr></td></tr>'
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
  let codigoEspecifico = document.getElementById("codigolistar").value;
  let linhaCadastro =
    '<table><tr><th>Código</td><th>Descrição</td>Rua<th>Número</td><th>Bairro</td><th>Cidade</td><th>Estado</td><th>País</td><th>CEP</td><th>Garagens</td><th>Suites</td></th>Suítes</td><th>Quartos</td><th>segurança</td><th>Preço</td><th>condominio</td></tr></td></tr>'
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

let DadoparaAlterar = ''
let possivelAlterar = false
let ImoveisAlterando = -1

function BuscarCadastro(VetorImovel, codigo) {
  let i = 0
  for (i = 0; i < VetorImovel.length; i++) {
    if (VetorImovel[i].codigo == codigo) {
      return i;
    }
  }
  return -1;
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
      '<p id="pdadonovo"><input type="date" id="novodado"></p>'
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
      '<p id="pdadonovo"><input type="email" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
  if (el.id == '7') {
    document.getElementById('pdadonovo').innerHTML =
      '<p id="pdadonovo"><input type="number" id="novodado"></p>'
    DadoparaAlterar = el.id
    possivelAlterar = true
  }
}

function ConfirmarAlterar() {
  let novo_dado = document.getElementById('novodado').value
  if (possivelAlterar == true) {
    if (DadoparaAlterar == '2') {
      imoveis[ImoveisAlterando].description = novo_dado
    }
    if (DadoparaAlterar == '3') {
      imoveis[ImoveisAlterando].rua = novo_dado
    }
    if (DadoparaAlterar == '4') {
      imoveis[ImoveisAlterando].num = novo_dado
    }
    if (DadoparaAlterar == '5') {
      imoveis[ImoveisAlterando].bairro = novo_dado
    }
    if (DadoparaAlterar == '6') {
      imoveis[ImoveisAlterando].city = novo_dado
    }
    if (DadoparaAlterar == '7') {
      imoveis[ImoveisAlterando].UF = novo_dado
    }
    if (DadoparaAlterar == '8') {
      imoveis[ImoveisAlterando].pais = novo_dado
    }
    if (DadoparaAlterar == '9') {
      imoveis[ImoveisAlterando].cep = novo_dado
    }
    if (DadoparaAlterar == '10') {
      imoveis[ImoveisAlterando].tipo = novo_dado
    }
    if (DadoparaAlterar == '11') {
      imoveis[ImoveisAlterando].garagens = novo_dado
    }
    if (DadoparaAlterar == '12') {
      imoveis[ImoveisAlterando].suites = novo_dado
    }
    if (DadoparaAlterar == '13') {
      imoveis[ImoveisAlterando].quartos = novo_dado
    }
    if (DadoparaAlterar == '14') {
      imoveis[ImoveisAlterando].seguranca = novo_dado
    }
    if (DadoparaAlterar == '15') {
      imoveis[ImoveisAlterando].preco = novo_dado
    }
    if (DadoparaAlterar == '16') {
      imoveis[ImoveisAlterando].condominio = novo_dado
    }
    alert('Imovel alterado !')
  } else {
    alert('N~so foi possivel altera !')
  }
}

function pesquisarexc() {
  let codigoexcluir = document.getElementById('codigoexcluir').value
  let linhaCadastro =
    '<table><tr><th>Código</td><th>Descrição</td>Rua<th>Número</td><th>Bairro</td><th>Cidade</td><th>Estado</td><th>País</td><th>CEP</td><th>Garagens</td><th>Suites</td></th>Suítes</td><th>Quartos</td><th>segurança</td><th>Preço</td><th>condominio</td></tr></td></tr>'

  if (imoveis.length > 0) {
    Cadastro = BuscarCadastro(imoveis, codigoexcluir)
    if (Cadastro != 1) {
      linhaCadastro +=
        '<tr><td>' +
        imoveis[cadastro].codigo +
        '</td>' +
        '<td>' +
        imoveis[cadastro].description +
        '</td>' +
        '<td>' +
        imoveis[cadastro].rua +
        '</td>' +
        '<td>' +
        imoveis[cadastro].num +
        '</td>' +
        '<td>' +
        imoveis[cadastro].bairro +
        '</td>' +
        '<td>' +
        imoveis[cadastro].city +
        '</td>' +
        '<td>' +
        imoveis[cadastro].UF +
        '</td>' +
        '<td>' +
        imoveis[cadastro].pais +
        '</td>' +
        '<td>' +
        imoveis[cadastro].cep +
        '</td>' +
        '<td>' +
        imoveis[cadastro].tipo +
        '</td>' +
        '<td>' +
        imoveis[cadastro].garagens +
        '</td>' +
        '<td>' +
        imoveis[cadastro].suites +
        '</td>' +
        '<td>' +
        imoveis[cadastro].quartos +
        '</td>' +
        '<td>' +
        imoveis[cadastro].seguranca +
        '</td>' +
        '<td>' +
        imoveis[cadastro].preco +
        '</td>' +
        '<td>' +
        imoveis[cadastro].condominio +
        '</td></tr>'
      linhaCadastro += '</table>'
      document.getElementById('tabela5').innerHTML = linhaCadastro
    } else {
      document.getElementById('tabela5').innerHTML = 'Imóvel não encontrado !'
    }
  } else {
    document.getElementById('tabela5').innerHTML = 'Nenhum imóvel cadastrado !'
  }
}

function confirmarexc() {
  let imoveisnovo = imovies.filter(excluir)
  imoveis = imoveisnovo
}

function excluir(elemento) {
  let codigoexcluir = document.getElementById('codigoexcluir').value
  if (elemento.codigo != codigoexcluir) {
    return elemento
  }
}
