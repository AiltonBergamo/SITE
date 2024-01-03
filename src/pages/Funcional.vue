<template>
  <section class="header_func">
    <div class="header_txt">
      <h1>
        Nosso sistema com certeza ajuda seu negócio
        <hr size="6" width="65%" color="white" style="margin-left: 17.5%;border-radius: 20px;">
      </h1>
    </div>
    <div class="column center">
      <div class="row">
        <a data-anime="left" class="card" href="/funcional/cadastro">
          <div class="imag">
            <img src="../assets/icon/address-card-regular.svg" alt="" class="svg_preto">
          </div>
          <h3>Cadastros</h3>
          <p>Cadastre clientes, funcionários e fornecedores em um só lugar.</p>
        </a>
        <a data-anime="left" class="card"
          href="/funcional/estoque">
          <div class="imag">
            <img src="../assets/icon/estoque.svg" alt="">
          </div>
          <h3>Estoque</h3>
          <p>Automatize a entrada de produtos em seu estoque e tenha um bom gerenciamento.</p>
        </a>
        <a data-anime="left" class="card"
          href="/funcional/frenteCaixa">
          <div class="imag">
            <img src="../assets/icon/loja.svg" alt="" class="svg_preto">
          </div>
          <h3>Frente de Caixa</h3>
          <p>Controle de caixa e lançamento de vendas.</p>
        </a>
      </div>
      <div class="row">
        <a data-anime="left" class="card" 
          href="/funcional/venda">
          <div class="imag">
            <img src="../assets/icon//carrinhoMercado.svg" alt="">
          </div>
          <h3>Venda</h3>
          <p>Tenha um grande parceiro no controle de seus negócios e em suas vendas. </p>
        </a>
        <a data-anime="left" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Venda!">
          <div class="imag">
            <img src="../assets/icon/notaFiscal.svg" alt="" class="svg_preto">
          </div>
          <h3>Nota Fiscal</h3>
          <p>Emita notas fiscas de forma simplificada.</p>
          <!-- <div class="button">
                <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
              </div> -->
        </a>
        <a data-anime="right" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Financeiro!">
          <div class="imag">
            <img src="../assets/icon/porquinho.svg" alt="">
          </div>
          <h3>Financeiro</h3>
          <p>Controle de forma eficaz suas operações financeiras.</p>
          <!-- <div class="button">
                <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
              </div> -->
        </a>
      </div>
      <div class="row">
        <a data-anime="left" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Venda!">
          <div class="imag">
            <img src="../assets/icon/codigoBarra.svg" alt="" class="svg_preto">
          </div>
          <h3>Boleto</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <!-- <div class="button">
                <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
              </div> -->
        </a>
        <a data-anime="left" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Venda!">
          <div class="imag">
            <img src="../assets/icon/sacoDinheiro.svg" alt="" class="svg_preto">
          </div>
          <h3>Link de Pagamento</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <!-- <div class="button">
                <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
              </div> -->
        </a>
      </div>
    </div> 
  </section>
</template>

<script>
export default {
  name: "Funcional-page"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&display=swap');
.center{
  align-items: center;
  justify-content: center;
}
.row{
  display: flex;
  flex-direction: row;
  flex-wrap: auto;
}
.column{
  display: flex;
  flex-direction: column;
}
p{
  font-family: 'Nunito Sans', sans-serif;
}
a{
  text-decoration: none;
  color: black;
}
.svg_preto{
  filter: brightness(0);
}

.header_func {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 68vh;
  border-radius: 20px 60px 35px;
  background: white;
  width: 100%;
  height: 100%;  
}

.box_funcional{  
  display: grid;
  height: 60vh;  
  grid-template-columns: 16% 16% 16% 16% 16% 16%;
  padding: 0 2em;
  place-items: center;
  justify-content: space-around;
  max-height: 600px;
  height: 100%;
  column-gap: 10px;
  margin-bottom: 2em;
}

.box_funcional a {
  text-decoration: none;
  color: black;
}

.header_txt{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.imag{
  align-self: center;
  width: 20%;
  height: 20%;
  display: flex;
  background-color: #b7d3ff;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}

.card {  
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: #b7d3ff;  
  width: 320px;
  height: 200px;
  border-radius: 10px;
}
.card:hover p{
  color: var(--texto-titulo);
  transition: 1s;
}
.card img{
  padding: 0px;
  width: auto;
}
</style>