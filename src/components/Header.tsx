import { sectionIds } from '../shared/utils'
import { useNavigationStore } from '../store'

function Header() {
    const activeSection = useNavigationStore((state) => state.activeSection)

    return (
        <nav
            className="mx-auto flex w-[min(1120px,calc(100vw-32px))] items-center justify-between px-1 py-6 text-[#1e1d1b] min-[700px]:py-8"
            aria-label="Section navigation"
        >
            <a className="section-title text-[0.95rem] no-underline" href="#about">
                Anisha Potteti
            </a>
            <div className="flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[rgba(30,29,27,0.56)] min-[700px]:gap-6">
                {sectionIds.map((section) => (
                    <a
                        key={section}
                        href={`#${section}`}
                        className={
                            activeSection === section
                                ? 'border-b border-[#1e1d1b] pb-1 text-[#1e1d1b] no-underline'
                                : 'pb-1 text-[rgba(30,29,27,0.56)] no-underline transition hover:text-[#1e1d1b]'
                        }
                    >
                        {section}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Header