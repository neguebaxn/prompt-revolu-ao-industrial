import './App.css'

const features = [
  'Linha do tempo interativa',
  'Conteudos por periodo historico',
  'Quiz com pontuacao',
  'Ranking de desempenho',
  'Painel administrativo web',
  'App mobile com Expo Go',
]

const technologies = [
  { name: 'Spring Boot', role: 'API REST e regras do quiz' },
  { name: 'SQL Server', role: 'Conteudos, perguntas e ranking' },
  { name: 'Vite + React', role: 'Site web e painel administrativo' },
  { name: 'React Native + Expo', role: 'Aplicativo mobile para alunos' },
]

const sprints = [
  {
    period: 'Semanas 1 a 3',
    title: 'Engenharia de Requisitos',
    goal: 'Definir escopo, telas, requisitos e modelagem inicial.',
    backlog: ['Requisitos funcionais e nao funcionais', 'DER do banco', 'Wireframes', 'Entidades principais'],
    deliverable: 'Documento de requisitos, prototipo e script SQL inicial.',
  },
  {
    period: 'Semanas 4 a 6',
    title: 'Infraestrutura Inicial',
    goal: 'Fazer backend, banco, web e mobile se comunicarem.',
    backlog: ['Spring Data JPA', 'Endpoints GET', 'Rotas no React', 'Projeto Expo rodando no celular'],
    deliverable: 'Primeira versao integrada consumindo dados da API.',
  },
  {
    period: 'Semanas 7 a 9',
    title: 'Conteudo Interativo',
    goal: 'Implementar a linha do tempo e os conteudos historicos.',
    backlog: ['Periodos da Revolucao', 'Tela de fatos historicos', 'Painel administrativo', 'Endpoints POST, PUT e DELETE'],
    deliverable: 'Web e mobile exibindo conteudos reais sobre a Revolucao Francesa.',
  },
  {
    period: 'Semanas 10 a 12',
    title: 'Quiz e Gamificacao',
    goal: 'Criar quiz, pontuacao e ranking.',
    backlog: ['Perguntas e alternativas', 'Validacao de respostas', 'Feedback visual', 'Ranking salvo no banco'],
    deliverable: 'Fluxo completo de quiz com resultado final.',
  },
  {
    period: 'Semanas 13 a 15',
    title: 'Integracao e Testes',
    goal: 'Corrigir bugs, validar rotas e melhorar a experiencia.',
    backlog: ['Tratamento de erros', 'Carga final de dados', 'Testes de usabilidade', 'Responsividade'],
    deliverable: 'Sistema estavel e pronto para demonstracao.',
  },
  {
    period: 'Semanas 16 ate Outubro',
    title: 'Apresentacao Final',
    goal: 'Finalizar documentacao, slides e demo.',
    backlog: ['Video demonstrativo', 'Slides', 'Roteiro de fala', 'Plano de contingencia'],
    deliverable: 'TCC pronto para a banca.',
  },
]

const teamTasks = [
  {
    group: 'Alunos com computador',
    tasks: ['API em Spring Boot', 'Banco SQL Server', 'Frontend web', 'Deploy e integracoes'],
  },
  {
    group: 'Alunos com celular',
    tasks: ['Expo Snack', 'Design e prototipos', 'Pesquisa historica', 'Testes, slides e documentacao'],
  },
]

const timeline = [
  { date: '1789', event: 'Queda da Bastilha e inicio da Revolucao Francesa' },
  { date: '1791', event: 'Monarquia Constitucional e nova organizacao politica' },
  { date: '1792', event: 'Convenção Nacional e fim da monarquia' },
  { date: '1795', event: 'Diretorio assume o governo frances' },
  { date: '1799', event: 'Golpe do 18 de Brumario e ascensao de Napoleao' },
]

function App() {
  return (
    <main>
      <header className="hero" id="inicio">
        <nav className="topbar" aria-label="Navegacao principal">
          <a className="brand" href="#inicio">TCC Revolucao Francesa</a>
          <div className="nav-links">
            <a href="#sprints">Sprints</a>
            <a href="#equipe">Equipe</a>
            <a href="#deploy">Deploy</a>
          </div>
        </nav>

        <section className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Projeto educacional em React + Vite</p>
            <h1>Historia da Revolucao Francesa em uma plataforma interativa</h1>
            <p className="lead">
              Um site de apresentacao do TCC com planejamento, arquitetura, sprints,
              tecnologias e estrategia de trabalho para alunos com computador e celular.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#sprints">Ver pipeline</a>
              <a className="button secondary" href="#arquitetura">Arquitetura</a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Resumo do produto">
            <span className="panel-label">Produto final</span>
            <div className="panel-number">6</div>
            <p>sprints para sair do escopo ate a apresentacao do TCC.</p>
            <div className="mini-grid">
              <span>Web</span>
              <span>Mobile</span>
              <span>API</span>
              <span>Banco</span>
            </div>
          </div>
        </section>
      </header>

      <section className="section intro-section">
        <div>
          <p className="eyebrow">Objetivo</p>
          <h2>Construir, testar e apresentar um sistema educativo completo.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature}>
              <span aria-hidden="true">+</span>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="arquitetura">
        <div>
          <p className="eyebrow">Arquitetura</p>
          <h2>Tecnologias separadas por responsabilidade.</h2>
          <p className="section-text">
            A proposta permite que cada parte evolua de forma independente, mantendo
            uma versao demonstravel ao final de cada sprint.
          </p>
        </div>
        <div className="tech-list">
          {technologies.map((tech) => (
            <article className="tech-item" key={tech.name}>
              <strong>{tech.name}</strong>
              <span>{tech.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Conteudo historico</p>
          <h2>Exemplo de linha do tempo para o produto.</h2>
        </div>
        <div className="history-timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.date}>
              <span>{item.date}</span>
              <p>{item.event}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="sprints">
        <div className="section-heading">
          <p className="eyebrow">Pipeline</p>
          <h2>Plano de desenvolvimento em 6 sprints.</h2>
        </div>
        <div className="sprint-grid">
          {sprints.map((sprint, index) => (
            <article className="sprint-card" key={sprint.title}>
              <div className="sprint-topline">
                <span>Sprint {index + 1}</span>
                <small>{sprint.period}</small>
              </div>
              <h3>{sprint.title}</h3>
              <p>{sprint.goal}</p>
              <ul>
                {sprint.backlog.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <strong>{sprint.deliverable}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section team-section" id="equipe">
        <div>
          <p className="eyebrow">Equipe</p>
          <h2>Divisao pensada para a restricao de hardware.</h2>
        </div>
        <div className="team-grid">
          {teamTasks.map((team) => (
            <article className="team-card" key={team.group}>
              <h3>{team.group}</h3>
              <ul>
                {team.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section survival-section">
        <div>
          <p className="eyebrow">Estrategia de aula</p>
          <h2>Como manter o projeto andando mesmo com pouco tempo.</h2>
        </div>
        <div className="survival-list">
          <p>Usar Expo Snack no navegador do celular para o frontend mobile.</p>
          <p>Sincronizar codigo e conteudo pelo GitHub no inicio de cada aula tecnica.</p>
          <p>Priorizar entregas pequenas: uma rota, uma tela, um teste ou um texto revisado.</p>
          <p>Gravar uma demo para apresentar mesmo se a internet falhar.</p>
        </div>
      </section>

      <section className="section deploy-section" id="deploy">
        <div>
          <p className="eyebrow">Vercel</p>
          <h2>Pronto para deploy estatico.</h2>
          <p className="section-text">
            Este frontend roda com Vite. No Vercel, use o comando de build
            <code>npm run build</code> e o diretorio de saida <code>dist</code>.
          </p>
        </div>
        <div className="deploy-steps">
          <span>1. Subir para o GitHub</span>
          <span>2. Importar projeto na Vercel</span>
          <span>3. Framework: Vite</span>
          <span>4. Build: npm run build</span>
          <span>5. Output: dist</span>
        </div>
      </section>
    </main>
  )
}

export default App
