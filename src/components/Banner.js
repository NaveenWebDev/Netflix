import Header from './BannerHeader'
import List from './List'
const Banner = () => {
return (
  <>

  <div className='bg-black text-white h-screen banner'>
    <Header></Header>
  </div>
  <div className="list bg-black text-white">
  <List></List>
  </div>

  </>
  )
}

export default Banner