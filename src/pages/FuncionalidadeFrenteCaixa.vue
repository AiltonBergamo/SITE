<template>
    <section class="header_cad">
        <div class="column">
            <div class="titulo">
                <h1 class="titulo">
                    Frente de Caixa
                    <hr size="6" width="20%" color="lightblue" style="margin-left: 40%;border-radius: 20px;margin-bottom: 10px;">
                </h1>
                <h2>Com a nossas funcionalidades de Frente de caixa, você pode simplificar o lançamento de vendas, acompanhar o histórico de caixa e analisar a movimentação de caixa.</h2>
                <h2>Junte-se a nós e leve o seu negócio para o próximo nível com o nosso Sistema de Vendas.</h2>
            </div>
            <div class="bloco">
                <div class="row">
                    <div class="column texto center">
                        <div class="textoEsquerda">
                            <p class="titulo-sub negrito">Agilize suas vendas</p>
                        </div>
                        <h2>Ao utilizar a funcionalidade de lançamento de vendas suas vendas serão realizadas rapidamente. Com uma interface simples e intuitiva permite um aprendizado rápido e instintivo.</h2>
                    </div>
                    <div class="tela">
                        <img src="../assets/images/caixa.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="bloco">
                <div class="row center">
                    <div class="column" style="width: 50%;">
                        <span class="titulo-sub negrito">Acompanhe os resultados</span>
                        <h2>Com a nossa consulta de caixa alem de analizar as movientações a praze a a vista d caixa. Também Reune informações como totalizadors de vendas, condicionais, vendas canceladas e trocas.</h2>
                    </div>
                </div>
            </div>
            <div class="bloco">
                <div class="row">
                    <div class="tela">
                        <img src="../assets/images/fechamentoCaixa.png" alt="">
                    </div>
                    <div class="column center texto">
                        <div class="textoDireita">
                            <span class="titulo-sub negrito">Fechamento de caixa</span>
                        </div>
                        <h2>O nosso sitema permite uma conferencia de caixa de forma simples e rápida na hora do Fechamento de Caixa.</h2>    
                    </div>                    
                </div>
            </div>            
        </div>
    </section>
</template>

<script>
    export default {
        name: "FuncionalidadeFrenteCaixa"
    }
</script>

<style scoped>
    *{
        color:white;
    }
    .titulo-sub{
        font-size: 40px;
        color: #3b4599;
    }
    h2{
        font-size: 30px;
    }
    .tituloLista{
        font-size: 50px;
    }
    section{
        margin-top: 75px;
    }
    .textoEsquerda{
        width: 100%;
        text-align: left;
    }
    .textoDireita{
        width: 100%;
        text-align: right;
    }
    .row{
        display: flex;
        flex-direction: row;
    }
    .column{
        display: flex;
        flex-direction: column;
    }
    .texto{
        width: 50%;
        padding-left:10px;
    }
    .titulo{
        margin-left: 5%;
        width: 90%;
        color: #3b4599;
    }
    .center{
        align-items: center;
        justify-content: center;
    }
    .bloco{
        align-self: center;
        width: 90%;   
        margin: 20px;
    }
    .bloco p{
        text-align: left;
    }
    .tela{
        width: 50%;
    }
    .bloco .tela img{
        width: 80%;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 3px solid #3b449900;
        border-radius: 5px;
        transition: width 1.5s, border 2s;
    }
    .bloco .tela img:hover{
        width: 95%;
        transition: width 1.5s, border 2s;
        border: 3px solid #3b4599;
        border-radius: 5px;
        box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, 0.5);
    }
    .negrito{
        font-weight: bold;
    }
    h1{
        font-size: 40px;
    }
    .header_cad{
        align-items: center;
        text-align: center;
        width: 100%;
        border-radius: 20px;
        background: var(--fundo-padrao);
        overflow: auto;
    }
    iframe{
        border-radius: 10px;
    }
</style>