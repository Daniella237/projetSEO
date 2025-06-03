import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  description: "Découvrez le concept de ViteButNotTooMuch pour révolutionner votre productivité. Atteignez vos objectifs efficacement sans vous épuiser.",
  keywords: "productivité, ViteButNotTooMuch, gestion du temps, efficacité, bien-être au travail, organisation, GTD, Pomodoro",
  title: "Le Nouveau Graal de la Productivité : ViteButNotTooMuch",
}
 
export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}