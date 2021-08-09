import React from 'react'
import { useState } from 'react'
import followers from "../content"
export default function HomeLeft() {
    const [like, setLike] = useState(0)

    const increment = () => {
        setLike(like + 1)
    }

    return (
        <div>
            <div className="status ">

                {followers.map((data, key) => {
                    return (
                        <div className="data-status" key={key}>
                            <img className="d" src={data.img} />
                            <p>{data.username}</p>
                        </div>
                    )
                })}

            </div>

            {followers.map((data, key) => {
                return (
                    <div key={key} className="twitte">
                        <div className="twitte-header">
                            <img src={data.img} className="mx-2" />
                            <p className="mt-4">{data.username}</p>
                        </div>
                        <div className="twitte-body">
                            <img src={data.url} />
                        </div>
                        <div className="twitte-footer">
                            <div className="twitter-footer-head">
                                <button className="btn" onClick={() => { increment(); }} >
                                    <i like="like" className="far fa-heart"></i>
                                </button>
                                <button className="far fa-comment btn"></button>
                                <button className="far fa-paper-plane btn"></button>
                            </div>

                            <p className="mx-4">{!like == 0 && like + " j'aime"}</p>

                            <div className="footer">
                                <i className="fas fa-grin-hearts"></i>
                                <input type="text" className="" placeholder="Ajoutez un commentaire . . ." />
                                <button className="btn">Publier</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
