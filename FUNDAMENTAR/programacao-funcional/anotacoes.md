PROGRAMAÇÃO FUNCIONAL

- É um paradigma de programação como a Orientação a Objetos, por exemplo.

  - Uma maneira de resolver problemas

FUNÇÕES

- Pequenas tarefas dentro de uma função
- Abstrair um problema e isolar ele dentro da função
- Não modificar dados fora dela
- Pequenas e bem específicas no que fazem.

CARACTERISTICAS PRINCIPAIS DA FUNÇÃO

- Um dado (ou mais) entra em uma função e um novo dado sai dessa função
- Não altera dados
- Não guarda estado (stateless)

Linguagens funcionais

- JavaScript (multiparadigma)
- PHP (multiparadigma)
- Elixir
- Haskell

PONTOS POSITIVOS

- Fácil manutenção
- Fácil uso de testes
  - Funções isoladas e consistentes
- Códigos mais confiáveis

PRINCIPIOS

- Paradigmas
  Imperativa:

  - O código é pensado e gerado em sequência.
  - O código é pensado como um passo-a-passo, como uma receita de bolo
  - Uma coisa depende da outra
  - O estado de um dado é alterado constantemente causando mutações nas variáveis
  - Orientaçãpo a Objetos é u mtipo de paradigma imperativo

  Declarativa:

  - O código é gerado para fazer algo, não importa como
  - O que fazer e não como fazer
  - Não há necessidade de um passo a passo no código
  - Programação funcional é um tipo de paradigma declarativo

- Dados

  Imutabilidade:

  - Uma variável não vai variar
  - se você precisar mudar uma variável, você não muda, você cria uma nova

  - Stateles
    - Não Guarda estado
    - A função só conhece dados entregues a ela
    - A resposta não poderá variar

- Funções

  - Independentes:

    - Deverá ter ao menos 1 argumento
    - Deverá retornar algo
    - Nada que acontecer lá dentro afeta o mundo externo
      - dados imutáveis
      - não guarda estado
    - Não faremos uso de loops (for,while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)

  - Puras:

    - Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
    - Não deverá sofrer nenhuma interferência do mundo externo a ela
    - Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
    - Não terá nenhum efeito colateral no seu código
      - Não irá modificar nenhum dado
      - Não irá guardar nenhum estado

  - Higher-order:
    - Funções que recebem funções como argumentos
    - Funções que poderão retornar outras funções
  - First-class:

    - Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
    - A função poderá ser entendida como uma variável

  - Composição de funções

    - Um encadeament de funções
    - Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna ......

  - Conclusão
    - Paradigma de Programação
    - Linguagens
    - Conceitos fundamentais
      - Stateless, Imutabilidade, Função pura, Higher-orders
