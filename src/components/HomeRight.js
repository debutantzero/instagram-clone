import React from 'react'
import img from '../image/max.jpg'
import followers from '../content'
export default function HomeRight() {
    return (
        <div className="fix">
            <div className="status st-home-right">
                <div className="flex">
                <img src={img} />
                <div>
                    <span className="mx-4 t1">Konayel</span><br></br>
                    <span className="mx-4 t2">Konayel Max</span>
                </div>
                </div>
                <div>
                    <button className="btn text-primary">Basculer</button>
                </div>
            </div>
            <div className="st-home-right">
                <p>Suggestions pour vous</p>
                <button className="btn">Voir tout</button>
            </div>
           {followers.map((data,key)=>{
               return(
                <div key={key} className="st-home-right dx mt-2">
                <div className="flex">
                    <img src={data.img} />
                    <div>
                        <span className="mx-4 t2">{data.username}</span>
                    </div>
                    </div>
                    <button className="btn text-primary mx-4">S'abonner</button>
                </div>
               )
           })}
        </div>
    )
}
