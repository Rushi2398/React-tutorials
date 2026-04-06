import RightCard from './RightCard'

const RightContent = ({users}) => {
  return (
    <div id ='right' className='h-full w-2/3 p-4 gap-10 flex flex-nowrap overflow-x-auto rounded-4xl'>
        {users.map((user, idx) => {
            return <div key={idx}>
                    <RightCard img = {user.img} tag={user.tag} id={idx} color={user.color}/>
                </div>
        })}
    </div>
  )
}

export default RightContent