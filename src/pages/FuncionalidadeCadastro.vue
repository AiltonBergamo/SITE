<template>
    <div class="column">
        <section class="header_cad">
            <div class="titulo">
                <h1>
                    Gerecie seus cadastros
                    <hr size="6" width="20%" color="lightblue" style="margin-left: 40%;border-radius: 20px;margin-bottom: 10px;">
                </h1>
                <h2>Com a nossas funcionalidades de Cadastro, você pode organizar suas informações, acompanhar o histórico, facilitar a comunicação e aumentar a eficiência. Tudo isso com a entrada de dados automatizada e formulários fáceis de usar. Junte-se a nós e leve o seu negócio para o próximo nível com o nosso Sistema de Vendas.</h2>
            </div>
        </section>
        <div class="bloco">
            <div class="row">
                <div class="column texto center">
                    <div class="textoCentro">
                        <span class="titulo-sub negrito colorido">Organize</span><span class="titulo-sub negrito"> suas informações</span>
                    </div>
                    <h2>Mantenha todos os seus dados em um só lugar. Nunca mais perca informações importantes</h2>
                </div>
                <div class="tela">
                    <img src="../assets/images/cadastro.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="bloco">
            <div class="row center">
                <div class="column" style="width: 50%;">
                    <div class="textoCentro">
                        <span class="titulo-sub negrito">Facilita a </span><span class="titulo-sub negrito colorido">comunicação</span>
                    </div>
                    <h2>Com todos os detalhes à mão, você pode se comunicar de maneira mais eficaz e personalizada.</h2>
                </div>
            </div>
        </div>
        <div class="bloco">
            <div class="row">
                <div class="tela">
                    <img src="../assets/images/eficiencia.jpg" alt="">
                </div>
                <div class="column center texto">
                    <div class="textoCentro">
                        <span class="titulo-sub negrito">Aumenta a </span><span class="titulo-sub negrito colorido">eficiência</span>
                    </div>
                    <h2>Economize tempo com a entrada de dados automatizada e formulários de cadastro fáceis de usar.</h2>    
                </div>                    
            </div>
        </div>
        <div class="bloco">
            <div class="column center">
                <h3 class="tituloLista">Nosso sistema possui:</h3>
                <div class="lista" style="width: 80%;">
                    <div class="textoEsquerda">
                        • Cadastro de Clintes
                    </div>
                    <div class="textoCentro">
                        • Cadastro de Vendedores
                    </div>
                    <div class="textoDireita">
                        • Cadastro de Produtos
                    </div>
                    <div class="textoEsquerda">
                        • Cadastro de Promoções
                    </div>
                    <div class="textoCentro">
                        • Cadastro de Compras
                    </div>                    
                </div>
            </div>
        </div>
        <div class="bloco">
            <div class="row center">
                <div class="column" style="width: 30%;">
                    <h3 class="tituloLista colorido">Principais Cadastros:</h3>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ghgg_fukbvU?si=kmzKiQfzvQy-oFqX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FuncionalidadeCadastro"
    }
</script>

<style scoped>
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