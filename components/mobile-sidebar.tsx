"use client"

import { useState, useEffect } from "react"

import Sidebar from "@/components/sidebar"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

const MobileSidebar = () => {
//isMounted and setIsMounted are used to prevent hydration mismatch errors.
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null;
  }

  return (
  <Sheet>
    <SheetTrigger>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="p-0">
      <Sidebar />
    </SheetContent>
  </Sheet >
  )
}

export default MobileSidebar;