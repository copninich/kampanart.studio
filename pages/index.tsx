import Skeleton from 'react-loading-skeleton'
import Headset from '../components/Headset'
import Navbar from '@/components/navbar'
import AwardPage from '@/components/awards'
import ActivityPage from '@/components/activity'
import CertificatePage from '@/components/certificate'
import AppreciationPage from '@/components/appreciation'
import VolunteerPage from '@/components/volunteer'
import Banner from '@/components/banner'
import Quote from '@/components/quote'
import Education from '@/components/education'
import Github from '@/components/github'
import Journey from '@/components/journey'
import Recommendation from '@/components/recommend'
import Footer from '@/components/footer'
import Corejs from '../components/Corejs'
import { useAwards , useActivty , useCertificate , useVolunteer , useAppreciation} from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';


export default function IndexPage() {
  const { awards , isLoading} = useAwards()
  const { activity } = useActivty()
  const { cer } = useCertificate()
  const { volunt } =  useVolunteer()
  const { appre } = useAppreciation()

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
              <Quote />
              <Education />
              <Github/>
              <AppreciationPage appre={appre} />
              <Journey/>
              <AwardPage awards={awards} />
              <CertificatePage cer={cer} />
              
              <ActivityPage activity={activity} />

              
              <VolunteerPage volunt={volunt} />
              
              
        </div>
        <Footer />
        <Corejs />
      </body>
    </div>
  )
}