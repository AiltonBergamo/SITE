<template>
  <div class="container__topo">
    <div class="item__1">
      <router-link to="/">
        <img alt="Vue logo" src="./assets/LogoTranspBranco.png" class="logo-img">
      </router-link>
    </div>
    <div class="item__4">
      <router-link to="/funcional">
        <a href="#">Funcionalidades</a>
      </router-link>      
    </div>
    <div class="item__4">
      <router-link to="/planos">
        <a href="#">Planos e preços</a>
      </router-link>
    </div>
    <div class="item__4">
      <router-link to="/contato">
        <a href="#">Fale conosco</a>
      </router-link>
    </div>
    <div class="item__5">
      <router-link to="/about">
        <a href="#" >Sobre</a>
      </router-link>
    </div>
    <div class="item__6">
      <p href="#">Entrar</p>
    </div>
  </div>
  <router-view>

  </router-view>
  <footer class="footer">
    <div class="box-container">
      <div class="box">
        <h3>Contato</h3>
        <a href="tel:+554499972-8673"><i class="fas fa-phone" target="_blank"></i>&nbsp;+55 (44) 99972-8673</a>
        <a href="tel:+554499961-5259"><i class="fas fa-phone" target="_blank"></i>&nbsp;+55 (44) 99961-5259</a>
        <a href="tel:+55443232-6083"><i class="fas fa-phone" target="_blank"></i>&nbsp;+55 (44) 3232-6083</a>
        <a href="tel:+55443015-2439"><i class="fas fa-phone" target="_blank"></i>&nbsp;+55 (44) 3015-2439</a>
      </div>
    </div>
    <div class="box-container">
      <div class="box">
        <h3>E-mail</h3>
        <a href="mailto:sac@infobds.com.br"><i class="fas fa-envelope" target="_blank"></i>&nbsp;sac@infobds.com.br</a>
        <a href="mailto:suporte@infobds.com.br"><i class="fas fa-envelope" target="_blank"></i>&nbsp;suporte@infobds.com.br</a>
        <h5>Desenvolvido por BDS - Informática!</h5>
      </div>      
    </div>      
    <div class="box-container">
      <div class="box">
        <h3>Siga-nos</h3>
        <a href="#" target="_blank"><i class="fab fa-instagram"></i>&nbsp;Instagram</a>
        <a href="https://www.facebook.com/bdsSistema" target="_blank"><i class="fab fa-facebook-f"></i>&nbsp;Facebook</a>        
        <a href="#" target="_blank"><i class="fab fa-linkedin"></i>&nbsp;Linkedin</a>
        <a href="#" target="_blank"><i class="fab fa-telegram-plane"></i>&nbsp;Telegram</a>
      </div>    
    </div>
  </footer>
  <a id="float-whats" href="https://api.whatsapp.com/send?phone=5544999728673&amp;text=Olá, vim através do site..." target="_blank">
      <img src="./assets/whatsapp-brands.svg" id="float-whats-icon">
  </a> 
</template>

<script>

import "./assets/global.css"
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap');
* {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container__topo {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  max-width: 100%;
  max-height: 200px;
  height: 75px;
  align-items: center;
  border-bottom: 4mm ridge rgba(245, 245, 243, 0.2);
}

.item__1 {
  display: flex;
  width: 30%;
  background-color: transparent;
  text-align: end;
  justify-content: center;
}

.logo-img {
  background-color: transparent;
  max-width: 140px;
  max-height: 80px;
  width: auto;
  height: auto;
}

.item__2 {
  width: 25%;
  display: flex;
  justify-content: center;
  font-size: 16px;
}

.item__2 p:hover {
  color: rgb(192, 191, 194);
  border: 30px solid white;
  background-color: rgb(241, 243, 245);
  transition: 1s;
}

.item__3 {
  width: 25%;
  display: flex;
  justify-content: center;
  font-size: 16px;
}

.item__3 p:hover {
  color: rgb(192, 191, 194);
  border: 30px solid white;
  background-color: rgb(241, 243, 245);
  transition: 1s;
}

.item__4 {  
  width: 25%;
  display: flex;
  justify-content: center;
  font-size: 16px;
}

.item__4 a {
    text-decoration: none; 
    color: black;
}

.item__4 a:hover {
  color: rgb(192, 191, 194);
  border: 30px solid white; 
  background-color: rgb(241, 243, 245);
  transition: 1s;
}

.item__5 {
  display: flex;
  justify-content: center;
  font-size: 18px;
  width: 20%;
}

.item__5 a {
    text-decoration: none; 
    color: black;
}

.item__5 a:hover {
  color: rgb(192, 191, 194);
  border: 30px solid white; 
  background-color: rgb(241, 243, 245);
  transition: 1s;
}

.item__6 {
  width: 40%;
  display: flex;
  justify-content: center;
  font-size: 20px;
}

.item__6 p:hover {
  color: rgb(62, 240, 86);
  border: 30px solid white;
  background-color: rgb(241, 243, 245);
  transition: 1s;
}

.footer {
  height: 20vh;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  flex-direction: column;
}

 .box-container {
  display: flex;
  flex-direction: column;
  background-color: bisque;
  text-align: center;
  justify-content: center;  
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;       
  gap: 5px; 
  color: var(--navbar);
}

.footer .box-container .box a:hover {
  color: var(--navbar);
}
.footer .box-container .box a:hover i {
  padding-right: 0.5rem;
}

#float-whats {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  background-color: green;
  padding: 30px;
  border-radius: 50%;
  border-width: 0px;
  cursor: pointer;
  box-shadow: 2px 2px 6px 3px #292929;
  transition: 420ms;
  user-select: none;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}
#float-whats-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  filter: invert(100%);
}
#float-whats:hover {
  box-shadow: 2px 2px 6px 3px #fff;
  transform: translateY(-2px);
}
#float-whats:active {
  transform: translateY(4px);
}

</style>
