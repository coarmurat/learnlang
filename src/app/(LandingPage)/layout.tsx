import Header from '@/components/Header'


export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}
