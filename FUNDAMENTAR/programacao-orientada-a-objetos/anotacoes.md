Programação Orientada a Objetos (P.O.O.) - é um paradigma, maneira de entender, interpretar um problema e colocar ele em código

Objetos -- ex: caneta é um objeto

Todo objeto possui

- Propriedades e Funcionalidades
- Estado e Comportamentos
- Atributos e Métodos

-- exemplos:

- funcionalidade/comportamento/método) da caneta é escrever,
- cor da caneta é uma (propriedade/atributo) dessa caneta,
- caneta estar tampada ou destampada é um estado do objeto

Abstratos X Mundo Real

--Mundo Real:

- Pessoa
- Aluno
- Produto
- Carrinho de compras

-- Abstratos

- Autenticação
- Autorização

Classes
As classes na P.O.O. funcionam como um modelo para os objetos.
Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

Exemplo: Máquina de biscoito(classe)
-Instâncias(objeto)

1 máquina de biscoito cria vários tipos de biscoito dependendo dos ingredientes

Classes no JavaScript
-Syntatical sugar
-Prototype - (herança de atributos e metodos de prototipos)

Encapsulamento
-Dirigir carro X conhecer o motor do carro

-Colocar uma cápsula
-Agrupamento de funções e variáveis
-Esconder detalhes de implementação
-Camada de segurança para os atributos e métodos

Programação Estruturada(P.E.) x Orientada a Objetos(P.O.O)

P.E.

- Processa a entrada e manipulação dos dados, até a saída
- Uso de sequências, estruturs de repetições e condições
- Uso de uma rotina maior, ou sub-rotinas
- Não existem restrições ás variáveis

P.O.O.

- Surge para trazer um cuidado ao uso estruturado
  -Não elimina por completo o uso estruturado
- Conceitos como Objetos e Classes
- Cuidados com váriaveis e rotinas (Encapsulamento)
- Melhor reuso do código (Herança)

Herança
-Pais e filhos
-Objetos podem herdar, ou estender, características bases
-Uma cópia de atributos e métodos de outra classe
-Um objeto pode estender de outro objeto que pode estender de outro objeto
-Fácil reutilização do código

Polimorfismo
Quando um objeto estende de outro (Herança) talvez haja a necessidade de reescrever uma ou mais características(atributos e métodos) nesse novo objeto.
Recriaremos então um método(ou mais) da classe herdada.
Polimorfismo significa muitas formas.

Abstração
Template ou identidade de uma classe que será construída no futuro

-Atributos e métodos podem ser criados na classe Abstração(Superclasse) MAS
-A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração
