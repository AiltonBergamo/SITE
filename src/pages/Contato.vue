<template>
    <section class="header">
        <h1>Fale com um especialista</h1>
        <hr size="6" width="25%" align="center" color="white">
        <h3>Peça seu orçamento e tire dúvidas com nossa equipe preenchendo as informações</h3>
        <div class="Linha_01">
            <div class="input_container">
                <label for="nome">Nome*</label>
                <input type="text" placeholder="&nbsp;Nome*" name="nome" id="nome" value="">
            </div>
            <div class="input_container">
                <label for="nome">Email*</label>
                <input type="text" placeholder="&nbsp;Email*" name="email" id="email" value="">
            </div>            
            <div class="input_container">
                <label for="nome">Whatsapp*</label>
                <input type="text" @keydown="maskfone" v-model="celular" placeholder="&nbsp;Whatsapp*" name="phoneNumber"
                    id="celular">
            </div>            
        </div>
        <div class="Linha_01">
            <div class="input_container">
                <label for="nome">Empresa*</label>
                <input type="text" placeholder="&nbsp;Empresa*" name="subject" id="assunto" value="">
            </div>            
            <div class="input_container">
                <label for="nome">Seguimento de atuação aberto*</label>
                <input type="text" placeholder="&nbsp;Seguimento" name="phoneNumber" id="celular" value="">
            </div>            
            <div class="input_container">
                <label for="nome">Quantos colaboradores a empresa tem?*</label>
                <input type="text" placeholder="&nbsp;Colaboradores" name="subject" id="assunto" value="">
            </div>            

        </div>
        <div class="textoMessage">
            <div class="Mensagem">
                <div class="input_container">
                    <label for="nome">Como podemos ajudar?</label>
                    <textarea name="message" placeholder="Como podemos ajudar?" id="messagem" cols="60" rows="10"></textarea>
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
</template>

<script>
export default {
    name: "Contato-page",
    data() {
        return { celular: '' }
    },
    methods: {
        maskfone() {
            this.celular = this.celular.replace(/\D/g, "")
            this.celular = this.celular.replace(/^(\d{2})(\d)/g, "($1) $2")
            this.celular = this.celular.replace(/(\d)(\d{4})$/, "$1-$2")
        }
    }

}


</script>


<style>
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 68vh;
    background-color: rgb(109, 141, 114);
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

.input_container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
}

</style>
