HTTP - HYPERTEXT TRANSFER PROTOCOL ('Protocolo de Transferência de HyperTexto')

Visão geral
-Permite troca de informações e dados na internet
-Uma troca de mensagens
-HTML,CSS,Scripts,Imagens,Videos
-Uma chamada para cada um desses recursos

navegador faz a request e o srvidor devolve a response

CONCEITOS

SIMPLES
-LEGÍVEL
-QUALQUER PESSOA

CLIENTE/SERVIDOR
-REQUISIÇÃO/RESPOSTA

STATELESS
-NÃO GUARDA INFORMAÇÕES
-NÃO EXISTE RELAÇÃO ENTRE CONEXÕES
-EXEMPLO JOGAR UMA MOEDA: PODE VIR CARA OU COROA, NÃO GUARDA UM ESTADO DEFINIDO CADA VEZ QUE JOGAR A MOEDA DA UM VALOR DIFERENTE
-SESSÕES - SÃO USADAS PRA GUARDAR AS INFORMAÇÕES
--COOKIES
--STORAGES

EXTENSÍVEL
-HEADERS - ATRAVÉS DO CABEÇALHO, PODEMOS FAZER DIVERSAS TROCAS DE INFORMAÇÕES ENTRE O CLIENTE-SERVIDOR, CONFORME A NECESSIDADE
-BODY - CORPO DO PEDIDO OU DA RESPOSTA

CLIENTE
-QUEM É O CLIENTE? USER AGENT -> BROWSER OU O cURL, ENTIDADE QUE DÁ INICIO À COMUNICAÇÃO
-PEDIDOS -> AÇÕES DO CLIENTE (GET,POST,PUT,DELETE)

SERVIDOR
-SE APRESENTA COMO UMA MÁQUINA EM ALGUMN LUGAR DO MUNDO
-PREPARADO PARA OUVIR E PROCESSAR
-VÁRIOS SERVIDORES EM UM COMPUTADOR
-RESPOSTA -> STATUS CODE (200,404,500)

PROXIES
-REPRESENTANTES
-FICA ENTRE O CLIENTE E O SERVIDOR
-AJUDAM A FAZER O TRANSPORTE DOS DADOS
-DIVERSAS FUNÇÕES (CACHE, FILTRO(TIPO ANTI VIRUS OU CONTROLE PARENTAL), LOAD BALANCING(DISTRIBUIÇÃO DE CARGA), AUTENTICAÇÃO, AUTORIZAÇÃO)

URI -> UNIFORM RESOURCE IDENTIFIER
-IDENTICAR UM RECURSO
-NOME OU LOCALIZAÇÃO
-EXEMPLO: VOCÊ É UM RECURSO, SEU NOME, SUA LOCALIZAÇÃO

RESOURCE -> RECURSO

- O ALVO DO PEDIDO
- QUALQUER COISA IDENTIFICÁVEL/ENTIDADE
  --DIGITAL -> EMAIL
  --ABSTRATA-> SESSÃO,AUTENTICAÇÃO
  --FÍSICA -> PRODUTOS, USUÁRIOS
  --SE PODEMOS IDENTIFICAR, NOMEAR, ENDEREÇAR OU MANIPULAR, ESTAMOS FALANDO DE UM RECURSO

LOCATOR
-URL -> UNIFORM RESOURCE LOCATOR
--COMPONENTES
---OBRIGATÓRIOS -> PROTOCOLO E DOMÍNIO
---OPCIONAIS ->SUBDOMÍNIO, PATH, PARÂMETROS, PORTA, ÂNCORA
--EXEMPLOS
--------> (PROTOCOLO -> HTTPS)(SUBDOMÍNIO -> WWW)(DOMÍNIO -> ROCKETSEAT.COM.BR) (PATH -> /BLOG) URL-> HTTPS://WWW.ROCKETSEAT.COM.BR/BLOG
--------> (PROTOCOLO -> HTTPS)(SUBDOMÍNIO -> WWW)(DOMÍNIO -> YOUTUBE.COM) (PATH -> /WATCH) (PARÂMETRO -> ?V=VPYCT2NPKDB) URL-> HTTPS://WWW.YOUTUBE.COM/WHATCH?V=?V=VPYCT2NPKDB
--------> (PROTOCOLO -> HTTP)(DOMÍNIO -> 127.0.0.1)(PORTA -> :3333) (DOCUMENTO -> /INDEX.HTML) (ÂNCORA -> #ALGUMLUGAR) URL-> HTTPS://WWW.ROCKETSEAT.COM.BR/BLOG

NAME -> URN -> UNIFORM RESOURCE NAME
-- EXEMPLOS -> URN:JSBN:045145053, URN:OASIS:NAMES:SPECIFICATION:DOCKBOOK:DTD:XML:4.1.2

HTTP MESSAGES -> MENSAGENS
-HTTP/1.1 - LEGÍVEL, TEXTO
-HTTP/2 - ESTRUTURA BINÁRIA, OTIMIZAÇÕES, MESMA MANEIRA QUE A VERSÃO 1.1

TIPOS DE MENSAGENS
-REQUEST(PEDIDO)
--METHOD(GET,POST,DELETE)
--PROTOCOL VERSION(HTTP,HTTPS)
--URI
--BODY*
--HEADERS*

-RESPONSE(RESPOSTA)
--PROTOCOL VERSION
--STATUS CODE
--HEADERS
--STATUS MESSAGE

METHODS
-OPTIONS
-GET
-HEAD
-POST
-PUT
-PATCH
-DELETE

1 HTTP METHODS
1.1 DEFINE UM CONJUNTO DE MÉTODOS HTTP
1.2 INDICA A AÇÃO QUE O CLIENTE DESEJA OPERAR
1.3 PODEM SER CHAMADOS DE VERBOS HTTP
1.4 CADA UM POSSUI A SUA SEMÂNTICA
1.5 CARACTERISTICAS
1.5.1 SEGURO
1.5.1.1 NÃO ALTERA O ESTADO DO SERVIDOR
1.5.1.2 SOMENTE LEITURA
1.5.1.3 CLIENTE NÃO SOLICITA ALTERAÇÕES
1.5.1.4 NÃO HÁ CARGA EXTRA PARA O SERVIDOR
1.5.1.5 O SERVIDOR É RESPONSÁVEL EM MANTER O MÉTODO SEGURO
1.5.1.6 QUAIS SÃO? (GET,HEAD,OPTIONS)

1.5.2 IDEMPOTENTE
1.5.2.1 AO EXECUTAR O MÉTODO, A RESPOSTA DEVERÁ SER SEMPRE A MESMA
1.5.2.2 QUAIS SÃO (TODOS OS SEGUROS SÃO IDEMPOTENTES, PUT, DELETE)
1.5.2.3 STATUS CODE PODERÁ SER DIFERENTE
1.5.2.4 O SERVIDOR TEM A RESPONSABILIDADE DE RETORNAR DADOS DA MESMA MANEIRA
1.5.2.4 ESSA ESPECIFICAÇÃO NÃO É GARANTIA DE QUE TODOS OS SERVIDORES IRÃO APLICAR O CONCEITO CORRETAMENTE

JSON SERVER
Foi feito uma instalação e configuração para rodar um servidor com dados para teste de metódos.

MÉTODOS

1 - OPTIONS
1.1 - INFORMAÇÕES SOBRE A SIPONIBILIDADE DA REQUISIÇÃO
1.1.1 - OPTIONS/index.html HTTP/1.1
1.1.2 - OPTIONS \* HTTP/1.1
1.2 - CARACTERÍSTICAS
1.2.1 - SEGURO: SIM
1.2.2 - IDEMPOTENTE: SIM
1.2.3 - BODY
1.2.3.1 - REQUEST: NÃO
1.2.3.2 - RESPONSE: NÃO
1.2.4 - USO DE FORMULÁRIOS HTML: NÃO
1.2.5 - CACHEABLE: NÃO

2 - GET
2.1 - PEGAR UM RECURSO
2.2 - SOMENTE RECEBE DADOS
2.3 - CARACTERÍSTICAS
2.3.1 - SEGURO: SIM
2.3.2 - IDEMPOTENTE: SIM
2.3.3 - BODY
2.3.3.1 - REQUEST: NÃO
2.3.3.2 - RESPONSE: SIM
2.3.4 - CACHEABLE: SIM
2.3.5 - USO EM FORMULÁRIOS HTML: SIM

3 - HEAD
3.1 - SEMELHANTE AO GET, PORÉM....
3.2 - RECEBEMOS SOMENTE O CABEÇALHO ------- HEAD/posts
3.3 - CARACTERÍSTICAS
3.3.1 - SEGURO: SIM
3.3.2 - IDEMPOTENTE: SIM
3.3.3 - BODY
3.3.3.1 - REQUEST: NÃO
3.3.3.2 - RESPONSE: NÃO
3.3.4 - CACHEABLE: SIM
3.3.5 - USO EM FORMULÁRIOS HTML: NÃO

4 - POST
4.1 - PUVLICAR/CADASTRAR UM RECURSO
4.2 CARACTERÍSTICAS
4.2.1 - SEGURO: NÃO
4.2.2 - IDEMPOTENTE: NÃO
4.2.3 - BODY
4.2.3.1 - REQUEST: SIM
4.2.3.2 - RESPONSE: SIM
4.2.4 - CACHEABLE: PODERÁ SER
4.2.5 - USO EM FORMULÁRIOS HTML: NÃO

5 - PUT
5.1 - CRIA UM NOVO OU ATUALIZA UM RECURSO
5.1.1 - PUT/profile HTTP/1.1
5.1.2 - DIFERENÇA ENTRE POST?
5.1.3 - CRIAÇÃO ----- STATUS CODE 201
5.1.4 - ATUALIZAÇÃO ----- STATUS CODE 204 OU 200
5.2 CARACTERÍSTICAS
5.2.1 - SEGURO: NÃO
5.2.2 - IDEMPOTENTE: SIM
5.2.3 - BODY
5.2.3.1 - REQUEST: SIM
5.2.3.2 - RESPONSE: NÃO
5.2.4 - CACHEABLE: NÃO
5.2.5 - USO EM FORMULÁRIOS HTML: NÃO

6 - PATCH
6.1 - MODIFICAÇÃO PARCIAL DE UM RECURSO
6.1.1 - DIFERENÇA ENTRE O PUT?
6.1.2 - PATCH/posts/1 HTTP/1.1
6.2 CARACTERÍSTICAS
6.2.1 - SEGURO: NÃO
6.2.2 - IDEMPOTENTE: NÃO
6.2.3 - BODY
6.2.3.1 - REQUEST: SIM
6.2.3.2 - RESPONSE: SIM
6.2.4 - CACHEABLE: NÃO

7 - DELETE
7.1 - REMOVER UM RECURSO
7.1.1 - DELETE/posts HTTP/1.1
7.1.2 - STATUS CODE
7.1.2.1 - 202: Accepted
7.1.2.2 - 204: No content
7.1.2.3 - 200: OK
7.2 CARACTERÍSTICAS
7.2.1 - SEGURO: NÃO
7.2.2 - IDEMPOTENTE: SIM
7.2.3 - BODY
7.2.3.1 - REQUEST: POSSIBILIDADE
7.2.3.2 - RESPONSE: POSSIBILIDADE
7.2.4 - CACHEABLE: NÃO
7.2.5 - USO EM FORMULÁRIOS HTML: NÃO

--HEADERS--

O QUE SÃO HEADERS? -> CABEÇALHOS, INFORMAÇÕES ADICIONAIS PARA O PEDIDO OU RESPOSTA
CONSTRUÇÃO = NOME: VALOR
EXEMPLOS:
-Content-Type: application/json
-Content-Type: text/html

HEADERS POR CONTEXTOS

- GENERAL
- REQUEST HEADERS
- RESPOSNSE HEADERS

-- GENERAL

- Na parte de General, podemos perceber que são Headers que servem tanto para o pedido quanto para a resposta, ou seja, é um agrupamento geral. Dentro deste grupo tempos o Request URL, que é o local do site, o Request Method, que é o método do pedido, o Status Code, o Remote Address, que é um IP que pode ser entendido como quase um endereço físico, e por fim temos o Referrer Policy, que é uma política para o referenciado, ou seja, são políticas para o redirecionamento.

--REQUEST HEADERS

- Se abrirmos a aba dos cabeçalhos de request, podemos ver vários headers, como o :authority:, que é a autoridade do pedido, o :method:, que é o método do pedido, o :path:, que é o caminho do pedido, o :schema:, que é o esquema que foi usado, o accept, que é o que é aceito, accept-encoding, que são os tipos de compressão usados, cookie, que são rastros deixados para a próxima conexão, entre outros.

-- RESPOSNSE HEADERS

- Se abrirmos a aba dos cabeçalhos de request, podemos ver vários headers, como o :authority:, que é a autoridade do pedido, o :method:, que é o método do pedido, o :path:, que é o caminho do pedido, o :schema:, que é o esquema que foi usado, o accept, que é o que é aceito, accept-encoding, que são os tipos de compressão usados, cookie, que são rastros deixados para a próxima conexão, entre outros.

OBTENDO AJUDA SOBRE HEADERS
-Para obter mais conhecimento nessa parte, nós recomendamos o app DevDocs, que serve para buscar informações sobre diversos frameworks, headers, etc. Tudo está em inglês, mas pode-se ir usando ferramentas de tradução para facilitar o entendimento

--STATUS--

-STATUS CODE MAIS COMUNS
A proposta do status code é ter uma comunicação mais clara entre o back-end com o cliente. Os status code do tipo 100 servem pra mostrar que a operação pode ser continuada sem problemas. Os status code do tipo 200 podem significar: 200 em si, significa que tudo está ok (GET e POST), 201, significa que o recurso foi criado (PUT), 204, significa que não há conteúdo (PUT e DELETE). Os status code do tipo 300 podem significar: 301, significa movido permanentemente, 308, significa redirecionamento permanente, 302, significa uma mudança temporária assim como o 307. Os status code o tipo 400 podem significar: 400, que significa que o pedido foi mal efetuado, 401, que significa que o pedido não teve autorização, 403, que significa que a autorização foi negada, 404, que o pedido não foi encontrado, 405, que significa que o método usado não é permitido e 429, que significa que foram efetuados muitos pedidos. Os do tipo 500: 500, que significa que ocorreu um erro desconhecido no servidor e o 503, que significa que o servidor está indisponível no momento.

1 - 100 -> CONTINUE

2 - 200
2.1 200: OK (GET,POST)
2.2 201: CREATED (PUT)
2.3 204: NO CONTENT (DELETE,PUT)

3 - 300
3.1 301: MOVED PERMANENTLY
3.2 308: PERMANENT REDIRECT
3.3 302: FOUND
3.4 307: TEMPORARY REDIRECT

4 - 400
4.1 400: BAD REQUEST
4.2 401: UNAUTHORIZED
4.3 403: FORBIDDEN
4.4 404: NOT FOUND
4.5 405: METHOD NOT ALLOWED
4.6 429: TOO MANY REQUESTS

5 - 500
5.1 500: INTERNAL SERVER ERROR
5.2 503: SERVICE UNAVAIABLE

--BUSCANDO MAIS INFORMAÇÕES SOBRE OS STATUS CODE--
Se por acaso você não quiser instalar o DevDocs na sua máquina, o serviço pode ser acessado pelo site devdocs.io, e nele pode ser pesquisado algo como "http status" e pode-se encontrar diversos status code junto aos seus significados.
