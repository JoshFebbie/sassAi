import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import { Goldman } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

// const inter = Inter({ subsets: ['latin'] })
// const goldman = Goldman

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})



export const metadata: Metadata = {
  title: 'Prodigy',
  description: 'Ai Platform for the Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
