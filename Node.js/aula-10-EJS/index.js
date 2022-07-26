import express from "express";
import * as ArticlesService from "./articleservice.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    const articles = ArticlesService.getArticles();
    res.render('pages/home', { title: 'EJS', articles});
}) 

app.get('/articles/:articleId', (req, res) => {
    const articleId = req.params.articleId;
    const article = ArticlesService.getArticlesById(articleId);
    const title = (article) ? article.title : 'Artigo não encontrado';
    res.render('pages/articles', { title: title, article})
});
