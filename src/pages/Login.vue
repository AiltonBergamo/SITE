<template>
    <div class="tela center">
        <form @submit.prevent="valida">
            <section class="header">
                <span class="login_incorreto" v-if="falhaLogin">Usuário ou senha inválido</span>
                <div class="Linha_01">
                    <div class="input_container">
                        <label for="usuario">Usuário</label>
                        <input type="text" placeholder="&nbsp;Usuário" name="usuario" id="usuario" v-model="form.usuario">
                    </div>
                </div>
                <div class="Linha_01">
                    <div class="input_container">
                        <label for="senha">Senha</label>
                        <input type="password" placeholder="&nbsp;Senha" name="senha" id="senha" v-model="form.senha">
                    </div>
                </div>
                <button class="button"><span class="text-button">Entrar</span></button>
            </section>
        </form>
    </div>
</template>

<script>
export default {
    name: "login-page",
    data() {
        return { 
            form: {
                usuario: '',
                senha: '',
            },
            falhaLogin: false,
        }
    },
    methods: {
        valida(){
            var invalido = false;
            if(this.form.usuario.trim()===''){
                invalido = true;
            }
            if(this.form.senha.trim()===''){
                invalido = true;
            }
            this.falhaLogin = invalido;
            if(invalido){
                return;
            }
            
            //tenta logar
            //falhaLogin recebe true com erro ao logar
        },
        validaEmail(){
            if(this.required.email){
                this.invalido.email = false
            }else{
                const re = /\S+@\S+\.\S+/;
                this.invalido.email = !re.test(this.form.email);
            }
            return this.invalido.email;
        }
    }

}


</script>


<style scoped>
.login_incorreto{
    color: red;
}
.tela{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
}
form{
    width: 30vw;
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.header {
    margin-top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 20vw;
    height: 60vh;
    border-radius: 60px;
    background: var(--fundo-padrao);
    padding: 1em;
    gap: 0.5em;
}
.header h1 {
    color: rgb(253, 254, 255);
}
.header h3 {
    color: rgb(253, 254, 255);
}
.Linha_01 {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0.4em;
}
.input_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    width: 100%;
}
input{
    padding: 0.2rem;
    border-radius: 1rem;
    background: var(--black3);
    text-transform: none;
    color: var(--black1);
    border: 0.1rem solid var(--black1);
    width: 100%;
    height: 35px;
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

</style>
