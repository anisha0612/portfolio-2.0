import { skillIcons } from '../shared/skillIcons'
import { contactLinks, designSystemImpact, profile, technicalSkills } from '../shared/utils'

function AboutMe() {
  const linkedInProfile = contactLinks.find((link) => link.label === 'LinkedIn')

  return (
    <section
      id="about"
      className="surface-section relative overflow-hidden pb-8! pt-6! min-[700px]:grid min-[700px]:grid-cols-[minmax(0,1.15fr)_320px] min-[700px]:gap-10 min-[700px]:!pb-10 min-[700px]:!pt-8"
    >
      <div className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-bl-[7rem] bg-[#f8bf3c] min-[700px]:right-0 min-[700px]:h-62 min-[700px]:w-[18rem] min-[700px]:rounded-bl-[9rem]" />

      <div className="relative z-10 min-w-0">
        <p className="mb-4 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[rgba(30,29,27,0.52)]">
          Senior Frontend Engineer
        </p>
        <h1 className="section-title max-w-[10ch] text-[clamp(2.7rem,10vw,4.6rem)] leading-[0.95]">
          Hello, my name is {profile.name.split(' ')[0]}
        </h1>
        <p className="section-copy mt-4 max-w-124 text-[0.88rem]">
          {profile.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <a className="button-primary" href="#work">
            Projects
          </a>
          <a className="button-secondary" href={profile.emailHref}>
            Contact
          </a>
        </div>

        <div className="mt-10 border-t border-[rgba(30,29,27,0.08)] pt-7 min-[700px]:mt-14">
          <h2 className="section-title text-[1.7rem]">About me</h2>
          <p className="section-copy mt-3 max-w-152 text-[0.86rem]">
            I build modern websites and product interfaces with React, Angular, Next.js, TypeScript, and a careful eye for visual clarity. I have led the initiative to create a design system in Storybook, shaping reusable components, documentation, and integration patterns that helped teams adopt a more consistent UI foundation. I focus on simple systems, polished details, and frontend work that feels calm and intuitive.
          </p>

          <ul className="section-copy mt-4 grid gap-2 text-[0.8rem] marker:text-[#f0aa18]">
            <span className='font-bold'>Storybook: </span>{designSystemImpact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-card-grid mt-7 min-[700px]:grid-cols-2 min-[980px]:grid-cols-4">
          {[
            [profile.experience, 'experience'],
            ['React / Next.js', 'core stack'],
            ['UI / UX', 'design focus'],
            ['Storybook system', 'design leadership'],
          ].map(([value, label]) => (
            <article className="panel-card info-card flex-col justify-between" key={label}>
              <strong className="section-title block text-[1.35rem] leading-[1.05]">{value}</strong>
              <span className="mt-3 block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[rgba(30,29,27,0.48)]">
                {label}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-[rgba(30,29,27,0.08)] pt-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="section-title text-[1.7rem]">Technical skills</h2>
              <p className="section-copy mt-3 max-w-152 text-[0.86rem]">
                A curated skills snapshot from the technologies and tools featured across your portfolio and LinkedIn profile.
              </p>
            </div>
            {linkedInProfile ? (
              <a
                className="button-secondary"
                href={linkedInProfile.href}
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            ) : null}
          </div>

          <div className="info-card-grid mt-6 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1120px]:grid-cols-4">
            {technicalSkills.map((skill) => {
              const Icon = skillIcons[skill.icon]

              return (
                <article
                  className="panel-card info-card items-start gap-3"
                  key={skill.name}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.85rem] bg-[rgba(248,191,60,0.14)] text-[#1e1d1b]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col justify-center self-stretch">
                    <strong className="info-card-title">{skill.name}</strong>
                    <span className="info-card-meta">
                      Tooling
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex items-start justify-center min-[700px]:mt-2">
        <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[linear-gradient(180deg,#f2f2ee_0%,#d8d8d4_100%)] shadow-[0_18px_40px_rgba(30,29,27,0.1)] min-[700px]:h-62 min-[700px]:w-62">
          <div className="absolute inset-[0.85rem] rounded-full border border-[rgba(30,29,27,0.08)] bg-[radial-gradient(circle_at_40%_30%,#ffffff_0%,#d9d7d1_100%)]" />
          <div className="section-title relative z-10 text-[3.25rem]">AP</div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe