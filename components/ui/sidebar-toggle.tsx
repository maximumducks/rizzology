"use client"

import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'

export const SidebarToggle = () => {
  const { toggleSidebar, state } = useSidebar()
  return (
    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
      {state === "expanded" ? (
        <PanelLeftClose className="h-4 w-4" />
      ) : (
        <PanelLeftOpen className="h-4 w-4" />
      )}
    </Button>
  )
} 