import React from 'react'
import HomeLeft from '../components/HomeLeft'
import HomeRight from '../components/HomeRight'

export default function Home() {
    return (
        <div className="home">
            <div className="home-flex">
                <div className="home-left">
                    <HomeLeft />
                </div>
                <div className="home-right">
                    <HomeRight/>
                </div>

            </div>
        </div>
    )
}
