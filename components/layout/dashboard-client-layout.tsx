"use client";

import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
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
} from '@/components/ui/sidebar';
import { Home, Settings, Users, Mail, Star, HelpCircle, LogOut } from 'lucide-react';
import React from 'react';

interface DashboardClientLayoutProps {
  children: React.ReactNode;
}

export default function DashboardClientLayout({ children }: DashboardClientLayoutProps) {
  const router = useRouter();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    console.log("Logging out with Clerk...");
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
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
              {/* Navigation Group */}
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
              <SidebarMenuButton 
                onClick={handleLogout}
                className="w-full px-1 flex items-center transition-all duration-300 ease-in-out group-hover:justify-start cursor-pointer"
              >
                <LogOut className="h-4 w-4 transition-transform duration-200 ease-out" />
                <span className="ml-1.5 opacity-0 transition-opacity duration-200 delay-100 group-hover:opacity-100">Logout</span>
              </SidebarMenuButton>
            </SidebarFooter>
          </Sidebar>
        </div>
        <main className="flex-1 overflow-hidden p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
} 