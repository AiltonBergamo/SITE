<template>
    <div class="column">
        <section class="header_cad">
            <div class="titulo">
                <h1 class="titulo">
                    Gerencie seu Estoque
                    <hr size="6" width="20%" color="lightblue" style="margin-left: 40%;border-radius: 20px;margin-bottom: 10px;">
                </h1>
                <h2>Com a nossas funcionalidades de Estoque, você pode automatizar a entrada de produtos, acompanhar o histórico, transferir estoque entre empresas.</h2>
                <h2>Junte-se a nós e leve o seu negócio para o próximo nível com o nosso Sistema de Vendas.</h2>
            </div>
        </section>
        <div class="bloco">
            <div class="row">
                <div class="column texto center">
                    <div class="textoCentraliza">
                        <span class="titulo-sub negrito colorido">Automatize</span><span class="titulo-sub negrito"> suas entradas</span>
                    </div>
                    <h2>Ao utilizar a funcionalidade de compra seus estoques são automaticamente abastecidos. Nunca mais faça restoque manual.</h2>
                </div>
                <div class="tela">
                    <div class="destaque" style="top: calc(50% - 60px);left: calc(50% - 180px);"></div>
                    <div>
                        <img src="../assets/images/estoque.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="bloco">
            <div class="row center">
                <div class="column" style="width: 50%;">
                    <div class="textoCentro">
                        <span class="titulo-sub negrito">Acompananhe o </span><span class="titulo-sub negrito colorido">histórico de produtos</span>
                    </div>
                    <h2>Acompanhe as entradas e saidas do sistemas para obter informações sobre o desempenho de seus produtos.</h2>
                </div>
            </div>
        </div>
        <div class="bloco">
            <div class="row">
                <div class="tela">
                    <div class="destaque" style="top: calc(50% - 100px);left: calc(50% - 230px);width: 80%;height: 50%;"></div>
                    <img src="../assets/images/transferencia.png" alt="">
                </div>
                <div class="column center texto">
                    <div class="textoDireita">
                        <span class="titulo-sub negrito">Transferencia de estoque</span>
                    </div>
                    <h2>O nosso sitema permite que o estoque seja transferido entre multiplas empresas de forma simples e rápida.</h2>    
                </div>                    
            </div>
        </div>    
        <div class="bloco">
            <div class="row center">
                <div class="column" style="width: 30%;">
                    <h3 class="tituloLista">Como <span class="titulo-sub negrito colorido">Transferir Estoque</span>:</h3>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ghgg_fukbvU?si=kmzKiQfzvQy-oFqX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FuncionalidadeEstoque"
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
    .textoEsquerda{
        width: 100%;
        text-align: left;
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
        /* color: var(--texto-titulo); */
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
    /* .bloco .tela img:hover{
        width: 95%;
        transition: width 1.5s, border 2s;
        border: 3px solid #3b4599;
        border-radius: 5px;
        box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, 0.5);
    } */
    .destaque{
        width: 60%;
        height: 180px;
        position: absolute;
        z-index: -1;
        border-radius: 32px;
        background-color: var(--destaque);
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