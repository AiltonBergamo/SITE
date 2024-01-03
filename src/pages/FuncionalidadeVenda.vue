<template>
    <div class="column">
        <section class="header_cad">
            <div class="titulo">
                <h1 class="titulo">
                    Venda
                    <hr size="6" width="4%" color="lightblue" style="margin-left: 48%;border-radius: 20px;margin-bottom: 10px;">
                </h1>
                <h2>Nosso sistema permite que você realize vendas de maneira eficiente e sem complicações. Com apenas alguns cliques, você pode registrar uma venda, adicionar produtos e finalizar a transação.</h2>
                <h2>Junte-se a nós e leve o seu negócio para o próximo nível com o nosso Sistema de Vendas.</h2>
            </div>
        </section>
        <div class="bloco">
            <div class="row">
                <div class="column texto center">
                    <div class="textoCentro">
                        <span class="titulo-sub negrito colorido">Alterar</span><span class="titulo-sub negrito"> vendas</span>
                    </div>
                    <h2>Cometeu um erro? Sem problemas! Nossa funcionalidade de alteração de venda permite que você faça ajustes em vendas já registradas. Você pode adicionar ou remover produtos, alterar quantidades e muito mais.</h2>
                </div>
                <div class="tela">
                    <img src="../assets/images/alterarVenda.png" alt="">
                </div>
            </div>
        </div>
        <div class="bloco">
            <div class="row center">
                <div class="column" style="width: 50%;">
                    <div class="textoCentro">
                        <span class="titulo-sub negrito colorido">Histórico</span><span class="titulo-sub negrito"> de Vendas</span>
                    </div>
                    <h2>Acompanhe o desempenho do seu negócio com nosso recurso de histórico de vendas. Veja todas as suas vendas passadas, analise tendências e use essas informações para tomar decisões informadas sobre o futuro do seu negócio.</h2>
                </div>
            </div>
        </div>
        <div class="bloco">
            <div class="row">
                <div class="tela">
                    <img src="../assets/images/condicional.jpg" alt="">
                </div>
                <div class="column center texto">
                    <div class="textoDireita">
                        <span class="titulo-sub negrito">Gerenciamento de </span><span class="titulo-sub negrito colorido">Condicional</span>
                    </div>
                    <h2>Nosso sistema também oferece uma funcionalidade de gerenciamento de condicional, permitindo que você gerencie vendas condicionais de forma eficaz. Você pode acompanhar os produtos em consignação, registrar vendas condicionais e muito mais.</h2>    
                </div>                    
            </div>
        </div>            
    </div>
</template>

<script>
    export default {
        name: "FuncionalidadeVenda"
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
        height: 80%;
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