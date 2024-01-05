<template>
    <form @submit.prevent="valida">
        <section class="header">
            <h1>Fale com um especialista</h1>
            <hr size="6" width="15%" align="center" color="white">
            <h3>Peça seu orçamento e tire dúvidas com nossa equipe preenchendo as informações</h3>
            <div class="Linha_01">
                <div class="input_container">
                    <label for="nome">Nome<span v-if="!required.nome">*</span><span class="required" v-if="required.nome">* Campo Obrigatório</span></label>
                    <input type="text" placeholder="&nbsp;Nome*" name="nome" id="nome" v-model="form.nome">
                </div>
                <div class="input_container">
                    <label for="nome">Email<span v-if="!required.email && !invalido.email">*</span><span class="required" v-if="required.email">* Campo Obrigatório</span><span class="required" v-if="invalido.email">* Email Inválido</span></label>
                    <input type="text" placeholder="&nbsp;Email*" name="email" id="email" v-model="form.email">
                </div>
                <div class="input_container">
                    <label for="nome">Whatsapp<span v-if="!required.whatsapp">*</span><span class="required" v-if="required.whatsapp">* Campo Obrigatório</span></label>
                    <input type="text" @keydown="maskfone" v-model="form.celular" placeholder="&nbsp;Whatsapp*" name="phoneNumber"
                        id="celular" maxlength="15">
                </div>
            </div>
            <div class="Linha_01">
                <div class="input_container">
                    <label for="nome">Empresa</label>
                    <input type="text" placeholder="&nbsp;Empresa" name="subject" id="assunto" v-model="form.empresa">
                </div>
                <div class="input_container">
                    <label for="nome">Seguimento de atuação aberto</label>
                    <input type="text" placeholder="&nbsp;Seguimento" name="phoneNumber" id="celular" v-model="form.seguimento">
                </div>
                <div class="input_container">
                    <label for="nome">Quantos colaboradores a empresa tem?</label>
                    <input type="number" min="1" placeholder="&nbsp;Colaboradores" name="subject" id="assunto" v-model="form.funcionarios">
                </div>

            </div>
            <div class="textoMessage">
                <div class="Mensagem">
                    <div class="input_container">
                        <label for="nome">Como podemos ajudar?</label>
                        <textarea name="message" placeholder="Como podemos ajudar?" id="messagem" cols="60"
                            rows="10"></textarea>
                    </div>
                </div>
                <div class="work">
                    <div class="inputBox">
                        <input type="file" id="fileUpload" name="files" multiple="multiple">
                    </div>
                    <div>
                        <input type="submit" value="Enviar e-mail" class="btn">
                    </div>
                </div>
            </div>
        </section>
    </form>
</template>

<script>
export default {
    name: "Contato-page",
    data() {
        return { 
            form: {
                nome: '',
                email: '',
                celular: '',
                empresa: '',
                seguimento: '',
                funcionarios: 1,
            },
            required: {
                nome: false,
                email: false,
                whatsapp: false,
            },
            invalido:{
                email: false,
            }
        }
    },
    methods: {
        maskfone() {
            this.form.celular = this.form.celular.replace(/\D/g, "")
            this.form.celular = this.form.celular.replace(/^(\d{2})(\d)/g, "($1) $2")
            this.form.celular = this.form.celular.replace(/(\d)(\d{4})$/, "$1-$2")
        },
        valida(){
            var invalido = false;
            if(this.form.nome.trim()===''){
                this.required.nome = true;
                invalido = true;
            }
            else{
                this.required.nome = false;
            }
            if(this.form.email.trim()===''){
                this.required.email = true;
                invalido = true;
            }
            else{
                this.required.email = false;
            }
            if(this.form.celular.trim()===''){
                this.required.whatsapp = true;
                invalido = true
            }
            else{
                this.required.whatsapp = false;
            }
            invalido = this.validaEmail();
            if(invalido){
                return;
            }
            //envia o email
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


<style>
.required{
    color: red;
    font-size: small;
}
.header {
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

.linha_02 {
    display: inline-block;
    width: 100%;
    justify-content: flex-end;
}

.textoMessage {
    display: grid;
    width: 100%;
    grid-template-columns: 100%;
    padding: 0 2em;
}

.Mensagem {
    align-items: center;
    text-align: center;
}

.Mensagem textarea {
    padding: 0.2rem;
    border-radius: 1rem;
    background: var(--black3);
    text-transform: none;
    color: var(--black1);
    border: 0.1rem solid var(--black1);
    width: 100%;
    height: 100px;
}

.work {
    display: grid;
    flex-direction: column;
    grid-template-columns: 50% 50%;
    align-items: center;
    padding: 0.5em;
    gap: 0.5em;
}

.inputBox {
    position: relative;
    display: inline-block;
    color: white;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    position: relative;
    padding: 10px 30px;
    border-radius: 5px;
    background: #006699;
}

.btn {
    position: relative;
    display: inline-block;
    width: 200px;
    color: white;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    align-items: flex-end;
    text-decoration: none;
    position: relative;
    padding: 10px 20px;
    border-radius: 5px;
}
.btn:hover{
    cursor: pointer;
    color: black;
    background-color: white;
    transition: color 0.5s, background-color 0.5s;
}
#fileUpload, #file-upload-button{
    cursor: pointer;
}
.input_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
}
input[type=number] {
    padding: 0.2rem;
    border-radius: 1rem;
    background: var(--black3);
    text-transform: none;
    color: var(--black1);
    border: 0.1rem solid var(--black1);
    width: 350px;
    height: 35px;
}
</style>
