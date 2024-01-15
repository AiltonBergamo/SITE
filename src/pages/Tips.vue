<template>
    <div class="column">
        <section class="header_cad">
            <div class="titulo">
                <h1>
                    Dicas
                    <hr size="6" width="5%" color="#0597F2" style="margin-left: 48%;border-radius: 20px;margin-bottom: 10px;">
                </h1>
                <h2>Bem-vindo à nossa seção de dicas! Aqui oferecemos conselhos e dicas úteis para melhorar seu negócio, evitando despedicios e otimizando atividades.</h2>
            </div>
        </section>
        <div class="bloco">
            <div class="row center">
                <div class="column" style="width: 30%;">
                    <h3 class="tituloLista colorido">Evite Desperdício de Etiquetas:</h3>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QDMeaWnGCVE?si=0_brd-IPml4P8JAR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GeneralTips"
    }
</script>

<style scoped>
    .colorido{
        color: var(--destaque)
    }
    .titulo-sub{
        font-size: 40px;
    }
    h2{
        text-align: justify;
        font-size: 25px;
    }
    .tituloLista{
        font-size: 50px;
    }
    .lista{
        font-size: 30px;
    }
    section{
        margin-top: 75px;
    }
    .textoCentro{
        width: 100%;
        text-align: center;
    }
    .textoDireita{
        width: 100%;
        text-align: right;
    }
    .textoEsquerda{
        width: 100%;
        text-align: left;
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
        width: 90%;
        margin-top: 10px;
        margin-bottom: 10px;
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
</style>