import React from 'react'
import followers from "../content"
export default function Message() {
    return (
        <div className="message">
            <div className="message-body">
                <div className="message-left">
                    <div className="message-header">
                        Konayel
                    </div>
                    <div>
                        <p className="mx-4 t3 mt-3">Messages</p>
                    </div>
                    {
                        followers.map((data, key) => {
                            return (
                                <div className="direct" key={key}>
                                    <img className="mx-3" src={data.img} />
                                    <div>
                                        <span className="mt-4 t1">{data.username}</span><br></br>
                                        <span className="mt-4 t2">{data.status}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="message-right">
                    <i className="far fa-paper-plane"></i>
                    <p className="p1">Vos messages</p>
                    <p>Envoyez des photos et des messages privés à un(e) ami(e) ou à un groupe</p>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Envoyez un message</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="xcx">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <p className="modal-title" id="exampleModalLabel">Nouveau message</p>
                                    <button type="button" className="btn text-primary" data-bs-dismiss="modal">Suivant</button>
                                </div>
                                <div className="card-body">
                                    <span>À : </span><input type="text" className="inp" placeholder="Recherchez . . ." />
                                </div>
                                <div className="modal-body">
                                    <p>Suggestions</p>
                                    {
                                        followers.map((data, key) => {
                                            return (
                                                <div className="direct" key={key}>

                                                    <img className="mx-3 im3" src={data.img} />
                                                    <div>
                                                        <span className="mt-4 t1">{data.username}</span><br></br>
                                                        <span className="mt-4 t2">{data.status}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
