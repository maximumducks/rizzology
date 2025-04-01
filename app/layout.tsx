import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import TanstackClientProvider from '@/components/providers/tanstack-client-provider'
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarGroup,
  SidebarFooter,
  SidebarSeparator
} from '@/components/ui/sidebar'
import { Home, Settings, Users, Mail, Star, HelpCircle } from 'lucide-react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'CodeGuide Starter Pro',
  description: 'Starter kit from codeguide.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TanstackClientProvider>
          <SidebarProvider>
            <div className="relative flex min-h-screen">
              <div 
                className="group relative"
                style={{ 
                  '--sidebar-width': '16rem',
                  '--sidebar-width-icon': '3.5rem'
                } as React.CSSProperties}
              >
                <Sidebar 
                  side="left" 
                  variant="floating" 
                  className="w-14 transition-[width] duration-300 ease-in-out group-hover:w-64"
                >
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarMenu className="flex flex-col gap-1">
                        <SidebarMenuItem>
                          <SidebarMenuButton className="w-full px-1 flex items-center transition-all duration-300 ease-in-out group-hover:justify-start">
                            <Home className="h-4 w-4 transition-transform duration-200 ease-out" />
                            <span className="ml-1.5 opacity-0 transition-opacity duration-200 delay-100 group-hover:opacity-100">Home</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton className="w-full px-1 flex items-center transition-all duration-300 ease-in-out group-hover:justify-start">
                            <Mail className="h-4 w-4 transition-transform duration-200 ease-out" />
                            <span className="ml-1.5 opacity-0 transition-opacity duration-200 delay-100 group-hover:opacity-100">Messages</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton className="w-full px-1 flex items-center transition-all duration-300 ease-in-out group-hover:justify-start">
                            <Star className="h-4 w-4 transition-transform duration-200 ease-out" />
                            <span className="ml-1.5 opacity-0 transition-opacity duration-200 delay-100 group-hover:opacity-100">Favorites</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroup>

                    <SidebarSeparator className="my-2" />

                    {/* Settings Group */}
                    <SidebarGroup>
                      <SidebarMenu className="flex flex-col gap-1">
                        <SidebarMenuItem>
                          <SidebarMenuButton className="w-full px-1 flex items-center transition-all duration-300 ease-in-out group-hover:justify-start">
                            <Users className="h-4 w-4 transition-transform duration-200 ease-out" />
                            <span className="ml-1.5 opacity-0 transition-opacity duration-200 delay-100 group-hover:opacity-100">Users</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton className="w-full px-1 flex items-center transition-all duration-300 ease-in-out group-hover:justify-start">
                            <Settings className="h-4 w-4 transition-transform duration-200 ease-out" />
                            <span className="ml-1.5 opacity-0 transition-opacity duration-200 delay-100 group-hover:opacity-100">Settings</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroup>
                  </SidebarContent>

                  <SidebarFooter className="rounded-lg border bg-card p-1">
                    <SidebarMenuButton className="w-full px-1 flex items-center transition-all duration-300 ease-in-out group-hover:justify-start">
                      <HelpCircle className="h-4 w-4 transition-transform duration-200 ease-out" />
                      <span className="ml-1.5 opacity-0 transition-opacity duration-200 delay-100 group-hover:opacity-100">Need Help?</span>
                    </SidebarMenuButton>
                  </SidebarFooter>
                </Sidebar>
              </div>
              <main className="flex-1 overflow-hidden p-6">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </TanstackClientProvider>
      </body>
    </html>
  )
}
