CONTROLE DE VERSÃO

- Registro de alterações em um ou mais arquivos
- Lembrar versões especificas mais tarde
- Reverter para estado anterior determinados arquivos ou um projeto inteiro
- Compare as mudanças ao longo do tempo
- Veja quem modificou pela última vez algo que pode estar causando um problema
- Quem introduziu um problema ou quando
- Se você estragar tudo ou perder arquivos, você pode facilmente recuperar
- E muito mais

VCS - Version Contol System

Tipos de controle de Versão

- Sistemas locais:
  Copiar os arquivos para outro diretório
  Muito comum e muito simples
  Incrivelmente propensa a erros
  Fácil de sobreescrever arquivos, caso haja uma cópia errada
  Para superar os possíveis erros, existe o RCS - Revision Control System
  Era muito popular antigamente, para o controle de versão.
  Algumas das características são:
  Mantém o conjunto de alterações, ou seja, as diferenças entre os arquivos
  Possui formato especial no disco;
  Pode re-criar como qualquer arquivo se parecia em qualquer ponto do tempo, adicionando-se todas as alterações ao arquivo.

- Sistemas centralizados:
  Exemplos, CVS, Subversion e Perforce.
  Um único servidor que contém todos os arquivos
  Vários clientes clientes usam arquivos a partir desse servidor central
  Por muitos anos, tem sido o padrão para o controle de versão. Algumas de suas vantagens incluem o controle sobre a atividade dos colaboradores no projeto, os administradores têm controle refinado sobre quem pode fazer o que, e é muito mais fácil administrar um CVCS do que lidar com bancos de dados locais de cada cliente.
  Porém, tem algumas desvantagens, já que se esse servidor der problema durante uma hora, nessa hora ninguém será capaz de colaborar ou salvar as alterações de versão para o que quer que estejam trabalhando, também corremos o mesmo risco de perder tudo se um disco falhar, assim como no sistema local, já que toda vez que trabalhamos com todo o histórico em um só local, corremos o risco de perder tudo.

- Sistemas distribuídos:
  Há também, o melhor dos dois mundos, os chamados sistemas distribuídos, alguns exemplos incluem Git, Mercurial, Bazaar e Daarcs
  Ele vai duplicar (clonar) localmente o repositório completo, e se qualquer servidor morrer enquanto algum sistema estiver colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor, e cada clone é um backup completo de todos os dados, isso sem falar que os clientes usam o estado mais recente dos arquivos.

Oque é GIT ?
É um sistema de controle de versão distribuído, é open-source, então além de gratuito seu código é aberto, e permite que você volte a qualquer ponto na história do projeto, já que cada alteração no código cria um commit, e cada commit é um ponto na história.

Também pode controlar o fluxo de novas funcionalidades, através das ramificações (branch), que funcionam como universos paralelos, onde além do projeto principal, você pode criar uma linha alternativa, adicionar pontos na mesma e depois uni-la novamente à linha principal, sem falar na possibilidade de poder trabalhar com vários devs ao mesmo tempo, analisando e resolvendo conflitos, porém nesse curso não falaremos sobre essas ramificações, teremos mais foco em nossos próprios projetos, as ramificações ficarão para outro curso.

GIT Help

Para termos ajuda com o git, podemos usar o comando git help, onde você vai obeter informações sobre praticamente tudo no git, basta colocar git help + a área (exibida com o comando git help) na qual sua dúvida se encaixa e procurar sua resposta.

Para sair do menu de ajuda, use o comando :q

arquivo .gitignore -> serve para ignorar arquivos que não desajamos que sejam versionados
para ignorar pastas -> node_modules/
para ignorar arquivos -> arquivo.txt
