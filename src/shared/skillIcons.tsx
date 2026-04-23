import type { IconType } from 'react-icons'
import {
    SiCss,
    SiDocker,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiStorybook,
    SiTailwindcss,
    SiTypescript,
    SiVitest,
} from 'react-icons/si'
import { HiMiniCommandLine, HiMiniComputerDesktop, HiMiniSparkles } from 'react-icons/hi2'

export const skillIcons: Record<string, IconType> = {
    react: SiReact,
    nextjs: SiNextdotjs,
    typescript: SiTypescript,
    javascript: SiJavascript,
    html5: SiHtml5,
    tailwind: SiTailwindcss,
    tanstack: HiMiniCommandLine,
    storybook: SiStorybook,
    vitest: SiVitest,
    nodejs: SiNodedotjs,
    docker: SiDocker,
    copilot: HiMiniSparkles,
    github: SiGithub,
    api: HiMiniCommandLine,
    responsive: HiMiniComputerDesktop,
    css3: SiCss,
}