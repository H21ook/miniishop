import { Card, CardContent } from "@/components/ui/card"
import { Package, Shapes } from "lucide-react"

const InventoryPage = () => {
  return (
    <div className='px-4 space-y-4'>
      <Card className='shadow-none hover:shadow-md'>
        <CardContent className="flex flex-col items-center">
          <div className='rounded-lg bg-primary/10 p-3 mb-4'>
            <Shapes className='size-10 text-primary' />
          </div>
          <p className='uppercase'>Ангилал</p>
        </CardContent>
      </Card>
      <Card className='shadow-none hover:shadow-md'>
        <CardContent className="flex flex-col items-center">
          <div className='rounded-lg bg-primary/10 p-3 mb-4'>
            <Package className='size-10 text-primary' />
          </div>
          <p className='uppercase'>Бүтээгдэхүүн</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default InventoryPage