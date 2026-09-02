// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Стройка Девдок',
  description: 'Честный опыт самостройщика',
  verification: {
    other: {
      'takprodam-verification': '3ec5e2ad-a511-46d2-bf46-cb5448a6b96a',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
