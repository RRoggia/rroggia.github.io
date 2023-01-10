---
id: '978-8550804606'
title: 'Arquitetura Limpa'
subtitle: 'O Guia do Artesão para Estrutura e Design de Software'
language: 'pt-BR'
status: 'Reading'
coverPath: 'arquitetura-limpa'
date: '2021-01-01'
edition: '1st'
publishDate: '2019-04-23'
authors: ['Robert Martin']
translations: ['Samantha Batista']
---

# I - Introdução

A introdução é focada em explicar a diferença entre fazer funcionar e fazer direito.

> Funciona por que fazer algo funcionar - uma vez - não é tão difícil
>
> Fazer direito é outra questão. Criar software de maneira correta é difícil. Requer conhecimento e habilidades que a maioria dos jovens programadores ainda não adquiriu. Requer um grau de raciocínio e insight que a maioria dos programadores não se empenha em desenvolver. Requer um nível de disciplina e dedicação que a maioria dos programadores nunca sonhou que precisaria. Principalmente, requer paixão pela programação e o desejo de se tornar um profissional.

Com essas definições de fazer funcionar e fazer direito, seria possível, por exemplo, diferenciar engenheiros de software e programadores/desenvolvedores.

Ele termina a introdução explicando qual seria o impacto de criar software da maneira certo.

> Quando o software é feito da maneira certa, ele exige só uma fração dos recursos humanos para ser criado e mantido. As mudanças são simples e rápidas. Os poucos defeitos surgem distantes uns dos outros. O esforço é minimizado enquanto a funcionalidade e a flexibilidade são maximizados.

## 1 - O que são design e arquitetura?

Nesse primeiro capitulo ele reforça a ideia apresentada no prefácio:

> O objetivo da arquitetura de software é minimizar os recursos humanos necessários para construir e manter um determinado sistema.

Para o autor não existe diferença entre design e arquitetura. Ele pontua que no geral o termo arquitetura é usado em um contexto de mais alto nível enquanto o termo design é aplicado em um contexto de mais baixo nível. Porém, o objetivo de ambos é o mesmo (citação acima).

> Há simplesmente uma linha constante de decisões que se estende dos níveis mais altos para os mais baixos.

Em seguida o autor demonstra com um estudo de caso um cenário onde uma empresa não se preocupou com a qualidade do design e a produtividade por release teve uma queda drástica, mesmo com um acréscimo de engenheiros de software, o que diga-se de passagem aumentou muito o valor do produto.

Com a simples reflexão da lebre e da tartaruga o autor explica quais foram os erros dessa empresa. Comparando os desenvolvedores atuais com a lebre, que tem um excesso de confiança na sua capacidade de produção e que acreditam que podem assim que liberarem o produto ao mercado, voltar e limpar a bagunça.

Por fim, conclui o capitulo explicando que 

> A única forma de seguir rápido é seguir bem.

p.s. Ver exemplo de Jason Gorman sobre Kata de numerais romanos com TDD e sem TDD.

## 2 - Um conto de dois valores

O autor inicia explicando que existem dois tipos de valores em um sistema de software:

* Comportamento: Implementação de uma especificação funcional.

* Arquitetura: Software. *soft* (suave) e *ware* (produto). Um produto que deve ser fácil de mudar.

Segundo o autor, entre os dois valores em um sistema de software, a arquitetura é o valor maior. Ou seja, é mais importante um sistema que é flexível para mudanças do que seja um sistema que funciona com os comportamentos esperados.

>  [...] os gerentes de negócios não estão equipados para avaliar a importância da arquitetura. *É para isso que são contratados desenvolvedores de software*. Portanto, é responsabilidade da equipe de desenvolvimento de software garantir a importância da arquitetura sobre a urgência dos recursos.

O autor conclui, que times de desenvolvimento de software são stakeholders assim como os demais stakeholders. Portanto, é seu dever expor a importância da arquitetura e garantir que ela seja respeitada.

# II - Começando com os tijolos: paradigmas da programação

## 3 - Panorama do paradigma

Nesse capítulo o autor introduz os três tipos de paradigmas de programação existentes: estruturado, orientado a objetos e funcional.

Como reflexão o autor sugere que cada um desses paradigmas impõe restrições na maneira de desenvolver o software. E que possivelmente esses três serão os três únicos paradigmas que existem, pois eles já restringem todas possibilidades do desenvolvimento de software.

Os próximos capítulos explicam dessa seção explicam mais a fundo as restrições dos paradigmas.

## 4 - Programação estruturada

> A programação era difícil e os programadores não eram muito competentes.

Dado que o cérebro humano era mais limitado que o computador e que os ciclos de interação de feedback para os desenvolvedores eram muito grandes. Dijkstra começou a trabalhar com a ideia de provar matematicamente os programas.

Enquanto tentava aplicar o uso da prova matemática, ele se deparou com a complexidade das declarações *goto* e como elas impediam a abordagem dividir para conquistar.

Baseado então no [Structured program theorem](https://en.wikipedia.org/wiki/Structured_program_theorem) de Bohm e Jacopini que define que três tipos de controle são necessários para processar um função computável. Dijkstra enviou uma carta aberta [Go To statements considered harmful](https://web.archive.org/web/20070703050443/http://www.acm.org/classics/oct95/) que é possivelmente o começo do paradigma estruturado.

Ou seja, no paradigma estruturado os saltos (declarações *goto*) foram substituídos por declarações `if/then/else` e `do/while/until`. 

O autor então introduz o conceito de decomposição funcional, que é possível com o paradigma estruturado.

> Você pode pegar uma declaração de um problema de larga escala e decompô-la em funções de alto nível. Cada uma dessas funções pode então ser decomposta em funções de níveis mais baixos até o infinito. Além do mais, cada função decomposta pode ser representada por meio de estruturas de controle restritas da programação estruturada.

Embora o paradigma estruturado se consolidasse as provas formais propostas por Dijkstra não se consolidaram.

Por fim, o autor diferencia os modelos de comprovação da matemática e da ciência.

> [...] a matemática é a disciplina que prova as declarações como verdadeiras. Por outro lado, a ciência é a disciplina que prova as declarações como falsas.

E conclui que com testes podemos comprovar a presença de erros e não a ausência de erros. Assim como a ciência consegue provar que uma declaração é falsa mas não consegue provar que é verdadeira. A programação estruturada, e portanto a programação que restringe uso de declarações *goto*, permite comprovar a presença de erros e por isso é tão relevante.

## 5 - Programação orientada a objetos

> A base de uma boa arquitetura é a compreensão e aplicação dos princípios do design orientado a objeto.

O autor começa o capítulo sugerindo que a programação orientada a objetos é a base para uma boa arquitetura. Porém, é muito difícil definir o paradigma de orientação a objetos. O autor testa se encapsulamento, herança e polimorfismo que são normalmente sugeridos como as características do paradigma OO realmente fazem definem o paradigma.

> O encapsulamento é citado como parte da definição da OO porque linguagens OO possibilitam um encapsulamento fácil e eficaz de dados e funções.

O autor desmente a ideia de que encapsulamento deveria ser usado para definir o paradigma de OO. Dado que na linguagem de programação C, que não é OO, existia um encapsulamento perfeito com arquivos header. Esse encapsulamento foi enfraquecido em linguagens OO como C++ (onde precisa declarar os atributos no arquivo header - embora possam ser declarados como privados) e Java (onde não existe arquivo header).

O autor então questiona.  A herança pode ser usado para definir OO? E ele mesmo responde:

> A herança é simplesmente a redeclaração de um grupo de variáveis e funções dentro de um escopo fechado.

Novamente, isso já era possível em C. Quando uma estrutura é um super conjunto de outra, pode-se usar um *cast* para o sub conjunto. E enquanto ao polimorfismo:

> Podemos dizer, portanto, que o polimorfismo é uma aplicação de ponteiros em funções.

Entretanto, em linguagens como C é necessário um conjunto de convenções para que a aplicação de ponteiros em funções funcione corretamente. O paradigma OO elimina essas convenções e facilita o uso de polimorfismo, por isso o autor sugere:

> OO impõe disciplina na transferência indireta de controle. 

e continua

> A OO permite a arquitetura de plug-in seja usada em qualquer lugar e para qualquer coisa.

Então o autor acrescenta que OO permite o uso de inversão de dependência e que isso gera uma flexibilidade para os arquitetos de solução. Inversão de dependência também proporciona o uso de *implementação independente*, ou seja, alterações na implementação de um componente não impactam outros. E *desenvolvimento independente*, onde equipes diferentes podem trabalhar independentemente.

## 6 - Programação funcional

> Esse paradigma se baseia essencialmente no calculo-lambda, inventado por Alonzo Church na década de 1930.

O autor inicia o capítulo demonstrando como calcular o quadrado de um numero em Closure e Java. E então pontua a diferença que no exemplo em Java existe uma variável mutável enquanto no exemplo de Closure não existem variáveis mutáveis.

> Variáveis em linguagens funcionais *não variam*.

O autor então discorre sobre a importância da imutabilidade na arquitetura. Em uma arquitetura imutável não existirão problemas de concorrência como *race conditions* ou *deadlock conditions*. 

Entretanto, para alcançar imutabilidade total seria preciso de recursos infinitos. Como isso, atualmente, é impraticável é necessário aplicar segregações de mutabilidade.

> Os componentes imutáveis realizam suas tarefas de maneira puramente funcional, sem usar nenhuma variável mutável. Os componentes mutáveis se comunicam com um ou mais dos outros componentes que não são puramente funcionais e permitem que o estado das variáveis seja modificado.

Nesses componentes mutáveis é importante usar algum mecanismo, por exemplo memória transacional, para evitar os problemas de concorrência.

> [...] Aplicações bem estruturadas devem ser segregadas entre componentes que mudam e que não mudam variáveis.

Por fim, o autor fala sobre *event sourcing*. Dado que os recursos computacionais estão aumentando, cada vez menos precisaremos de estados mutáveis. E portanto estratégias como *event sourcing* se tornam bastante atraentes.

> *Event sourcing* é uma estratégia em que armazenamos as transações, mas não o estado. Quando o estado for solicitado, simplesmente aplicamos todas as transações desde o inicio.

Nesse caso as APIs oferecem somente um Create and Read, ao invés de todo o CRUD. E a vantagem é ter uma aplicação que não modifica nem elimina dados, uma aplicação inteiramente imutável.

# III - Princípios de design

> Bons sistemas de software começam com um código limpo. Por um lado, se os tijolos não são bem feitos, a arquitetura da construção perde a importância. Por outro lado, você pode fazer uma bagunça considerável com tijolos bem-feitos.

Os princípios SOLID são aplicados para que obtenhamos software que tolere mudanças, sejam fáceis de entender e sejam reutilizáveis. O intuito é a aplicação desses princípios em níveis de componentes.

A história dos princípios começa na década de 80, embora os princípios como conhecemos hoje foram estabilizados nos anos 2000.

Os princípios são:

* Single Responsibility Principle (SRP): cada módulo de software tenha uma, e apenas uma, razão para mudar.
* Open-Closed Principle (OCP): Permitirem que o comportamento do sistema mude pela adição de novo código, e não pela alteração do código existente.
* Liskov Substitution Principle (LSP): Os módulos devem aderir um contrato que assim permite que esses módulos sejam substituídos por outros que aderiram o mesmo contrato.
* Interface Segregation Principle (ISP): Módulos devem evitar depender de coisas que não precisam.
* Dependency Inversion Principle (DIP): Um código de nível mais alto não deve depender de detalhes de implementação de códigos de nível mais baixo.

## 7 - SRP: O Princípio da responsabilidade única

No começo do capítulo o autor explica que esse principio é possivelmente o que as pessoas mais se confundem dado o nome errôneo.

> Um modulo deve ser responsável por um, e apenas um, ator.

Onde modulo pode ser representado como um arquivo fonte, por exemplo uma classe ou um conjunto de funções e dados. E o ator representa um conjunto de stakeholders que exigem que o sistema mude da mesma forma.

O autor então demonstra dois sintomas que exemplificam a violação. O sintoma de duplicação acidental e o sintoma de fusão.

No sintoma de duplicação acidental a classe `Employee` tem três métodos `calculatePay`, `reportHours` e `save` onde cada um reflete as necessidades de atores diferentes, respectivamente, CFO, COO e CTO. Nesse exemplo, os métodos podem utilizar um algoritmo compartilhado, digamos `regularHours`, que ao ser alterado pelos interesses do CFO também impactarão os demais atores que também utilizam o método nas seus respectivos métodos.

No sintoma de fusão, cada ator requer mudanças no mesmo arquivo `Employee`. Desenvolvedores de times diferentes trabalham nessas mudanças e quando forem sincronizar o código terão problemas de fusão (conflitos no merge). A resolução dos conflitos adiciona risco para todos atores, mesmo algum ator que não pediu mudanças poderia ser afetado.

Ambos sintomas podem ser solucionados *separando o código que dá suporte a atores diferentes*.

O autor sugere duas soluções para o problema, a primeira separando a lógica de negocio e os dados, e a segunda agregando a lógica de negócio com os dados mas delegando a execução para outras classes.

A primeira solução, uma *Facade* é criada `EmployeeFacade` que expõe os métodos `calculatePay`, `reportHours` e `save`. A `EmployeeFacade` é responsável por criar e delegar cada uma das classes reesposáveis por cada método `PayCalculator`, `HourReporter` e `EmployeeSaver`. Essas classes tem acesso ao `EmployeeData` que é uma estrutura de dados.

Na segunda solução, a classe `Employee` ainda expõem os métodos `calculatePay`, `reportHours` e `save`, porem, a execução desses métodos é delegada para `PayCalculator`, `HourReporter` e `EmployeeSaver`.

## 8 - OCP: O Princípio do aberto/fechado

> Um artefato de software deve ser aberto para extensão, mas fechado para modificação.

Adicionar comportamentos não devem exigir mudanças massivas no software. O autor sugere que uma boa arquitetura de software deve alterar o menos possível o código para alterações, idealmente nenhuma mudança. Em seguida propõe um exercício mental.

Nesse exercício, é necessário adicionar a um sistema que exibe um resumo financeiro em uma página web uma nova funcionalidade de exibir o resumo em um formato para impressão em PDF. Para completar a tarefa são necessários dois passos. Primeiro a aplicação do SRP e em seguida do DIP.

Na aplicação do primeiro princípio as responsabilidades são separadas em duas. A primeira é a geração dos financeiros para o relatório e a segunda é a a apresentação desses dados.

Assim que a separação é concluída, é necessário organizar as dependências para garantir que as mudanças de responsabilidade de uma classe não causem mudanças nas outras. Nesse exemplo, são adicionados classes que são partes de componentes. Os componentes se comunicam somente através de interfaces, ou seja, é feita a aplicação do DIP.

> [...] o código fonte da classe A menciona a classe B, mas a classe B não menciona nada sobre a classe A.

Ou seja, as implementações conhecem suas interfaces, mas as interfaces não conhecem as implementações. Assim teremos componentes com relações unidirecionais, em que as flechas apontam para quem eles estão protegendo das mudanças. Por exemplo, a interface de relatório financeiro é protegida de mudanças no controlador de registro financeiro e na base de dados financeiras.

> Os arquitetos separam a funcionalidade com base no como, por que e quando da mudança e, em seguida, organizam essa funcionalidade separada em uma hierarquia de componentes. Os componentes de nível mais alto na hierarquia são protegidos das mudanças feitas em componentes nos níveis mais baixos.

Por fim o autor explica que as interfaces também podem ser utilizadas para ocultar informações e evitar dependências transitivas.

> As dependências transitivas violam o princípio geral de que as entidades de software não dependem de coisas que não usam diretamente.

## 9 - LSP: O Princípio de substituição de liskov

O LSP foi definido em um texto de Barbara Liskov.

> O que queremos aqui é algo como a seguinte propriedade de substituição: se, para cada objeto *o1* de tipo *S*, houver um objeto *o2* de tipo *T*, de modo que, para todos os programas *P* definidos em termos *T*, o comportamento de *P* não seja modificado quando *o1* for substituído por *o2*, então *S* é um subtipo de *T*.

O autor usa o exemplo de cobrança das taxas de uma licença. A aplicação `Billing` usa somente a interface `Licence` que define o método `calcFee`. As classes `PersonalLicense` e `BusinessLicense` implementam `License`. E portanto o comportamento da aplicação `Billing` não depende da utilização de qualquer subtipo.

> Ambos os subtipos são substituíveis pelo tipo `License`.

Em seguida, o autor demonstra uma violação com o exemplo do quadrado e retângulo. Nesse exemplo, `Square` é um subtipo de `Rectangle`, esse que define os métodos `setHeight` e `setWeight`. O subtipo de `Rectangle`, `Square`, define o método `setSide`. A violação acontece pois quando a classe `User` utiliza os métodos de `Rectangle` a classe `User` não invoca o método `setSide` de `Square`. Ou seja, o código de `User` precisa de pelo menos um comando `if/else` para determinar quando for um `Rectangle` e usar sua interface e quando for um `Square` usar sua interface.

Além disso, a interface da `Rectangle` classe permite determinar valores diferentes para largura e altura. Enquanto, um `Square` deveria ter todos os lados com o mesmo valor. Isso torna o código mais confuso de ler.

```
// Funciona
Rectangle r = new Rectangle();
r.setWeight(5);
r.setHeight(2);
assert(r.area() == 10)

// Não funciona - o método setSide não foi chamado e o calculo da área estará errado.
Rectangle r = new Square();
r.setWeight(5);
r.setHeight(2);
assert(r.area() == 10)
```

Para evitar o comportamento errado, a classe `User` deveria utilizar comandos `if/else` para separar a lógica. 

> Já que o comportamento do *User* depende dos tipos utilizados, esses tipos não são substituíveis.

Após exemplificar em um nível de design de código, o autor explica que esse princípio se tornou mais genérico e hoje é aplicado em várias camadas do software. Desde o código, o primeiro exemplo, até a arquitetura, serviços REST que usam a mesma interface para se comunicar. Em seguida o autor apresenta um exemplo no nível de arquitetura.

Nesse exemplo, uma companhia de táxi não leu corretamente a especificação e criou erroneamente um dos endpoints dos recursos REST. As demais aplicações que consomem essa especificação precisarão adaptar seu código, possivelmente adicionando clausulas `if/else` para lidar com esse serviço que implementou incorretamente.

## 10 -  ISP: O Princípio da segregação de interface

Em uma linguagem de programação como Java em que é necessário importar as classes que deseja consumir explicitamente. Em um cenário em que uma classe `OPS` define as operações `op1`, `op2` e `op3` e essas operações são consumidas respectivamente pelas classes `User1`, `User2` e `User3`. Qualquer alteração na em qualquer uma das operações de `OPS` vai impactar(recompilação) as 3 classes consumidoras.

Esse problema pode ser resolvido com a segregação de interfaces.

O mesmo exemplo aplicando segregação de interfaces, `OPS` implementa `U1OPS`, `U2OPS` e `U3OPS` que são interfaces que definem respectivamente `op1`, `op2` e `op3`. Agora as classes `User1`, `User2` e `User3` poderão depender exclusivamente das operações que elas usam.

> Linguagens estaticamente tipadas como Java forçam os programadores a criarem declarações que os usuários devem `import`, `use` ou `include`. São essas declarações `included` no código-fonte que criam as dependências de código-fonte que forçam a recompilação e a reimplementação.

Em seguida o autor explica que em linguagens de programação como Ruby ou Python, essas declarações não existem no código fonte. Pois são inferidas em tempo de execução. E portanto, essas linguagens são mais flexíveis e menos fortemente acopladas.

Abstraindo o conceito de ISP e aplicando em um nível de arquitetura, o autor propõe:

> Em geral, é prejudicial depender de módulos que  contenham mais elementos do que você precisa.

## 11 - DIP: O Princípio da inversão de dependência

> [...] os sistemas mais flexíveis são aqueles em que as dependências de código-fonte se referem apenas as abstrações e não a itens concretos.

Portanto, tanto as linguagens estaticamente tipadas como Java, que usam `import`, `use` e `include`, quanto as linguagens dinamicamente tipadas como Ruby e Python **não** deveriam se referir a módulos concretos. A única diferença entre essa afirmação é que nas linguagens dinamicamente tipadas é mais difícil definir o que é um módulo concreto, então o autor propõe:

> Nesse contexto especifico, podemos conceituá-lo como qualquer módulo em que as funções chamadas são implementadas.

Em seguida, o autor explica que essa ideia é impossível de ser aplicada a risca. Pois dependemos de muitas classes de facilidade da linguagem, em Java por exemplo da classe `String`. Então, podemos depender das abstrações ou de classes que são consideradas muito estáveis (mudanças são raras e estritamente controladas).

> Por essas razões, tendemos a ignorar a estabilidade de segundo plano de sistema operacionais e facilidades de plataformas quando se trata do DIP. Toleramos essas dependências concretas porque sabemos e confiamos que elas não mudarão.

Após essa distinção entre abstrações e módulos concretos e módulos instáveis e estáveis. E mostra o porque é importante ter abstrações estáveis.

> Em uma interface abstrata, toda mudança corresponde a uma mudança em suas implementações concretas. Por outro lado, as mudanças nas implementações concretas normalmente ou nem sempre requerem mudanças nas interfaces que implementam.

Portanto, precisamos alcançar a estabilidade nas abstrações. Bons designers e arquitetos trabalham duro para alcançar isso. O autor propõe algumas regras para alcançar abstrações estáveis:

* **Não se refira a classes concretas voláteis:** Refira-se a interfaces abstratas. Essa regra também estabelece restrições severas sobre a criação dos objetos e geralmente força o uso de _Abstract Factories_.
* **Não derive de classes concretas voláteis:** A herança é o relacionamento de código-fonte mais forte e rígido de todos, e consequentemente, deve ser usado com muito cuidado.
* **Não sobrescreva funções concretas:** Funções concretas muitas vezes exigem dependências de código fonte. Quando fazemos o `override` acabamos *herdando-as*. Como substituição, converta a função em abstrata e crie múltiplas implementações.
* **Nunca mencione o nome de algo que seja concreto e volátil:** Reafirmação do próprio principio.

Em seguida, o autor explica que a criação de objetos cria uma dependência de código-fonte, e que portanto, merece um tratamento especial. Uma solução é o uso das _Abstract Factories_. Ao aplicarmos o padrão de design, obtemos um limite arquitetural que separa o concreto do abstrato.

O autor ainda menciona, que normalmente, as aplicações tem um método `main` onde as classes concretas são instanciadas e adicionadas a uma variável global do tipo da abstração. As classes consumidoras podem então consumir somente a abstração que a implementação é injetada.

No fim do capítulo, o autor menciona que o DIP é um princípio extremamente citado durante o livro, pois é responsável por desenhar o limite arquitetural nas arquiteturas.

# IV - Princípios dos componentes

## 12 - Componentes 

Esse capítulo começa com o autor falando sobre a definição de componentes.

> Componentes são unidades de implantação (deploy). Eles são as menores entidades que podem ser implantadas como parte de um sistema.

Em seguida, ele fala sobre as vantagens de termos componentes bem projetados.

> [...] quando efetivamente implantados, componentes bem projetados sempre retêm a capacidade de serem implantados de forma independente e, portanto, desenvolvidos independentemente.

Após a definição e vantagens o autor reconta a historia por trás do surgimento dos componentes.

Ela começa com os desenvolvedores tendo que indicar no programa, o endereço de memória que seria alocado. Além disso, eles adicionavam ao código fonte da sua aplicação funções de biblioteca. Com essa abordagem, a compilação poderia levar horas.

Para melhorar o tempo de compilação, a aplicação e bibliotecas de funções foram separadas e eram alocadas em diferentes áreas da memória. O aumento do tamanho das aplicações trouxe novos problemas. O que levou a arquivos binários relocáveis. Esses arquivos eram ligados através de um carregador de ligações.

> O carregador de ligações permitiu que os programadores dividissem seus programas em segmentos separados compiláveis e carregáveis.

O autor então conclui que depois de 50 anos, a arquitetura de plugin de componente é o padrão.

## 13 - Coesão de componentes

Esse capítulo fala sobre os três princípios da coesão de componentes:

* Reuse/Release Equivalence Principle (REP): A granularidade do reuso é a granularidade do release.
* Common Closure Principle (CCP): Reúna tudo que muda ao mesmo tempo pelas mesmas razões. Separe tudo que muda em tempos diferentes por razões diferentes.
* Common Reuse Principle (CRP): Não dependa de coisas que você não precisa.

### CRP: Reuse/Release Equivalence Principle

Então o autor começa aprofundando em cada um dos princípios. Ao se referir ao REP ele propõe:

> As pessoas que querem reutilizar componentes de software não podem, e não devem, fazê-lo a não ser que esses componentes sejam rastreados por meio de um processo de release e recebam números de release.

Isso é importante, por que os desenvolvedores que usam o componente precisam saber quando vão chegar novos release do componente e quais mudanças o release trará. Assim o desenvolvedor poderá escolher se vai ou não atualizar aquele componente.

Além disso, esse princípio significa que classes e módulos de um mesmo componente devem ser parte de um grupo coeso. Ou seja, deve haver um tema ou propósito abrangente que todos as classes e módulos compartilham.

> As classes e módulos agrupados em um componente devem ser passíveis de release em conjunto.

Ou seja, as classes e módulos sendo alterados na release e sua documentação deve, fazer sentido tanto para o autor quanto para os usuários do componente.

### CCP: Common Closure Principle

Em seguida o autor fala sobre CCP:

> Reúna tudo que muda ao mesmo tempo pelas mesmas razões. Separe tudo que muda em tempos diferentes por razões diferentes.

É o Single responsibility principle (SRP) reescrito para componentes.

> Quando o código de uma aplicação tem que mudar, é preferível que todas as mudanças ocorram em um componente em vez de servem distribuídas por vários componentes.

Isso limita a quantidade de implantações necessárias.

O agrupamento das classes que mudam pelos mesmos motivos também reduz o trabalho relacionado a fazer release, revalidar e reimplantar o software.

> O CCP amplia essa lição (se referindo ao OCP) ao reunir no mesmo componente as classes fechadas para os mesmos tipos de mudanças. Assim, quando ocorre uma mudança nos requisitos, essa mudança te uma boa chance de se limitar a um número mínimo de componentes.

### CRP: Common Reuse Principle

O terceiro e ultimo principio que o autor comenta é o CRP:

> Não force usuários de um componente a depender de coisas que eles não precisam.

O CRP sugere que devemos manter no mesmo componentes classes e módulos que deverão ser reutilizados juntos. 

> As classes raramente são reutilizadas isoladamente. É mais comum que as classes reutilizáveis colaborem com outras classes que fazem parte da abstração reutilizável.

Ou seja, dado que essas classes são reutilizadas juntas são fortemente acopladas e devem ser mantidas juntas no mesmo componente.

O CRP também sugere para somente depender de componentes se todas as classes desse componente são utilizadas. Caso contrário, qualquer alteração em uma classe que não é relevante para nós poderá nos impactar.

> Segundo o CRP, as classes que não têm uma forte ligação entre si não devem ficar no mesmo componente.

Esses três princípios lutam entre si, enquanto REP e CCP tendem a aumentar os componentes, o CRP tende a diminui-lo.

> Um bom arquiteto deve descobrir uma posição nesse triângulo de tensão que satisfaça as demandas *atuais* da equipe de desenvolvimento.

## 14 - Acoplamento

### ADP: Acyclic Dependencies Principle

O autor começa o capítulo falando sobre a síndrome da manhã seguinte (Morning after syndrome). Em cenários onde muitos desenvolvedores alteram o mesmo arquivo-fonte, é comum esse problema ocorrer, você chega na manhã seguinte e seu código parou de funcionar pois alguma dependência foi alterada.

Uma das tentativas de solucionar esse problema é usar build semanais. Onde os desenvolvedores trabalham sem sincronizar código durante quatro dias da semana, e no ultimo dia fazem a sincronização. Essa tentativa lembra um modelo cascata, e simplesmente aumenta e adia as dores para o dia da integração. Com o crescimento do projeto é preciso aumentar a quantidade de dias de integração e assim a produtividade da equipe começa a cair. Por causa disso, o feedback rápido se perde.

> A solução desse problema é particionar o ambiente de desenvolvimento em componentes passíveis de release. Os componentes se tornam unidades de trabalho que podem ser da responsabilidade de um único desenvolvedor ou de uma equipe de desenvolvedores.

Quando um componente se torna funcional, uma release com uma versão deve ser feita. Os demais desenvolvedores usam a aquela versão daquele componente. Os desenvolvedores do componente podem continuar trabalhando no seu componente sem impactar os demais. Ao lançarem novas versões, os consumidores do componente devem analisar se querem aderir a nova versão ou não.

> As mudanças feitas em um componente não precisam ter efeito imediato sobre as outras equipes. Cada equipe pode decidir por conta própria quando adaptará seus componentes aos novos releases dos componentes.

Outra vantagem é que a integração acontece em pequenos incrementos. Ainda que esse processo seja simples racional e amplamente usado ele precisa deve gerenciar a estrutura de dependência dos componentes para que funcione. *Não pode haver ciclos.*

Para tal é preciso que os componentes sigam uma estrutura de grafo acíclico direcionado (DAG - Directed Acyclic Graph).

> Começando em qualquer dos componentes, é impossível seguir as relações de dependência e voltar para o componente inicial.

Dessa maneira é bastante simples descobrir quais componentes são dependentes dos outros. Basta seguir as flechas de dependência de trás para frente. Outra vantagem, é que no momento da release do sistema inteiro, o processo ocorre debaixo para cima. Primeiro os componentes que não tem dependências de outros e depois dos componentes que dependem daqueles componentes, e assim por diante.

No exemplo do livro, a primeira classe seria `Entities`, depois `Interactors`, `Database`, `Presenters`, `Controllers`, `Authorizer`, `View ` e `Main`.

A violação desse princípio é quando temos um ciclo de dependências. Ao fazer alterações em um componente, esse componente depende do próximo que depende do primeiro. E assim, é difícil ou impossível estabelecer uma ordem lógica de mudanças. E o problema da síndrome do dia seguinte volta a acontecer. 

Outro problema com a violação desse princípio é que ele aumenta a dificuldade de preparar os testes, pois agora, é preciso preparar as dependências do seu componente e as dependências do componentes dele.

Existem duas soluções para a violação.

1. Aplicar DIP: Primeiro, cria-se uma interface com os métodos que a classe precisar no *componente que usa* o outro componente. Depois, no *componente usado*, cria-se uma classe que herda/implementa a classe do *componente que usa*.
2. Criar um novo componente: Mova a(s) classe(s) das quais ambos dependem para esse novo componente.

> À medida que a aplicação cresce, a estrutura de dependência dos componentes varia e cresce. Assim, a estrutura de dependência deve sempre ser monitorada com relação a ciclos.

É importante quando os ciclos aparecerem quebrar eles. E isso pode significar o acréscimo de componentes, no segundo caso.

Isso leva a conclusão que a arquitetura deverá ter seu design feito de cima para baixo (top-down design). O que pode ser contra intuitivo, pois diagramas de dependência de componentes devem de alguma forma representar funções do sistema. O que não é verdade.

> Os diagramas de dependências de componentes têm pouco a ver com descrever a função da aplicação. Na verdade, eles são um mapa para a facilidade de se fazer o build e a manutenção da aplicação.

A estrutura de dependências deve isolar volatilidade, ou seja, componentes que são estáveis devem ser protegidos dos que são voláteis.

### SDP: Stable Dependency Principle

É esperado alguma volatilidade nos componentes.

> Um componente que seja difícil de mudar não deve ser dependente de qualquer componente que esperamos que seja volátil. Caso contrário, o componente volátil também será difícil de mudar.

Assim evita-se que um componente se torne difícil de mudar por cause de uma dependência.

> Estável é a propriedade de algo que "não é facilmente movido". A estabilidade está relacionada com a quantidade de trabalho necessária para fazer uma mudança.

Moeda em pé é facilmente derrubada, portanto, é instável. Uma mesa, precisa de muito trabalho para ser movida, portanto, é estável.

> Uma maneira segura de tornar um componente de software difícil de mudar é fazer com que vários componentes de software dependam dele. Um componente do qual muitos dependam é muito estável por que requer muito trabalho par reconciliar eventuais mudanças com todos os componentes dependentes.

Três componentes dependem do componente X. Para cada componente que depende do componente X, o componente X tem uma razão a mais para não mudar. O componente X é dito *estável*.

O componente X é *responsável* pelos componentes que dependem dele.

O componente X é *independente* pois ele não depende de nenhum outro componente.

O componente Y depende de três componentes. O componente Y é dito como muito *instável*.

O componente Y é *irresponsável* pois nenhum componente depende dele.

O componente Y é *dependente* pois qualquer mudança em algum dos componentes que ele depende pode afetar ele.

Existem métricas para calcular a estabilidade de um componente.

> *fan in*: Dependências que chegam. Número de classes fora do componente que dependem das classes contidas no componente.
>
> *fan out*: Dependências que saem. Número de classes contidas nesse componente que dependem de classes de componentes externos.
>
> *I*: Instabilidade. I = *fan-out* / (*fan in* + *fan out*).

O SDP sugere que a métricas de instabilidade de componente deve ser maior que as métricas de instabilidade dos componentes dependentes.

> Os componentes mutáveis estão no topo e dependem do componente estável abaixo.

Quando houver violações do SDP é novamente possível usar o DIP, para inverter o fluxo de dependência e evitar a violação.

### SAP: Stable Abstraction Principle

> Estabelece uma relação entre estabilidade e abstração. Por um lado, ele diz que um componente estável deve também ser abstrato para que essa estabilidade não impeça a sua extensão. Por outro lado, ele afirma que um componente instável deve ser concreto, já que a sua instabilidade permite que o código concreto dentro dele seja facilmente modificado.

A aplicação do SAP e do SDP implica no conceito do DIP a nível de componentes. 

Existem métricas para calcular a abstração de um componente.

> Nc: número de classes concretas
>
> Na: número de classes abstratas.
>
> A: Abstração. Na/Nc.

Por fim é possível estabelecer relação entre Instabilidade e Abstração. Baseado na projeção dos pontos *A* e *I* fica claro onde fica a sequencia principal, área onde os componentes deveriam habitar. Também é possível identificar as zonas de *inutilidade* e de *dor*.

> (Zona da dor) Esse componente é altamente estável, concreto e, por ser rígido, indesejável. Não pode ser estendido por que não é abstrato e é muito difícil de muar por causa da sua estabilidade.

> (Zona da inutilidade) Essa posição é indesejável porque indica abstração máxima sem dependentes. Componentes como esse são inúteis.

> A posição mais recomendável para um componente é em uma das duas extremidades da Sequencia Principal. Os bons arquitetos lutam para colocar a maioria dos componentes nessas extremidades.

Por fim, ainda é possível calcular a Distancia dos componentes da Sequencia Principal. E usar essa métrica para determinar quando um componente precisa ser reexaminado e reestruturado.

# V - Arquitetura

## 15 - O que é arquitetura?

É a forma dada a um sistema pelo seus criadores.

> Primeiro, um arquiteto de software é e continua a ser um programador. [...] Os arquitetos de software são os melhores programadores, e continuam a assumir tarefas de programação enquanto orientam o resto da equipe para um design que maximize a produtividade.

> Eles não podem fazer o seu trabalho de maneira adequada se não vivenciarem os problemas que criam para os demais programadores.

É crucial para uma boa arquitetura deixar o maior numero de opções abertas pelo maior tempo possível.

A arquitetura é menos sobre o funcionamento esperado pelo sistema e mais sobre suportar o ciclo de vida do sistema.

> Uma boa arquitetura torna o sistema fácil de entender, fácil de desenvolver, fácil de manter e fácil de implantar. O objetivo final é minimizar o custo da vida útil do sistema e não maximizar a produtividade do programador.

### Desenvolvimento

Um sistema que não seja fácil de desenvolver não terá um ciclo de vida longo.

> Equipes com estruturas diferentes exigem decisões arquiteturais diferentes.

A arquitetura de um componente por equipe não é a melhor para implantação(deploy).

### Implantação

>  O objetivo da arquitetura de software deve ser criar um sistema que seja facilmente implantado *com uma única ação*.

Como é incomum dos arquitetos considerarem a implantação durante o desenvolvimento inicial. Quando chega o momento de fazer deploy o resultado é um deploy complexo e sofrível.

> Se os arquitetos tivessem considerados as questões de implantação no inicio do processo,poderiam ter optado por menos serviços, um hibrido de serviços e componentes in-process e um meio mais integrado para lidar com as interconexões.

### Operação

É o ciclo que menos tem impacto da arquitetura.

> Quase qualquer dificuldade operacional pode ser resolvida pela inclusão de mais hardware no sistema sem que ocorram impactos drásticos sobrea a arquitetura de software.

Porém, uma boa arquitetura comunica as necessidades do operacionais do sistema.

### Manutenção

A manutenção é o mais caro de todos.

> O conjunto sem fim de novos recursos e o rastro inevitável de feitos e correções consome enormes quantidades de recursos humanos.

Durante a manutenção é muito provável que novos erros sejam criados. Uma boa arquitetura isola os componentes para que evite que novos erros sejam inseridos acidentalmente.

Com esses quatro ciclos de vida do software em mente. Enfim podemos esclarecer o objetivo do arquiteto:

> O objetivo do arquiteto é criar uma forma para o sistema que reconheça a política como o elemento mais essencial do sistema e torne os detalhes *irrelevantes* para essa política. Isso permite que as decisões para esses detalhes sejam *adiadas* e *deferidas*.

Com isso conclui-se que bancos de dados, modelo de apresentação, estratégia de exposição não são decisões que precisam ser tomadas no começo do projeto.

O autor traz exemplos da década de 60, em que o código estava completamente acoplado ao dispositivo IO. A estratégia deles funcionou bem por algum tempo, porem quando o leitor de cartões foi substituído por uma fita magnética todo o código foi impactado.

Num segundo exemplo, o autor tinha um código em que era desacoplado ao dispositivo IO. Quando foi necessário trocar o dispositivo IO, as regras de negócios ficaram intactas e só foi necessário implementar o novo dispositivo IO.

> Bons arquitetos projetam a política de modo que as decisões sobre os detalhes possam ser adiadas e diferidas pelo maior tempo possível.

## 16 - Independência

### Casos de uso

Suportar casos de uso é a primeira preocupação do arquiteto e a prioridade da arquitetura. Um sistema de carrinho de compras vai ter uma estrutura transparente mostrando os casos de uso do sistema.

### Operação

A arquitetura te um papel substancial na operação. Por exemplo, se a aplicação vai rodar vários processos dentro de uma maquina, em várias maquinas independentes.

A decisão de como operar é uma das opções que um bom arquiteto deixa em aberto.

> Um sistema escrito como monólito, e dependente dessa estrutura monolítica, não pode ser atualizado facilmente para múltiplos processos, múltiplas threads ou microserviços caso surja a necessidade.

### Desenvolvimento

Quando a organização for grande, com muitas equipes e muitas organizações. É preciso dividir o desenvolvimento em componentes desenvolvíveis e bem isolados para cada equipe.

### Implantação

> Uma boa arquitetura não depende de dúzias de pequenos scripts de configuração e ajustes em arquivos de propriedades.

### Deixando opções abertas

Uma boa arquitetura equilibra os pontos acima. Não é fácil, por que não sabemos todos casos de usos, requisitos de implantação e estrutura da equipe, e inevitavelmente essas informações mudam.

### Desacoplando camadas

> Separar coisas que mudam por razões diferentes e reunir coisas que mudam pelas mesmas razões - de acordo com o contexto da intenção do sistema.

O que muda por razões diferentes?

> A validação do campo de entrada é uma regra de negócios fortemente ligada à própria aplicação.

Banco de dados, UI, e demais também mudam por razões diferentes

### Desacoplando os casos de uso

Os casos de usos usam e são usados por seus respectivos componentes de outras camadas como UI, e banco de dados.

### Modo de desacoplamento

Quando o desacoplamento é feito, ele permite que os diferentes caso de usos sejam executados em diferentes ambientes com diferentes requisitos de implantação. Para tal, é preciso que os componentes sejam executados servidores separados, e sem depender um dos outros, sendo a comunicação feita pela rede.

> as vezes temos que separar os nossos componentes até o nível do serviço.

### Desenvolvimento independente

> Quando os componentes são fortemente desacoplados, a interferência entre as equipes é mitigada.

### Implantação independente

> Adicionar um novo caso de uso, então seria tão simples quanto adicionar um novo arquivo jar ou serviços ao sistema sem mexer no resto.

### Duplicação

Existem as duplicações verdadeiras que temos que remover.

Existem as duplicações falsas ou acidentais. Aparentemente duplicadas, mas evoluem por caminhos diferentes e por razões diferentes.

> Quando separar verticalmente os casos de uso uns dos outros, você encontrará esse problema, e a tentação aqui será acoplar os casos de uso por eles conterem estruturas de tela similares, algoritmos similares, ou consultas de banco de dados e/ou esquemas similares. Tenha cuidado resista à tentação de cometer o pecado da eliminação automática da duplicação. Certifique-se que a duplicação é real.

### Modos de desacoplamento (novamente)

Três níveis:

1. Nível de fonte: Controlar as dependências entre módulos.
2. Nível de implementação: Controlar as dependências entre unidades implantáveis (jar, DLL, ...). Os componentes precisam ser particionados em unidade independentemente implantáveis.
3. Nível de serviço: Controlar as dependências através das estruturas de dados que enviamos pela rede.

Escolher o 3° modo de desacoplamento diretamente traz um alto custo. Além do que, caso for um serviço desnecessário, ele acarreta em desperdício de esforço, memória e ciclos.

A evolução natural entre os 3 níveis é o que agrega mais valor, e garante tempo para entender as necessidades dos sistemas e evoluir conforme as necessidades evoluem.

> Pessoalmente, prefiro adiar o desacoplamento até o ponto em que um serviço possa ser formado, se necessário, e então, deixar os componentes no mesmo espaço de endereço pelo máximo de tempo possível. Isso deixa aberta a opção de um serviço.

> Uma boa arquitetura deve possibilitar que o sistema nasça como monolito, seja implantado em um único arquivo e, então, cresça como um conjunto de unidades independentemente implantáveis, incluindo serviços e microserviços.

## 17 - Fronteiras: Estabelecendo Limites

> A arquitetura de software é a arte de estabelecer limites que eu chamo de fronteiras. 

As fronteiras vão ajudar na separação de responsabilidade, e a diminuir o acoplamento. E estabelecer quem quais classes e módulos ficam em quais lugares.

Decisões que não estão relacionadas ao negócio, deveriam ser adiadas, como escolher qual framework, banco de dados, servidores web. Uma boa arquitetura de sistema permite adiar essas decisões até o ultimo minuto.

### FitNesse

Estabelecer um limite entre o banco de dados e as regras de negócios, permite que a decisão de acesso aos dados seja adiada. E com isso os problemas relacionados a isso também (consistência de schema, . 

### Quais limites você deve estabelecer e quando?

> O banco de dados é uma ferramenta que as regras de negócio podem usar *indiretamente*. As regras de negócio não precisam conhecer o esquema, a linguagem de consulta, ou qualquer outro detalhe sobre o banco de dados.

As regras de negócio consultam o banco de dados através de uma Interface. As regras de negócio só precisam saber da interface. Dessa maneira, as regras de negócios ficam independentes dos bancos de dados, permitindo adiar a decisão de qual tecnologia usar.

> De fato, a história da tecnologia de desenvolvimento de software é a história de como criar plug-ins de maneira conveniente para estabelecer uma arquitetura de sistema escalonável. As regras centrais de negócio são mantidas separadas e independentes desses componentes, que podem ser opcionais ou implementados de muitas formas diferentes.

### O argumento sobre plug-in

Considerando que os demais componentes que são dependentes das regras de negócio. As fronteiras garantem que mudanças em componentes como UI ou banco de dados não vão impactar as regras de negócio.

> Esse é simplesmente o principio da responsabilidade única de novo. O SRP nos diz onde devemos estabelecer limites.

## 18 - Anatomia do limite

Existem vários tipos de limites.

> O truque para criar um cruzamento de limites adequado é lidar com as dependências de código-fonte.

### Cruzando limites

> O cruzamento de limites não é nada mais do que uma função de um lado do limite chamando uma função do outro lado e transmitindo alguns dados.

Quando o código fonte muda, as suas dependências precisam mudar e ser recompiladas. Por isso é importante estabelecer um sentido para as mudanças, não queremos que quando o banco de dados mude, isso tenha impacto nas regras de negócio.

### O temido monolito

O limite mais simples, pode ser encontrado nos monolitos. Pois nele não tem uma restrição física. Mesmo em um monolito é possível e importante que se estabeleça os limites.

Dentro do monolito existem dois exemplos de cruzamentos de limites.

Exemplo: Cliente mais baixo chamando um serviço mais alto. (Framework chamando um use case).
Nesse caso, o cliente mais baixo pode simplesmente invocar os métodos do serviço mais alto. As dependências ficam do lado do Framework. Mudar o framework não altera o serviço.

Exemplo: Cliente mais alto chamando um serviço mais baixo. ( Use case chamando um banco de dados ).
Nesse caso, o cliente alto invoca os métodos de uma interface que estão no mesmo nível que o seu. O serviço mais baixo implementa a interface de nível mais alto.

### Componentes de implantação

A implantação não envolve compilação. Somente o uso de binários agrupados em um único arquivo ou diretório executável.

Mesmas estrategias para segregar componentes que dos monolitos.

### Processos locais

Apartir daqui existe um limite arquitetural físico, a memória. Ou o fato, de se evitar compartilhamento dela. 

> A estratégia de segregação entre processos locais é a mesma aplicável a monolitos e componentes binários.

O processos locais de nível mais alto, não devem conter nomes, endereços físicos ou qualquer informação sobre os processos locais de níveis mais baixos.

### Serviços

O limite mais forte é um serviço. Roda em processos separados e até maquinas separadas.

> As mesmas regras se aplicam aos serviços e processos locais. Os serviços de nível mais baixos devem ser plug-ins para serviços de nível mais alto.

## 19 - Política e Nível

Programa de software é um conjunto de politicas que descrevem uma entrada e uma saída.

Parte da arquitetura é agrupar as politicas que mudam pelos mesmas razões, no mesmo momento e que estão no mesmo nível e separar as que não compartilham essas carácteristicas devem ser separadas.

> A palavra nível pode ser definida de forma restrita como "distância das entradas e saídas". Quanto mais longe uma política está das entradas e saídas do sistema, maior é o seu nível. As políticas que lidam com entradas e saídas são as políticas de nível mais baixo no sistema.

Queremos que as dependências de código-fonte sejam desacopladas do fluxo de dados e *acopladas ao nível*.









