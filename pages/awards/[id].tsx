import { useRouter } from 'next/router'
import { useAwarding } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';
import Headset from '../../components/Headset'
import Corejs from '../../components/Corejs'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'


export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useAwarding(id)

  if (data) {
    return (
      <div>
        <Headset />
        <body className="index-page" style={{backgroundColor:"#f3f4f6"}}>
            <Navbar/>
            <div>
              <div className="py-5 bg-main bg-text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row text-left">
                                <h6 className="text-white fw-bold">รางวัลและผลงานเชิงวิชาการ</h6>
                                <h2 className="text-white f3">{data.a_name}</h2>
                                <h6 className="text-white"><i className="fas fa-trophy"></i>&nbsp;{data.a_awards}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
          
                <div className="container">
                    <div className="row">
                      <div className="col-xl-12" style={{minHeight:"100vh"}}>
                       
                          <div className="d-flex justify-content-left" style={{marginTop:"-50px"}}>
                            <img src={data.a_pic} className="img-fluid img-detail-page" />
                          </div>
                          
                        <p className="f1">{data.a_detail}</p>

                      </div>
                        
                        
                        
                    </div>
                    
                </div>
                       
            </div>

          
            <Footer />
            <Corejs />
        </body>
      </div>
    )
  } else {
    return (
    <body className="index-page">
      <div className="load-cen">
        <ReactLoading type={'cylon'} color={'#da5f8e'} height={120} width={120} className="load-cen" />
      </div>
    </body>
    )
  }
}