import { MoveRight } from "lucide-react"
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between shrink-0'>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold'>{props.id + 1}</h2>
        <div>
            <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque consequuntur sed ratione, dolore veritatis laborum.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor: props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor: props.color}} className=' text-white font-medium px-4 py-2 rounded-full'><MoveRight size={25} strokeWidth={2} /></button>
            </div>
        </div>
    </div>
)
}

export default RightCardContent