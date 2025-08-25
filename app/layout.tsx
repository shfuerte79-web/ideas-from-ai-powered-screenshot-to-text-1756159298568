import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Ideas from: AI-Powered Screenshot to Text`,
  description: `[
  {
    "title": "AI-Powered AI-Powered Screenshot to Text Solution",
    "one_liner": "Revolutionary AI solution based on AI-Powered Screenshot to Text",
    "execution_72h": {
      "mvp_scope": [
        "Landing page",
        "Core AI feature",
        "Payment integration"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe"
      ]
    }
  }
]`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}