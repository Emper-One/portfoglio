import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfoglio',
  description: 'Personal portfoglio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="text-gray-950 bg-gray-100 mx-10">
        {children}
      </body>
    </html>
  )
}
