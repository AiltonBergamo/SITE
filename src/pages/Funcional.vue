<template>
  <section class="header_func">
    <div class="header_txt">
      <h1>Nosso sistema com certeza ajuda seu negócio</h1>
      <hr size="6" width="65%" align="center" color="white">
    </div>
    <div class="box_funcional">
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
          <img src="../assets/icon//venda.png" alt="">
        </div>
        <h3>Venda</h3>
        <p>Tenha um grande parceiro no controle de seus negócios e em suas vendas. </p>
        <!-- <div class="button">
              <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
            </div> -->
      </a>
      <a data-anime="right" class="card" target="_blank"
        href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Indústria!">
        <div class="imag">
          <img src="../assets/icon/industria.png" alt="">
        </div>
        <h3>Indústria</h3>
        <p>Gerenciamento dos processos centrais dos negócios de sua empresa.</p>
        <!-- <div class="button">
              <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
            </div> -->
      </a>
      <a data-anime="left" class="card" target="_blank"
        href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Agronegócio!">
        <div class="imag">
          <img src="../assets/icon/agro.png" alt="">
        </div>
        <h3>Agronegócio</h3>
        <p>Plataforma para análise de dados especializada para agronegócio.</p>
        <!-- <div class="button">
              <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
            </div> -->
      </a>
      <a data-anime="right" class="card" target="_blank"
        href="https://api.whatsapp.com/send?phone=5544999615259&text=Gostaria de saber a respeito do sistema de gestão de Transportes!">
        <div class="imag">
          <img src="../assets/icon/trans.png" alt="">
        </div>
        <h3>Transportes</h3>
        <p>Gerencie sua transportadora ou transporte escolar.</p>
        <!-- <div class="button">
              <a href="pagread.html" class= "btn" rel="next" target= "_self">Saiba mais</a>
            </div> -->
      </a>
    </div>    
  </section>
</template>

<script>
export default {
  name: "Funcional-page"
}
</script>

<style>

.header_func {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 68vh;
  border-radius: 20px 60px 35px;
  background: #73AD21;
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
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}

.card {  
  display: flex;
  flex-direction: column;
  background-color: white;  
  width: 150px;
  height: 300px;
}


</style>