
import BottomNav from '@/components/mobile/bottom-navigation'
import Header from '@/components/mobile/header'
import { ReactNode } from 'react'


const ProtectedLayout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <div className='h-dvh flex flex-col'>
      <Header />
      <div className='flex-1 py-4'>
        {children}
      </div>
      <BottomNav activeTab='home' />
    </div>
  )
}

export default ProtectedLayout