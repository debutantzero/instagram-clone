import React from 'react'
import followers from '../content'

export default function Explore() {
    return (
        <div className="explore">
            {
                followers.map((data, key)=>{
                    return(
                        <div key={key}>
                        <div  className="random"> 
                            <img src={data.url} />
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
