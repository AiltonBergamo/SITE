<template>
    <div class="column">
        <section class="header_cad">
            <div class="titulo">
                <h1 class="titulo">
                    Nota Fiscal
                    <hr size="6" width="20%" color="lightblue" style="margin-left: 40%;border-radius: 20px;margin-bottom: 10px;">
                </h1>
                <h2>Com a nossas funcionalidades de Nota Fiscal, você pode realizar seu gerenciamento fiscal de forma simplificada.</h2>
                <h2>Junte-se a nós e leve o seu negócio para o próximo nível com o nosso Sistema de Vendas.</h2>
            </div>
        </section>
        <div class="bloco">
            <div class="row">
                <div class="column texto center">
                    <div class="textoCentro">
                        <span class="titulo-sub negrito colorido">Emissão</span><span class="titulo-sub negrito"> de Nota Fiscal</span>
                    </div>
                    <h2>Emita suas notas fiscais com facilidade e eficiência. Nosso sistema cuida da complexidade, deixando mais tempo para você se concentrar no que realmente importa, o seu negócio.</h2>
                </div>
                <div class="tela">
                    <div>
                        <img src="../assets/images/emitirnfe.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="bloco">
            <div class="row">
                <div class="tela">
                    <img src="../assets/images/importarxml.jpg" alt="">
                </div>
                <div class="column center texto">
                    <div class="textoCentro">
                        <span class="titulo-sub negrito">Importação de XML</span>
                    </div>
                    <h2>Diga adeus à entrada manual de dados. Com a nossa funcionalidade de importação de XML, você pode importar as notas de seus fornecedores diretamente para o sistema, sem erros.</h2>    
                </div>                    
            </div>
        </div>    
        <div class="bloco">
            <div class="row center">
                <div class="column" style="width: 30%;">
                    <h3 class="tituloLista">Veja como é simples:</h3>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ghgg_fukbvU?si=kmzKiQfzvQy-oFqX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FuncionalidadeNotaFiscal"
    }
</script>

<style scoped>
    *{
        color:var(--texto-padrao);
    }
    .header_cad *{
        color:white;
    }
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
    section{
        margin-top: 75px;
    }
    .textoCentro{
        width: 100%;
        text-align: center;
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
        position: relative;
        width: 50%;
        align-items: center;
        justify-content: center;
    }    
    .bloco .tela img{
        z-index: 0;
        width: 80%;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 3px solid #3b449900;
        border-radius: 5px;
        transition: width 1.5s, border 2s;
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