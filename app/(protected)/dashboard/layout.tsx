import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../../globals.css'
import TanstackClientProvider from '@/components/providers/tanstack-client-provider'
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar'
import { Home, PlayCircle, MessageCircle, Sparkles, Brain, Coffee } from 'lucide-react'
import Link from 'next/link'

const geistSans = localFont({
  src: '../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Rizzology',
  description: 'Learn the art of rizz',
}

const navigationItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Courses', href: '/dashboard/courses', icon: PlayCircle },
  { name: 'Chats', href: '/dashboard/chats', icon: MessageCircle },
  { name: 'Rizz Lab', href: '/dashboard/lab', icon: Sparkles },
  { name: 'Brain Gains', href: '/dashboard/brain', icon: Brain },
  { name: 'Coffee Chat', href: '/dashboard/coffee', icon: Coffee },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}>
        <TanstackClientProvider>
          <SidebarProvider defaultOpen={false}>
            <div className="flex min-h-screen p-4">
              <div className="fixed left-4 top-4 bottom-4 w-[90px] rounded-3xl bg-white shadow-lg border border-slate-200/50">
                <div className="flex h-full flex-col items-center gap-4 py-4">
                  <div className="flex items-center justify-center p-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md">
                      <span className="text-xl font-bold">R</span>
                    </div>
                  </div>
                  <nav className="flex flex-col items-center gap-3">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex h-12 w-12 items-center justify-center rounded-xl text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm active:scale-95"
                      >
                        <item.icon className="h-6 w-6" />
                        <span className="sr-only">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <main className="ml-[106px] flex-1">
                <div className="mx-auto max-w-[1200px] px-4 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr justify-center">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </SidebarProvider>
        </TanstackClientProvider>
      </body>
    </html>
  )
}
