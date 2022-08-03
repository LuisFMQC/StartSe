const articles = [
    {
        id: 1,
        title: 'Ex-CFO do Nubank e Ex-CEO da 99 se unem em nova aposta',
        description: 'O mercado de crédito de carbono movimentou US$ 25 milhões no país em 2021, o que equivale a 17 milhões de toneladas de carbono capturados e convertidos em crédito. Esses números devem dar um salto nos próximos anos, já que a estimativa é que a partir de 2050 o mundo precise compensar 10 bilhões de toneladas de carbono anualmente. E a Mombak está se preparando para esse aumento de demanda.'
    },
    {
        id: 2,
        title: 'StartSe University recebe executivos da One7 no Vale do Silício',
        description: 'A StartSe University do Vale do Silício está recebendo, ao longo de quase um mês, executivos da One7. A One7, empresa especializada no mercado de crédito para pessoas jurídicas, possui um Membership StartSe. Agora, a companhia possui posições fixas de trabalho na StartSe University e possibilita que seus colaboradores acessem o maior ecossistema de inovação do mundo.'
    }
];

function getArticles(){
    return articles;
}

function getArticlesById(articleId){
    return articles.find(article => {
        return article.id === Number(articleId);
    });
}

export { getArticles, getArticlesById };