import Skeleton from 'react-loading-skeleton'
import Headset from '../components/Headset'
import Navbar from '@/components/navbar'
import AwardAllPage from '@/components/awardsall'

import Banner from '@/components/banner'


import Footer from '@/components/footer'
import Corejs from '../components/Corejs'
import { useAwardsAll } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';


export default function AllAwardsPage() {
  const { awardsall , isLoading} = useAwardsAll()


  if (isLoading) {

    return (
      <div>
        <body className="index-page" style={{backgroundColor:"#da5f8e"}}>
          <div className="load-cen">
            <ReactLoading type={'cylon'} color={'#fff'} height={120} width={120} className="load-cen" />
          </div>
        </body>
      </div>
    )
  }

  return (
    <div>
      <Headset />
      <body className="index-page" style={{backgroundColor:"#f3f4f6"}}>
        <Navbar />
        <Banner />
        <div className="contrainer-fluid page-gin-top">
        
              <AwardAllPage awardsall={awardsall} />

              
              
        </div>
        <Footer />
        <Corejs />
      </body>
    </div>
  )
}
