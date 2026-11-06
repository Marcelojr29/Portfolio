# FRD – Portfólio Online

Nov 5, 2026 · @Marcelo Borges de Oliveira Junior

## 1. Introdução

O portfólio online é um site de página única que apresenta Marcelo Borges como desenvolvedor Frontend (Angular e React) com experiência FullStack, para que recrutadores, líderes técnicos e clientes entendam seu perfil em menos de dois minutos e entrem em contato.

**Objetivo do documento.** Definir o que o site deve fazer (requisitos funcionais), as regras que governam seu conteúdo e os critérios para considerá-lo pronto. As decisões de implementação estão resumidas na seção 7.

**Objetivos do produto**

- Servir como prova prática da stack declarada no currículo (Angular moderno, TypeScript, SSR/prerender).
- Ser o link principal em candidaturas, no LinkedIn e no GitHub, com pré-visualização correta ao ser compartilhado.
- Facilitar o contato direto em até dois cliques a partir de qualquer ponto da página.
- Ser fácil de atualizar: trocar um projeto ou uma experiência deve exigir editar um arquivo de conteúdo, não código de tela.

**Definições**

| Termo | Significado |
| --- | --- |
| FRD | Documento de Requisitos Funcionais |
| RF / RN / RNF | Requisito Funcional / Regra de Negócio / Requisito Não Funcional |
| SPA | Aplicação de página única |
| Prerender (SSG) | Geração do HTML de cada rota no build, publicado como arquivos estáticos |
| Hidratação | Etapa em que o Angular assume o HTML pré-renderizado no navegador |

## 2. Escopo

A versão 1 é um site estático, em português, com conteúdo em arquivo local e formulário de contato por serviço externo; qualquer funcionalidade que exija servidor próprio fica para fases posteriores.

**Dentro do escopo (v1)**

- Página inicial com apresentação, experiência, projetos, stack, formação e contato.
- Páginas de detalhe para cada projeto em destaque.
- Tema claro e escuro.
- Download do currículo em PDF.
- Links para LinkedIn, GitHub e e-mail.
- SEO básico e pré-visualização de links (Open Graph).
- Prerender das rotas no build e publicação como site estático.

**Fora do escopo (v1)**

- Backend próprio (API .NET), banco de dados e autenticação.
- Painel administrativo para editar conteúdo.
- Blog com publicação dinâmica.
- Múltiplos idiomas completos (a estrutura deve permitir, mas a v1 entrega só português).
- Analytics próprio (será usado serviço externo, se desejado).

## 3. Perfis de usuário

O site atende principalmente quem avalia Marcelo para uma vaga ou um serviço, e cada perfil procura algo diferente na página.

| Perfil | O que procura | Como o site atende |
| --- | --- | --- |
| Recrutador | Senioridade, stack, tempo de experiência, forma de contato | Resumo no topo, linha do tempo de experiência, botão de currículo e contato visíveis |
| Líder técnico | Qualidade de código, projetos reais, decisões técnicas | Projetos com stack, desafio e resultado; link para repositório e demo |
| Cliente de freelance | Serviços, prazos, forma de falar com o desenvolvedor | Seção de serviços/atuação e formulário de contato |
| Visitante via LinkedIn ou GitHub | Confirmar quem é a pessoa por trás do perfil | Resumo curto e links cruzados entre as plataformas |
| Marcelo (administrador) | Atualizar conteúdo sem mexer em componentes | Conteúdo centralizado em arquivos JSON/TS versionados |

## 4. Requisitos funcionais

O site tem 16 requisitos funcionais, agrupados por área; a prioridade segue MoSCoW (Must, Should, Could) e define o que entra no MVP.

**Estrutura e navegação**

| ID | Requisito | Prioridade |
| --- | --- | --- |
| RF01 | O site deve ter cabeçalho fixo com links de âncora para as seções (Sobre, Experiência, Projetos, Stack, Formação, Contato). | Must |
| RF02 | Ao clicar em um link do menu, a página deve rolar suavemente até a seção e destacar o item ativo conforme a rolagem. | Should |
| RF03 | Em telas pequenas, o menu deve virar um menu recolhível (hambúrguer) que fecha ao selecionar um item. | Must |
| RF04 | O rodapé deve repetir os links de contato e redes sociais. | Should |

**Conteúdo**

| ID | Requisito | Prioridade |
| --- | --- | --- |
| RF05 | A seção Sobre deve exibir nome, título profissional, foto, resumo de até 4 linhas e os botões "Baixar currículo" e "Falar comigo". | Must |
| RF06 | A seção Experiência deve listar cargos em ordem cronológica inversa, com empresa, período, cidade e principais entregas. | Must |
| RF07 | A seção Projetos deve exibir cards com nome, descrição curta, tecnologias, link do repositório e link da demo (quando existir). | Must |
| RF08 | Cada projeto em destaque deve ter página própria com contexto, desafio, solução técnica e resultado. | Should |
| RF09 | A seção Stack deve agrupar tecnologias por categoria (Front-end, Back-end, Banco de dados, DevOps, Ferramentas). | Must |
| RF10 | A seção Formação deve listar graduação, curso técnico e certificações com instituição e ano. | Must |

**Interação e contato**

| ID | Requisito | Prioridade |
| --- | --- | --- |
| RF11 | O formulário de contato deve ter nome, e-mail e mensagem, validar os campos e exibir confirmação de envio ou mensagem de erro. | Must |
| RF12 | O botão "Baixar currículo" deve baixar o PDF atual sem sair da página. | Must |
| RF13 | O usuário deve poder alternar entre tema claro e escuro, e a escolha deve ser lembrada no navegador. | Should |
| RF14 | Os links para LinkedIn, GitHub e e-mail devem estar visíveis no topo e no rodapé e abrir em nova aba (exceto e-mail). | Must |

**Descoberta e compartilhamento**

| ID | Requisito | Prioridade |
| --- | --- | --- |
| RF15 | Cada rota deve ter título, descrição e imagem Open Graph próprios para pré-visualização em WhatsApp, LinkedIn e Slack. | Must |
| RF16 | O site deve publicar `sitemap.xml`, `robots.txt` e dados estruturados do tipo Person (JSON-LD). | Should |

## 5. Regras de negócio

As regras abaixo valem para qualquer conteúdo publicado e evitam inconsistência entre o site, o currículo e os perfis externos.

| ID | Regra |
| --- | --- |
| RN01 | O conteúdo do site deve ser coerente com o currículo e o LinkedIn: cargos, datas e empresas idênticos nas três fontes. |
| RN02 | Todo projeto exibido deve ter ao menos descrição, tecnologias e um link (repositório ou demo). Projeto sem link não é publicado. |
| RN03 | Projetos feitos para empresas só aparecem sem dados sensíveis (nome de cliente, regras internas, capturas de tela com dados reais), respeitando contratos e acordos de confidencialidade. |
| RN04 | A ordem dos projetos é definida por relevância para as vagas-alvo, não por data; no máximo 6 projetos na página inicial. |
| RN05 | Apenas o e-mail profissional é exposto; telefone e endereço não aparecem no site. |
| RN06 | O PDF do currículo disponível para download deve ser sempre a versão mais recente e ter o nome `Nome-Sobrenome-Curriculo.pdf`. |
| RN07 | Mensagens do formulário de contato não são armazenadas pelo site; seguem direto para o e-mail do dono pelo serviço de envio. |
| RN08 | Se o site coletar qualquer dado de navegação (analytics), deve exibir aviso de privacidade conforme a LGPD. |
| RN09 | Textos de apresentação devem estar em português do Brasil, sem erros ortográficos, e revisados antes de cada publicação. |

## 6. Requisitos não funcionais

O site deve ser rápido, acessível e fácil de manter; as metas abaixo são mensuráveis com Lighthouse e ferramentas de acessibilidade.

| ID | Categoria | Requisito | Meta |
| --- | --- | --- | --- |
| RNF01 | Desempenho | Pontuação de desempenho no Lighthouse (mobile) | ≥ 90 |
| RNF02 | Desempenho | Largest Contentful Paint em conexão 4G | ≤ 2,5 s |
| RNF03 | Desempenho | Tamanho do bundle inicial de JavaScript | ≤ 200 KB (gzip) |
| RNF04 | SEO | Pontuação de SEO no Lighthouse | ≥ 95 |
| RNF05 | SEO | Conteúdo de cada rota presente no HTML inicial (prerender) | 100% das rotas |
| RNF06 | Acessibilidade | Pontuação de acessibilidade no Lighthouse e conformidade com WCAG 2.1 AA (contraste, foco visível, navegação por teclado, textos alternativos) | ≥ 95 |
| RNF07 | Responsividade | Layout funcional de 320 px a 1920 px de largura, sem rolagem horizontal | Todas as larguras |
| RNF08 | Compatibilidade | Últimas 2 versões de Chrome, Edge, Firefox e Safari (desktop e mobile) | Sem falhas visuais |
| RNF09 | Segurança | Site servido apenas por HTTPS, com cabeçalhos de segurança básicos e sem chaves secretas no código do front-end | Obrigatório |
| RNF10 | Disponibilidade | Hospedagem estática em CDN, sem servidor próprio e sem cold start | ≥ 99,9% |
| RNF11 | Manutenibilidade | Conteúdo separado da apresentação, componentes standalone reutilizáveis, TypeScript estrito e lint configurado | Obrigatório |
| RNF12 | Qualidade | Testes unitários dos componentes principais e do serviço de conteúdo, executados no pipeline de CI | Pipeline verde para publicar |
| RNF13 | Privacidade | Sem cookies de terceiros na v1; qualquer analytics deve respeitar a LGPD | Obrigatório |

## 7. Arquitetura e stack

O site é um front-end Angular sem servidor próprio: o conteúdo entra no build, cada rota vira HTML estático e o único ponto dinâmico é o formulário de contato.

&#91;embedded content: arquitetura · build estático, formulário externo e API opcional\]

Tudo que o visitante recebe é gerado antes da publicação; a API .NET só entra na fase 3, se houver funcionalidade que a justifique.

**Decisões de stack**

| Camada | Escolha | Motivo |
| --- | --- | --- |
| Front-end | Angular (Signals, standalone components, novo control flow) | Stack principal; o projeto serve de prova do currículo |
| Renderização | SSR com prerender e `outputMode` estático | HTML pronto por rota para SEO e preview de links, sem servidor Node |
| Conteúdo | Arquivos JSON/TS tipados | Atualizar sem mexer em telas; a troca futura por API muda só o serviço de conteúdo |
| Formulário | Serviço externo (Formspree, EmailJS ou similar) | Evita backend na v1 |
| Hospedagem | Vercel, Netlify ou Cloudflare Pages | Gratuita, com CDN e HTTPS |
| Backend (fase 3) | API .NET 10 | Só se houver funcionalidade que justifique, como painel, blog ou contador de visitas |

## 8. Modelo de conteúdo e rotas

Todo o conteúdo vive em arquivos tipados em `src/app/data/`, lidos por um serviço único; assim, atualizar o site é editar dados, e a futura troca por uma API .NET muda só esse serviço.

**Rotas (todas prerenderizadas)**

| Rota | Conteúdo |
| --- | --- |
| `/` | Página inicial com todas as seções |
| `/projetos/:slug` | Detalhe de um projeto em destaque |
| `/**` | Página 404 com link de volta ao início |

**Entidades de conteúdo**

| Entidade | Campos principais |
| --- | --- |
| Perfil | nome, título, resumo, foto, e-mail, links (LinkedIn, GitHub), URL do currículo |
| Experiência | empresa, cargo, cidade, início, fim (opcional), lista de entregas, tecnologias |
| Projeto | slug, nome, descrição curta, descrição completa, tecnologias, repositório, demo, imagem, destaque (sim/não), ordem |
| Tecnologia | nome, categoria, ícone, nível (opcional) |
| Formação | instituição, curso, tipo (graduação, técnico, certificação), ano de início e de conclusão |

## 9. Critérios de aceite

A v1 está pronta quando todos os itens abaixo forem marcados.

- [ ] Todos os requisitos Must (RF01, 03, 05, 06, 07, 09, 10, 11, 12, 14, 15) estão implementados e testados.
- [ ] O build gera um `index.html` com conteúdo dentro para cada rota (RNF05), e o `outputMode` está como `static`.
- [ ] Ao colar o link no WhatsApp e no LinkedIn, o card exibe título, descrição e imagem corretos.
- [ ] Lighthouse mobile: desempenho ≥ 90, SEO ≥ 95 e acessibilidade ≥ 95.
- [ ] O site funciona de 320 px a 1920 px nos 4 navegadores-alvo.
- [ ] O formulário envia uma mensagem real para o e-mail do dono e trata erro de rede.
- [ ] O PDF do currículo baixa corretamente e confere com o conteúdo do site (RN01).
- [ ] A navegação completa é possível apenas com teclado.
- [ ] O pipeline de CI executa lint, testes e build, e a publicação acontece automaticamente a partir da branch principal.
- [ ] O domínio responde por HTTPS e o site está indexável (`robots.txt` e `sitemap.xml` no ar).

**Métricas de sucesso (30 dias após a publicação)**

- O link do portfólio consta no currículo, no LinkedIn e no GitHub.
- Ao menos uma conversa com recrutador ou cliente originada pelo formulário ou pelo e-mail do site.
- O nome completo aparece na primeira página de resultados do Google ao ser pesquisado (meta de médio prazo, pois depende da indexação).

## 10. Roadmap em fases

O desenvolvimento acontece em três fases: o MVP publica o essencial, os refinos completam a v1 e o backend só é aberto depois, se fizer sentido.

&#91;embedded content: roadmap · 3 fases, 2 gates\]

Cada fase só começa quando o gate anterior é cumprido; as datas ficam em aberto até o conteúdo e o domínio serem definidos (seção 11).

## 11. Premissas, riscos e pontos em aberto

O maior risco é o site ficar desatualizado ou inacabado, e não um problema técnico; por isso o escopo da v1 é enxuto.

**Premissas**

- O conteúdo (textos, foto, projetos, PDF do currículo) será fornecido pelo próprio Marcelo antes do desenvolvimento das seções.
- Haverá domínio próprio, ou será aceito um subdomínio gratuito da plataforma de hospedagem.
- Um serviço externo de formulário (Formspree, EmailJS ou similar) atende ao volume esperado de mensagens.

**Riscos**

| Risco | Impacto | Mitigação |
| --- | --- | --- |
| Portfólio desatualizado em relação ao currículo | Alto | Conteúdo em arquivo único e revisão a cada mudança de cargo ou projeto (RN01) |
| Escopo crescer antes da v1 sair | Alto | Manter blog, painel e API fora da v1 e só abrir a fase 3 depois da publicação |
| Projetos sem material publicável por confidencialidade | Médio | Usar projetos pessoais e de estudo, ou versões anonimizadas (RN03) |
| `outputMode` ficar como `server` e exigir servidor Node | Médio | Conferir no `angular.json` e validar a saída estática no CI |
| Serviço de formulário externo cair ou limitar envios | Baixo | Exibir o e-mail direto como alternativa visível |

**Pontos em aberto**

- [ ] Qual será o domínio e a plataforma de hospedagem (Vercel, Netlify ou Cloudflare Pages)?
- [ ] Quais projetos entram como destaque na v1 e quais têm repositório público?
- [ ] A seção de serviços para freelance entra na v1 ou fica para depois?
- [ ] Haverá versão em inglês em alguma fase?
- [ ] Qual serviço de formulário e de analytics (se houver) será usado?
