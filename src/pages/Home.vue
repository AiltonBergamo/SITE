<template>
  <section class="container tela">
    <div class="container__titulo">
      <h1>TiDoc é o sistema de gestão online que gerencia melhor seu negócio.</h1>
    </div>
    <div class="container__imagem">
      <img src="../assets/aprenstacaoBDS.png" alt="o Comobo+ é a junção do alura+ eo o alura lingua">
    </div>
  </section>
  <section class="secundario  tela">
    <div class="container__img">
      <img src="../assets/funcional.png" alt="o Comobo+ é a junção do alura+ eo o alura lingua">
    </div>
    <div class="container__secundario">
      <h3>Loja física ou virtual</h3>
      <a>Um ERP para gerenciar todas as operações da empresa.</a>
    </div>
  </section>
  <section class="terceiro">
    <div class="heading">
      <span>Nosso sistema com certeza ajuda seu negócio</span>
    </div>
    <div class="box_container">
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
  <section class="mapa tela">
    <div class="mapa__texto">
      <h1>Estamos atuando em todo Brasil</h1>
    </div>
    <div class="mapa__img">
      <img src="../assets/mapa-do-brasil.webp" alt="Em todo Brasil">
    </div>
  </section>
  <section class="suporte_container">
    <div class="suporte__img">
      <img src="../assets/support-woman.png" alt="Suporte">
    </div>
    <div class="container__suporte">
      <h1>Oferecemos o suporte que vc precisa.</h1>
      <h2>Nossa equipe está disponível para o seu negócio - já incluso na mensalidade!</h2>
      <div class="tela_suporte">
        <h3>Horário de atendimento</h3>
        <div class="dividir_tela">
          <div>
            <h1>Segunda a sábado</h1>
            <h1>09h às 22h</h1>
          </div>
          <div>
            <h1>Domingo e feriados</h1>
            <h1>10h às 16h</h1>
          </div>
        </div>
        <h3>Pelo painel de gestão</h3>
      </div>
    </div>
  </section>  
</template>

<script>
export default {
  name: "Home-page"
}
</script>


<style>

.container {
  height: 60vh;
  display: grid;
  grid-template-columns: 50% 50%;
  border-radius: 20px 60px 35px;
  background: #73AD21;
  width: 100%;
  height: 100%;  
}

.tela {
  align-items: center;
  text-align: center;
}

.container__caixa {
  display: flex;
  justify-content: space-around;
}

.container__titulo {
  display: flex;
  justify-content: flex-end;
}

.container__titulo h1 {
  color: white;
  font-size: 28px;
  font-weight: 700;
  width: 350px;
}

.container__imagem {
  display: flex;
  justify-content: start;
  width: 100%;
}

.container__imagem img {
  max-width: 450px;
  max-height: 375px;
  width: auto;
  height: auto;
  padding: 1em;
}

.secundario {
  height: 50vh;
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: transparent;
  /* padding: 0 2em; */
}

.container__img {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.container__img img {
  max-width: 350px;
  max-height: 475px;
  width: auto;
  height: auto;    
}

.container__secundario {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1em;
  width: 350px;
}


.heading {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1em;
}

.box_container {
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

.box_container a {
  text-decoration: none;
  color: black;
}

.card img {
  display: block;
  left: 0;
  top: 0;
  padding: 1.5rem 0;
  width: 85%;
  max-height: 300px;
  height: 100%;  
}

.card {  
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 300px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
}

.card p {
  text-align: center;
}

.card h3 {
  margin-bottom: 1em;
  text-align: center;
}

.imag{
  display: flex;
  justify-content: center;
  align-items: center;
}

.mapa {
  height: 60vh;
  display: grid;
  grid-template-columns: 50% 50%;
  /* background-color: black; */
  padding: 0 2em;
}

.mapa__texto{
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.mapa__texto h1 {
  color: black;
  font-size: 28px;
  font-weight: 700;
  width: 350px;
}

.mapa__img {
  display: flex;
  justify-content: start;
  width: 100%;
}

.mapa__img img {
  max-width: 550px;
  max-height: 355px;
  width: auto;
  height: auto;
  padding: 1em;
}

.suporte_container {
  height: 50vh;
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: transparent;
  padding: 0 2em;
}

.container__suporte{
  display: flex;  
  flex-direction: column;  
  width: 100%;
  gap: 1em;
}
.suporte__img {
  display: flex;
  justify-content: flex-end;
  width: 100%;
} 
.suporte__img img {
  max-width: 450px;
  max-height: 265px;
  width: auto;
  height: auto;
} 

.tela_suporte {
  box-shadow: 0 0.5rem 1rem rgba(15, 15, 15, 15);
  width: 450px;  
  color: blue;
  align-items: center;
  text-align: center;
} 

.tela_suporte h3 {
  color: black;
}

.dividir_tela{
  height: 10vh;
  display: grid;
  grid-template-columns: 50% 50%;
  border-style: groove;
  border-block-color: blue;
}


</style>