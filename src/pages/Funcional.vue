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
          <p>Cadastre clientes, funcionarios e fornecedores em um só lugar.</p>
          <!-- <div class="button">
                  <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
                </div> -->
        </a>
        <a data-anime="left" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Estoque!">
          <div class="imag">
            <img src="../assets/icon/estoque.png" alt="">
          </div>
          <h3>Estoque</h3>
          <p>Automatize a entrada de produtos em seu estoque e tenha um bom gerenciamento.</p>
          <!-- <div class="button">
                  <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
                </div> -->
        </a>
        <a data-anime="left" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Estoque!">
          <div class="imag">
            <img src="../assets/icon/store-solid.svg" alt="" class="svg_preto">
          </div>
          <h3>Frente de Caixa</h3>
          <p>Controle de caixa e lançamento de vendas.</p>
          <!-- <div class="button">
                  <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
                </div> -->
        </a>
        <a data-anime="left" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Venda!">
          <div class="imag">
            <img src="../assets/icon//venda.png" alt="">
          </div>
          <h3>Venda</h3>
          <p>Tenha um grande parceiro no controle de seus negócios e em suas vendas. </p>
          <!-- <div class="button">
                <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
              </div> -->
        </a>
      </div>
      <div class="row">
        <a data-anime="left" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Venda!">
          <div class="imag">
            <img src="../assets/icon/file-invoice-dollar-solid.svg" alt="" class="svg_preto">
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
            <img src="../assets/icon/financeiro.png" alt="">
          </div>
          <h3>Financeiro</h3>
          <p>Controle de forma eficaz suas operações financeiras.</p>
          <!-- <div class="button">
                <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
              </div> -->
        </a>
        <a data-anime="left" class="card" target="_blank"
          href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Venda!">
          <div class="imag">
            <img src="../assets/icon/file-invoice-solid.svg" alt="" class="svg_preto">
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
            <img src="../assets/icon/link-solid.svg" alt="" class="svg_preto">
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

<style>
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
  background: var(--fundo-padrao);
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
  height: 50%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}

.card {  
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;  
  width: 180px;
  height: 300px;
  border-radius: 10px;
}


</style>