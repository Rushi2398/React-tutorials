import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-30 pt-10 flex items-center gap-10 h-[90vh] px-18'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content