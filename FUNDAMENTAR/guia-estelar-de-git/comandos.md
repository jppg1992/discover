git init -> inicializa o repositório
git add . -> adiciona todos arquivos modificados/adicionados no projeto
git commit -m "mensagem informando o que foi alterado" -> marcando o ponto na história
git log -> traz informações dos pontos na história (commits)
git log --oneline -> mesmo git log porém com informações reduzidas
git log -n 5 -> traz os ultimos 5 commits
git log --since=2022-12-31 -> traz os comits que foram feito apartir desta data
git log --until=2022-12-31 -> traz os comits que foram feito anterior a esta data
git log --author=João -> traz somente commits feito pelos Authores com nome de João
git log --grep="init"-> filtra os commits por tudo que tiver a palavara "init" na mensgem do commit
git status -> mostra se tem algum arquivo modificado ou preparado para o commit
git diff -> mostra as alterações feitas nos arquivos modificados que estão no working diretory
git diff --staged -> mostra alterações feitas nos arquivos preparados para commit (após o comando git add)
git restore --staged file.txt --> remove arquivo da stage area ou arquivo preparado para o commit
git rm file.txt --> remove o arquivo do working diretory e já add para a stage area
git mv nomeatual.txt novonome.txt --> renomear arquivos no git e já add a stage area
git mv arquivoquevaimover nomedodiretório/arquivoquevaimover --> move o arquivo de uma pasta para outra e já add a stage area
git restore nomedoarquivo -> desfaz alteraçõs dos arquivos
git restore --staged nomedoarquivo -> retira o arquivo modificado da stage area
git commit --amend -m "nova mensagem" --> alterar algo no nosso mais recente commit, como a mensagem, vamos usar uma opção do comando commit, que é a --amend
git checkout HASH -- nomedoarquivo -> recuperar arquivos dos nossos commits antigos usando o comando git checkout
git clean -n -> lista arquivos que ainda não estão versionados pelo git
git clean -f -> apaga definitivamente estes arquivos não versionados ou n~
git revert HEAD~5 -> reverte para o ponto na história anterior (0 = atual e ~5(-5) são commits abaixo do atual )
git revert 7f121d7 -> reverte para o ponto na história da hash informada no comando
git commit -am "commit de arquivos já rastreados sem precisar dar o add antes"-> commit com o param -a aplica o commit das modificações em arquivos já rastreados
git show 7f121d7 -> mostra todas as modificações no ponto na história(HASH) informado como parametro
git show 7f121d7 -- src/pages/index.html -> mostra todas as modificações do (index.html) arquivo ou (\*) todos arquivos na pasta informada
