import { create } from 'zustand'
import { sectionIds } from './shared/utils'

export type SectionId = (typeof sectionIds)[number]

interface NavigationState {
    activeSection: SectionId
    setActiveSection: (sectionId: SectionId) => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
    activeSection: 'about',
    setActiveSection: (sectionId) => set({ activeSection: sectionId }),
}))

// Compatibility helpers for non-hook call sites.
export function setActiveSection(sectionId: SectionId) {
    useNavigationStore.getState().setActiveSection(sectionId)
}

export function getActiveSection() {
    return useNavigationStore.getState().activeSection
}