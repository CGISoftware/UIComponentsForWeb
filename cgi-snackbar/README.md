# CGI Software UI components - Cgi Snackbar

Importando o componente no projeto!

### Tech

As bibliotecas necessarias para tudo funcionar corretamente são as seguintes, lembre-se de baixar todas:

* [Vue.js][https://vuejs.org/]
* [Vuetify - Material Design for Vue][https://vuetifyjs.com/pt-BR/]

E claro, a nossa biblioteca no GitHub.

### Passos necessarios

Instale as dependências dentro da pasta do seu projeto.

```sh
$ git clone https://github.com/ViniciusBoscardin/CGIUiComponents.git
```

Em seu HTML desejado, inclua no header as seguintes bibliotecas.

```html
<!-- Vue Default Components -->
<link href="/web/css/vuetify/vuetify.min.css" rel="stylesheet">
<script src="/web/js/vue/vue.js"></script>
<script src="/web/js/vuetify/vuetify.js"></script>
```

Antes da TAG ```<\body>``` quase no final do arquivo, inclua o componente do snackbar setando o caminho destino correto dele.

```html
<!--CGI Components-->
<script src="/web/cgi-components/cgi-snackbar/cgi.snackbar.js"></script>
```

Feito isso o proximo passo é criar o seguinte trecho de HTML:

```html
<div id="app">
    <cgi-snackbar ref="cs"></cgi-snackbar>
</div>
```

Pronto! Agora basta usarmos os métodos do componente dentro do seu arquivo Javascript. Abaixo vai um exemplo.

```javascript
cgiSnackbar.$refs.cs.setText("Permissões salvas com sucesso");
cgiSnackbar.$refs.cs.setType('default');
cgiSnackbar.$refs.cs.setSnackbar(true);
```
