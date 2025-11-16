import { Card, CardContent } from '@/components/ui/card'
import { ChartLine, DollarSign, Plus, TrendingUp } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='px-4 space-y-4'>
            {/* <h1 className='text-2xl font-semibold mb-2 uppercase'>Хянах самбар</h1> */}
            <p className='text-muted-foreground'>Өөрийн дэлгүүрийн ашиг орлого, борлуулалтын мэдээллийг хянаарай</p>
            <Card>
                <CardContent>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-muted-foreground'>Нийт борлуулалт</p>
                            <span className='font-semibold text-2xl'>324,563₮</span>
                        </div>
                        <div className='rounded-lg bg-primary/10 p-2'>
                            <DollarSign className='size-8 text-primary' />
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-green-500 text-sm'>
                        <TrendingUp className='w-4' /> +12.5% from last month
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-muted-foreground'>Нийт борлуулалт</p>
                            <span className='font-semibold text-2xl'>324,563₮</span>
                        </div>
                        <div className='rounded-lg bg-primary/10 p-2'>
                            <DollarSign className='size-8 text-primary' />
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-green-500 text-sm'>
                        <TrendingUp className='w-4' /> +12.5% from last month
                    </div>
                </CardContent>
            </Card>

            <div>
                <p className='text-muted-foreground mb-2 mt-6'>Хурдан товчлуур</p>
                <div className='grid grid-cols-2 gap-4'>
                    <Card className='shadow-none hover:shadow-md'>
                        <CardContent className='flex flex-col items-center'>
                            <div className='rounded-lg bg-primary/10 p-2 w-fit mb-2'>
                                <Plus className='size-8 text-primary' />
                            </div>
                            <div>
                                Бараа нэмэх
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='shadow-none hover:shadow-md'>
                        <CardContent className='flex flex-col items-center'>
                            <div className='rounded-lg bg-primary/10 p-2 w-fit mb-2'>
                                <ChartLine className='size-8 text-primary' />
                            </div>
                            <div>
                                Тайлан харах
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard