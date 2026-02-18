import Lottie from "lottie-react"
import loadingAnim from "../animations/loading.json"

const Lottie1 = ()=>{
    return(
        <>
        
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <Lottie
        animationData={loadingAnim}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
</>
    )
}
export default Lottie1