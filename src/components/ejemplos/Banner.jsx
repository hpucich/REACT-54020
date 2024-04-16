import { useEffect } from "react";
const Banner=()=> {
    useEffect(()=>{
        return()=>(
            console.log("desmontando Banner")
        )

    })


return( 
    <img src="/img/banner.png" style={{width:"20%"}}/>
)
}
export default Banner;