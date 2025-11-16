import { ChevronLeft, Plus } from 'lucide-react'

const Header = () => {
    return (
        <div className='w-full bg-background p-4 flex justify-between border-b'>
            <div>
                <div>
                    {/* <ChevronLeft /> */}
                </div>
                <div className='uppercase font-semibold'>Хянах самбар</div>
            </div>
            <div>
                {/* <Plus /> */}
            </div>
        </div>
    )
}

export default Header