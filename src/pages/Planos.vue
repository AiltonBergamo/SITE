<template>
  <section class="header_func">
    <div class="header_txt">
      <h1>
        Confira nossos planos
        <hr size="6" width="65%" color="lightblue" style="margin-left: 17.5%;border-radius: 20px;">
      </h1>
    </div>
    <div class="column center">
      <div class="row">
        <a data-anime="left" class="card">
          <h3>Plano A</h3>
          <ul>
            <li>primeiro beneficios</li>
            <li>segundo beneficios</li>
            <li>terceiro beneficios</li>
          </ul>
          <div class="baixo column center">
            <span class="valor">Valor</span>
            <button class="button"><span class="text-button">Contratar</span></button>
          </div>
        </a>
        <a data-anime="left" class="card">
          <h3>Plano B</h3>
          <ul>
            <li>primeiro beneficios</li>
            <li>segundo beneficios</li>
            <li>terceiro beneficios</li>
          </ul>
          <div class="baixo column center">
            <span class="valor">Valor</span>
            <button class="button"><span class="text-button">Contratar</span></button>
          </div>
        </a>
        <a data-anime="left" class="card"
          href="/funcional/frenteCaixa">
          <h3>Plano C</h3>
          <ul>
            <li>primeiro beneficios</li>
            <li>segundo beneficios</li>
            <li>terceiro beneficios</li>
          </ul>
          <div class="baixo column center">
            <span class="valor">R$00,00</span>
            <button class="button"><span class="text-button">Contratar</span></button>
          </div>
        </a>
      </div>
    </div> 
  </section>
</template>

<script>
export default {
  name: "planos-page"
}
</script>

<style scoped>
li{
  font-weight: bold;
  font-size: 18px;
}
h3{
  margin-top: 10px;
}
.valor{
  font-weight: bolder;
  font-size: 30px;
}
.button{
  margin: 10px;
  margin-bottom: 20px;
  width: 30%;
  height: 43px;
  border-radius: 15px;
  background-color: var(--destaque);
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
}
.button:hover{
  cursor: pointer;
}
.text-button{
  color: white;
  font-weight: bold;
}
.center{
  align-items: center;
  justify-content: center;
}
.baixo{
  height: 100%;
  width: 100%;
  justify-content: end;
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
.header_txt{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
.card {  
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: var(--fundo-padrao);  
  width: 320px;
  height: 400px;
  border-radius: 10px;
  align-items: center;
  cursor: default;
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