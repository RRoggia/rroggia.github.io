---
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

