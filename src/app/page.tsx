import { Button } from '@/components/atom/Button/Button'
import CrappoLogo from '@/components/molecules/Logo/CrappoLogo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to crappo app</div>
      <Button withIcon >Click me</Button>
      <CrappoLogo />
    </main>
  )
}
