
## Teste IBM Watson - D1 SMARKIO

:books: Teste prático para a vaga de "**Desenvolvimento de Assistentes Virtuais**" na empresa **D1 Smarkio** utilizando Node.js, MySQL e a API Text to Speech do IBM Watson.

<h3 id="content">Tabela de Conteúdos</h3>
<ul>
	<li><a href="#objetive">1. Objetivo</a></li>
	<li><a href="#requirements">2. Pré-requisitos</a></li>
	<li><a href="#directories">3. Estrutura de Diretórios</a></li>
	<li><a href="#execute">4. Como Executar</a></li>
</ul>

<h3 id="objetive">1. Objetivo</h3>

Desenvolver uma aplicação web em Node.js com banco de dados MySQL. A aplicação consistirá somente de uma página com dois painéis: no painel
posicionado a esquerda, o usuário poderá cadastrar novos comentários. No painel da direita todos os comentários cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado executa um áudio de leitura do comentário utilizando a API Text to Speech do IBM Watson.

![A imagem exibe a versão final do projeto contendo duas seções: uma seção para o preenchimento e envio do comentário, e uma seção para a visualização de comentários. Cada comentário contêm um botão que ao ser clicado executa um áudio de leitura do comentário](https://lh3.googleusercontent.com/NxsgNSnu7r8zz5J-_UrcG6Lbetv7qJGSD8nTDfmT7AIJMl4VEx4z_ks4U-ICkkQsB_CK2LX2hx_v0ow5c8rv3j2_HpKNpbTDPH_IRYjtCfTLkXLTH_pOUoE6so64WfpAbmCim52Lnw=w2400)
<p align="center"> Figura 1. Screenshot da versão final do projeto</p>

<h3 id="requirements">2. Pré-requisitos</h3>

Os pré-requisitos para a utilização deste projeto são:

<ul>
	<li>Instalar <a target="_blank" href="https://nodejs.org/en/">Node.js</a> em sua máquina;</li>
	<li>Possuir um servidor para <a target="_blank" href="https://dev.mysql.com/downloads/mysql/">MySQL</a> inicializado;</li>
	<li> Instalar o gerenciador de pacotes <a target="_blank" href="https://www.npmjs.com">npm</a>;
	<li>Utilizar um navegador moderno para exibir o projeto;</li>
	<li>Um cadastro na IBM para a utilização da <a target="_blank" href="https://www.ibm.com/cloud/watson-text-to-speech">API Text to
Speech</a> contendo API_KEY e URL.</li>
</ul>

<h3 id="directories">3. Estrutura de Diretórios</h3>
Este projeto utiliza o padrão de projeto de software MVC. Aqui se encontra uma breve visão geral da estrutura de diretórios do projeto:

├───app (código central da aplicação)<br>
│   ├───config (configurações da aplicação)<br>
│   ├───controllers (lógicas da aplicação)<br>
│   ├───helpers (funções auxiliares)<br>
│   ├───models (banco de dados e tabelas)<br>
│   ├───routes (gerenciador de rotas HTTP)<br>
│   ├───views (lógicas de apresentação)<br>
│   │   └───components (modularização de páginas)<br>
│   └───watson-api (provê acesso a API IBM-TTS)<br>
├───node_modules (dependências da aplicação)<br>
└───public (diretório de arquivos públicos)<br>
	    ├───css (arquivos de estilização)<br>
	    ├───js (arquivos javascript)<br>
	    │   └───modules (modularização de códigos)<br>
	    └───sounds (diretório de saída de arquivos de áudio)<br>
    
<h3 id="execute">4. Como Executar</h3>
Para executar este projeto, siga os passos descritos abaixo:
<ol>
	<li>Faça o <a href="https://github.com/guiIher-me/TextToSpeech-D1-SMARKIO/archive/refs/heads/main.zip">download</a> e desconpacte a pasta; ou clone este projeto para sua máquina;</li>
	<li>Acesse o diretório raiz/principal do projeto usando um terminal;</li>
	<li><a target="_blank" href="https://docs.npmjs.com/cli/v7/commands/npm-install">Instale as dependências</a> do projeto, utilizando o gerenciador de pacotes npm, via linha de comando, executando: 
	
```
npm install
```
<li>Inicialize e selecione um novo banco de dados MySQL em sua máquina utilizando suas credenciais de usuário e senha. Este banco de dados deverá ser utilizado durante a execução do projeto;</li>
<li>Acesse novamente o diretório raiz/principal do projeto e abra o arquivo `.env.example`, aqui estão exemplos de valores para as variáveis de ambiente do sistema: </li>

```
#Selecione a porta na qual o servidor Node.js será executado
SERVER_PORT=3000

#Selecione o host, usuário, senha e nome da base de dados do projeto
DB_HOST = localhost
DB_USER = your_user
DB_PASS = yout_pass
DB_DATABASE = your_database

#Modifique os parâmetros de acesso da API do IBM - Text to Speech
IBM_TTS_APIKEY = r8s9qrz9452Ra-SDs8aRQC-sda454asd2w5f4ds5454d
IBM_TTS_URL = https://api.au-syd.text-to-speech.watson.cloud.ibm.com/instances/7454u787-c874-4ea8-a8q8-454y57878721
```

<li>Modifique o nome do arquivo `.env.example` para `.env` e pronto, a  parte de configurações está concluída! </li>
<li>Agora, para executar o projeto, acesse a linha de comando no diretório raiz/principal do projeto e execute o comando:</li>

```
node app.js
```

<li>Enjoy!</li>
</ol>
