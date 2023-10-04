<template>
    <section class="about">
        <div class="image">
            <img src="../assets/icon/about.jpg" alt="">
        </div>
        <div class="content">
            <div class="heading_tela">
                <h3>Sobre nós</h3>
                <h4>&nbsp;Com mais de 21 anos de mercado, agregamos experiência e tecnologia, o que nos coloca 
                    como uma produtora de softwares com aplicativos para empresas do Ramo
                    Comercial, Industrial, e Agronegócios, utilizando-se de profissionais 
                    com mais de 10 anos de experiência. 
                </h4>
            </div>
            <div class="corpo">
                <h4>&nbsp;Os softwares, compostos por módulos integrados, porém independentes, são uma solução ágil e flexível, 
                    que permite controle global e simultâneo de todos os setores da empresa. Voltados para atender a 
                    necessidade de pequenas, médias e grandes empresas no controle Comercial, 
                    (estoque, financeiro e força de vendas), na industrialização de produtos, 
                    voltado para produção em série, (indústria) controle de cerealistas e insumos (Agronegócios). 
                    O nosso objetivo é prestar um atendimento de qualidade, aliado a um produto eficaz e que acompanha 
                    a evolução tecnológica constante assegurando sempre a satisfação das necessidades de cada cliente. 
                </h4>
            </div>
            <div class="corpo_tela">
                <h3>Objetivos</h3>
                <h4>&nbsp;A família BDS tem como objetivo, buscar o melhor para sua empresa em gerenciamento com software de
                    qualidade além de facilitar o dia a dia de funcionários com o objetivo de proporcionar um bom rendimento no
                    serviço.
                </h4>
            </div>
        </div>
    </section>
    <section class="tecnology">
        <div class="heading">
            <span>Tecnologia Utilizadas</span>
        </div>
    </section>
    <section class="tecnology_img">
        <div class="swiper-container">
            <div class="imgBx">
                <img src="../assets/technology/01.png" />
            </div>
            <div class="imgBx">
                <img src="../assets/technology/02.png" />
            </div>
            <div class="imgBx">
                <img src="../assets/technology/03.png" />
            </div>
            <div class="imgBx">
                <img src="../assets/technology/04.png" />
            </div>
            <div class="imgBx">
                <img src="../assets/technology/05.png" />
            </div>
            <div class="imgBx">
                <img src="../assets/technology/06.png" />
            </div>
            <div class="imgBx">
                <img src="../assets/technology/08.png" />
            </div>
            <div class="imgBx">
                <img src="../assets/technology/11.png" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About-page"
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.about {
    height: 70vh;
    display: inline-block;
    flex-direction: grid;
}

.image {
    display: flex;
    justify-content: center;
    width: 100%;
}

.image img {
    max-width: 350px;
    max-height: 225px;
    width: auto;
    height: auto;
    padding: 1em;
}

.content {
    width: 96%;
    margin-left: 1em;
}

.heading_tela {
    text-align: justify;
    width: 100%;
    padding: 1em;
}

.heading_tela h3 {
    font-size: 21px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    justify-content: center;
}

.heading_tela h4 {
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    text-align: justify;
    justify-content: flex-start;
}

.corpo {
    width: 100%;
    text-align: justify;
    justify-content: flex-start;
    padding: 1em;    
}

.corpo h4{
    font-size: 14px;
    font-weight: 400;
    width: 100%;
}
.corpo_tela {
    text-align: justify;
    justify-content: flex-start;
    width: 100%;
    padding: 1em;
}

.corpo_tela h4{
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    
}

.corpo_tela h3 {
    text-align: center;
}

.tecnology {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1em;
}

.tecnology_img{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1em;
}

.heading {
    font-size: 28px;
    font-weight: 700;
    width: 350px;
    text-align: center;
}

.swiper-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.imgBx {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.imgBx img {
    max-width: 250px;
    max-height: 145px;
    width: auto;
    height: auto;
    padding: 1em;    
}

</style>
