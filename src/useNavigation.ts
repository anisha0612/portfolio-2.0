import { useEffect } from 'react'
import { sectionIds } from './shared/utils'
import { useNavigationStore } from './store'

function useNavigation() {
    const setActiveSection = useNavigationStore((state) => state.setActiveSection)

    useEffect(() => {
        document.title = 'Portfolio'
    }, [])

    useEffect(() => {
        const observers = sectionIds
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => element !== null)

        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id as (typeof sectionIds)[number])
                }
            },
            {
                rootMargin: '-25% 0px -40% 0px',
                threshold: [0.2, 0.35, 0.5, 0.7],
            },
        )

        observers.forEach((section) => intersectionObserver.observe(section))

        return () => {
            observers.forEach((section) => intersectionObserver.unobserve(section))
            intersectionObserver.disconnect()
        }
    }, [setActiveSection])

    return null
}

export default useNavigation

