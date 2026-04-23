import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import {
  featuredProjects,
} from './shared/utils'
import useNavigation from './useNavigation'
import Contact from './components/Contact'



export function App() {
  useNavigation()

  return (
    <div className="app-shell">
      <Header />

      <main className="content-shell">
        <AboutMe />

        <section
          id="work"
          className="surface-section"
        >
          <div className="text-center">
            <h2 className="section-title text-[clamp(2rem,8vw,3rem)]">Projects</h2>
            <p className="section-copy mx-auto mt-3 max-w-136 text-[0.86rem]">
              A small selection of frontend work focused on polished interaction, clean interface systems, and simple product storytelling.
            </p>
          </div>

          <div className="mt-8 grid gap-4 min-[700px]:mt-10">
            {featuredProjects.map((project, index) => (
              <article
                className="panel-card overflow-hidden rounded-2xl"
                key={project.title}
              >
                <div className={`grid min-[700px]:grid-cols-2 ${index % 2 === 1 ? 'min-[700px]:[&>*:first-child]:order-2' : ''}`}>
                  <div className="flex items-center px-5 py-6 min-[700px]:px-8">
                    <div className="max-w-[18rem]">
                      <p className="m-0 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[rgba(30,29,27,0.42)]">
                        {project.period}
                      </p>
                      <h3 className="section-title mt-3 text-[1.6rem] leading-[1.05]">
                        {project.title}
                      </h3>
                      <p className="section-copy mt-3 text-[0.82rem]">
                        {project.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((item) => (
                          <span
                            className="pill-label"
                            key={item}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <a
                        className="button-primary mt-5"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  <div className="min-h-56 bg-[#f3f1eb]">
                    <img
                      className={`h-full w-full ${project.image.endsWith('.svg') ? 'object-contain p-10' : 'object-cover'}`}
                      src={project.image}
                      alt={`${project.title} preview`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Contact />

      </main>
    </div>
  )
}

export default App
