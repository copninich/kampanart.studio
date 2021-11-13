import { useRouter } from 'next/router'
import { useVolunteering } from '@/lib/swr-hooks'
import ReactLoading from 'react-loading';
import Headset from '../../components/Headset'
import Corejs from '../../components/Corejs'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'


export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useVolunteering(id)

  if (data) {
    if(data.v_ref != ''){
    return (
      <div>
        <Headset />
        <body className="index-page" style={{backgroundColor:"white"}}>
            <Navbar/>
            <div>
                <div className="py-sm-7 py-5 bg-banner min-vh-50">
                  <div className="container">
                      <div className="row">
                          <div className="col-12 mx-auto mt-4">
                              <div className="row py-lg-4 py-5 mt-5 text-left">
                                <h6 className="text-white">กิจกรรมจิดอาสา</h6>
                                <h2 className="text-white">{data.v_name}</h2>
                                <h6 className="text-white"><i className="fas fa-calendar-week"></i>&nbsp;{data.v_year}</h6>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="container">
                    <div className="row">
                      <div className="col-xl-12 mt-5">
                          <div className="d-flex justify-content-center">
                            <img src={data.v_pic} className="img-fluid w-xl-50" />
                          </div>
           
                          <p>{data.v_detail}</p>   
                          <object data={data.v_ref} type="application/pdf" style={{minHeight: '100vh', width: '100%'}}>
                          </object>
                      </div>
                        
                        
                        
                    </div>
                    
                </div>
                       
            </div>
            <Footer />
            <Corejs />
        </body>
      </div>
    )
    }else{
      return (
        <div>
          <Headset />
          <body className="index-page" style={{backgroundColor:"white"}}>
              <Navbar/>
              <div>
                  <div className="py-sm-7 py-5 bg-banner min-vh-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mx-auto mt-4">
                                <div className="row py-lg-4 py-5 mt-5 text-left">
                                  <h6 className="text-white">กิจกรรมจิดอาสา</h6>
                                  <h2 className="text-white">{data.v_name}</h2>
                                  <h6 className="text-white"><i className="fas fa-calendar-week"></i>&nbsp;{data.v_year}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="container">
                      <div className="row">
                        <div className="col-xl-12 mt-5">
                            <div className="d-flex justify-content-center">
                              <img src={data.v_pic} className="img-fluid w-xl-75" />
                            </div>
             
                            <p className="text-justify mt-3">{data.v_detail}</p>   
                           
                        </div>
                          
                          
                          
                      </div>
                      
                  </div>
                         
              </div>
              <Footer />
              <Corejs />
          </body>
        </div>
      )
    }
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