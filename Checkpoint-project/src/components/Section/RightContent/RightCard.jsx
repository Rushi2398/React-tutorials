import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl  overflow-hidden relative'>
      <img className='h-full w-full object-center' src={props.img} alt='stock image'></img>
      <RightCardContent tag={props.tag} id={props.id} color={props.color}/>
    </div>
  )
}

export default RightCard