---
id: '978-8550800653'
title: 'Domain Driven Design'
language: 'pt-BR'
status: 'Reading'
coverPath: 'domain-driven-design'
date: '2021-04-04'
---

# Introdução

> Se você estiver tentando adicionar automação a uma empresa humana complicada, seu software não tem como fugir dessa complexidade - tudo que ele pode fazer é controla-la.

> Mas a lição aprendida com a experiência de Eric é que os modelos de domínio verdadeiramente bons evoluem com o tempo, e até mesmo os modeladores mais experientes acreditam que adquirem suas melhores ideias após o lançamento inicial de um sistema.

# Prefácio

> Uma característica comum aos sucessos obtidos foi um modelo de domínio rico que evoluiu através de iterações de design e passaram a fazer parte do tecido que compunha o projeto.

## O desafio da complexidade

> Quando a complexidade foge ao controle os desenvolvedores já não podem entender o software bem o suficiente para alterá-lo ou expandi-lo com facilidade e segurança. Por outro lado, um bom design pode criar oportunidades para explorar essas características complexas.

> 1. Na maioria dos projetos de software, o principal foco de ser o domínio e a lógica do domínio.
> 2. Designs de domínio complexos devem se basear em um modelo.

> O DDD é uma maneira de pensar e um conjunto de prioridades, voltado para a aceleração de projetos de software que tem que trabalhar com domínios complicados.

## Design *versus* processo de desenvolvimento

> É uma colaboração entre quem conhece o domínio e quem sabe como construir softwares.

>Embora o medo de exigências não antecipadas geralmente leve ao exagero na área de engenharia, a tentativa de se evitar o exagero na engenharia pode se transformar em outro medo, o medo de raciocinar profundamente sobre o design.

# I - Colocando o modelo de domínio em ação

>Mapas são modelos, e cada modelo representa algum aspecto da realidade com uma ideia que seja de interesse. Um modelo é uma simplificação. Ele é uma interpretação da realidade que destaca os aspectos relevantes para resolver o problema que se tem em mãos ignorando os detalhes estranhos.

> (O modelo) Ele não é simplesmente o conhecimento existente na cabeça de um especialista em domínios; *ele é uma abstração rigorosamente organizada e seletiva daquele conhecimento.*

> O coração do software está na sua capacidade de resolver problemas relacionados ao domínio para o seu usuário. Todas as outras características, por mais vitais que possam ser, se apoiam nessa finalidade básica.

> A complexidade existente no coração de um software deve ser enfrentada cara a cara. Qualquer tentativa de se fazer o contrário é arriscar a irrelevância.

> Um desenvolvedor de software tem essa mesma perspectiva quando se depara com um domínio complicado e que nunca foi formalizado. Criar um modelo lúcido que elimine essa complexidade é algo excitante.

## Meu Sumário

Mapas são modelos que representam aspectos da realidade. Uma simplificação da realidade. Programas de software estão relacionados com domínios de negócio. Modelos ajudam em estruturar o conhecimento necessário para criar o software de forma simplificada.

O foco dos modelos é transmitir o conhecimento, e não detalhar todo o conhecimento existente.

Um modelo DDD tem 3 utilidades básicas:

1. *O modelo e o coração do design dão forma um ao outro*: Modelo e implementação tem ligação intima.
2. *O modelo é a espinha dorsal de uma linguagem utilizada por todos os membros da equipe*: Linguagem de comunicação entre desenvolvedores e especialistas.
3. *O modelo é um conhecimento destilado*: É a forma que a equipe entende e estrutura o sistema. É dinâmico e evolui.

O coração do software está na capacidade de resolver problemas do domínio. Se o domínio é muito complexo, deve-se enfrentar a complexidade para tentar reduzi-la.

## UM - Assimilando o conhecimento

> Escrevi um protótipo bastante simples, movido por um framework de teste automatizado. Evitei toda a infraestrutura. Não havia nenhuma persistência e nenhuma interface com o usuário (IU).

### Os ingredientes de uma modelagem eficaz

> É a criatividade das ideias e da experimentação maciça, alavancadas através de uma linguagem baseada em modelos e disciplinada pelo ciclo de feedback, através da implementação, que possibilita encontrar um modelo rico em conhecimento e destila-lo.

### Assimilando o conhecimento

> Essa destilação é uma expressão rigorosa do conhecimento especifico considerado mais relevante.

> Mas, se não estiverem interessados no domínio, os programadores aprendem somente o que o aplicativo deve fazem e não os princípios existentes por trás dele. Softwares úteis podem ser construídos dessa forma, mas o projeto nunca chegará ao ponto em que novos recursos poderosos revelam como corolários aos antigos recursos.

> A interação entre os membros da equipe muda à medida que todos os membros digerem aquele modelo em conjunto.

### Aprendizado contínuo

> Quando decidimos escrever um software, nunca sabemos o suficiente.

> Equipes altamente produtivas aumentam seu conhecimento conscientemente, praticando o aprendizado contínuo.

### Extraindo um conceito oculto

> Um design mais explicito apresenta as seguintes vantagens:
>
> 1. Para que o design chegue a esse estágio [Explícito], os programadores e todas as outras pessoas envolvidas terão de entender a natureza do overbooking [regra do domínio] como uma regra de negócio distinta e importante, e não simplesmente um cálculo obscuro.
> 2. Os programadores podem mostrar aos especialistas daquele negócio artefatos técnicos, até mesmo códigos, que devem ser inteligíveis para os especialistas de domínio (com um pouco de ajuda), fechando assim um ciclo de feedback.

### Modelos profundos

> A assimilação do conhecimento é uma exploração, e é impossível saber onde se pode chegar.

### Meu Sumário

O capitulo começa com uma conversa entre especialistas do domínio e os desenvolvedores. Onde eles desenham juntos um modelo do domínio. Uma vez que o desenvolvedor da conversa tem esse exemplo ele foca em construir esse modelo focando nas camadas de negócios, e usando testes para trazer segurança que o código foi escrito da maneira correta. Isso trouxe uma velocidade para a demonstração do domínio para os especialistas, o que trouxe novos feedbacks e evolução do modelo.

O que torna uma modelagem eficaz?

1. Ligando o modelo e a implementação: Protótipo do modelo para entender viabilidade.
2. Cultivando uma linguagem baseada no modelo: Tanto os desenvolvedores quanto os especialistas conhecem e podem utilizar a linguagem do modelo. A linguagem é útil e representa as partes mais relevantes do domínio.
3. Desenvolvendo um modelo rico em conhecimento: O modelo não é somente um desenho, ele de fato representa o conhecimento da área de negócio.
4. Destilando o modelo: Os conceitos representados no modelo são mutáveis de acordo com a importância que eles tem. Quando param de ser importantes são removidos do modelo. Assim como, novos conceitos são adicionados conforme o entendimento avança.
5. Colhendo ideias e experimentando: A linguagem tem um papel fundamental em transformar qualquer conversa em um laboratório de experimentação. Cada frase poem em prova o modelo, e traz visibilidade para possíveis melhorias.

Ou seja, uma modelagem eficaz, traz transparência e entendimento conjunto para o domínio de negócio. A transparência permite que o domínio seja constantemente exercitado e criticado o que facilita no refinamento do modelo assim como no assimilação do conhecimento.

Os modeladores de domínio devem buscar ativamente quais são as informações mais importantes do domínio. Não é esperado que uma primeira seja uma versão que representa perfeitamente o domínio, justamente o oposto, vários modelos serão tentados, rejeitados e sofrerão transformações até encontrar um modelo que representa o conhecimento considerado mais importante do domínio.

O modelador deve ativamente engajar em discussões com especialistas do domínio, não sendo portanto, uma responsabilidade exclusiva dele a assimilação do conhecimento. Metodologias em etapas (método cascata) que separam os desenvolvedores dos especialistas do domínio tendem portanto a alcançar resultados inferiores pela falta de feedback e restrição da informação. Metodologias iterativas, reduzem o problema, e permite a criação de uma aplicação que atende as necessidades, principalmente se a refatoração acontecer conforme o projeto evolui. Entretanto, se não houver uma busca dos desenvolvedores em aprender o domínio, a aplicação nunca chegará a um ponto onde novos recursos sejam construídos com facilidade sobre o que já existe.

Conforme o entendimento dos desenvolvedores evolui, o modelo acaba sendo refinado e os conhecimentos mais relevantes descritos por ele mudam. Ou seja, o refinamento do modelo faz parte de um processo de aprendizado contínuo e não pontual.

**Palavras chaves**: modelagem eficaz, assimilar conhecimento, aprendizado contínuo, refinamento do modelo, design explicito, modelo profundo.

## DOIS - Comunicação e uso da linguagem

### LINGUAGEM ONIPRESENTE

> Para criar um design flexível e rico em conhecimento é necessário ter uma linguagem versátil compartilhada pela equipe e uma experiência ativa com a linguagem que raramente acontecem em projetos de software.

> Um projeto enfrenta sérios problemas quendo sua linguagem é ferida.
>
> Os especialistas daquele domínio utilizam seu jargão enquanto os membros da equipe técnica possuem sua própria linguagem sintonizada para discutir o domínio em termos do design.
>
> A terminologia das discussões do dia a dia fica desligada da tecnologia embutida no código (que, em última instância, é o produto mais importante de um projeto de software). E até mesmo um única pessoa utiliza uma linguagem diferente na fala e na escrita de forma que as expressões mais incisivas do domínio geralmente aparecem em uma forma transitória que nunca é captda no código ou até mesmo na escrita.
>
> A tradução enfraquece a comunicação e torna anêmica a assimilação do conhecimento
>
> Nenhum desses dialetos pode se tornar uma linguagem comum porque nenhum deles atende todas as necesseidades.

> O vocabuláro dessa LINGUAGEM ONIPRESENTE inclui os nomes das classes e operações de destaque. A LINGUAGEM inclui termos para discutir regras que se tornaram explícitas no modelo. E é suplementada com termos provenientes de princípios de organização de alto nível impostos sobre o modelo.

### Modelando em voz alta

> Á medida que usamos a LINGUAGEM ONIPRESENTE do modelo do domínio as discussões - sobretudo discussões em que os desenvolvedores e os especialistas do domínio esboçam cenários e requisitos - ficamos mais fluentes na linguagem e ensinamos uns aos outros suas nuances.

### Uma equipe, uma linguagem

> Se especialistas de um domínio sofisticados não entenderem o modelo, há algo errado com o modelo.

> Em um processo Agile, os requisitos evoluem à medida que o projeto anda, pois raramente o conhecimento existo logo no inicio para especificar adeequadamente um aplicativo.

### Documentos e diagramas

> Diagramas são um meio de comunicação e de explicação e facilitam a captação de ideias.

> O modelo não é o diagrama.

### Documentos de design escritos

> Caa processo Agile tem sua própria filosofia sobre os documetnos. O Extreme Programming defende não usar absolutamente nenhum documento de dessign extra e deixar o código falar por si mesmo.

> Outros documentos precisam esclarecer o significado, fazer entender as estruturas em larga escala e concetntrar a atenção nos elementos principais.

> Documentos escritos devem complementar o código e a conversa.

> Ao manter os documetnos encutos e contrá-los na complementação do código e das conversas, eles podem permanecer conectados ao projeto.

### Base executável

> É preciso ser meticuloso para escrever um código que não simplismente *faça* a coisa certa mas tambem *diga* a coisa certa.

### Modelos explanatórios

> O fator propulsor deste livro é que um modelo deve trazer consigo a implementação, o design e a comunicação da equipe.

> Modelos explanatórios oferecem a liberdade de criar estilos muito mais comunicativos feitos de acordo com um determinado tópico.

> Não há necessidade de que os modelos explanatórios sejam modelos de objetos, e geralmente é melhor que não sejam.

### Meu Sumário




















