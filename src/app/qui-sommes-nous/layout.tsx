import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  description: "Découvrez notre philosophie pour révolutionner votre productivité. Atteignez vos objectifs efficacement sans vous épuiser.",
  keywords: "productivité, ViteButNotTooMuch, gestion du temps, efficacité, bien-être au travail, organisation, GTD, Pomodoro",
  title: "ViteButNotTooMuch : Qui sommes-nous ?",
}
 
export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}