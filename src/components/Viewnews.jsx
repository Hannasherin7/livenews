import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Viewnews = () => {
    const [data, changeData] = useState(
        {"articles":[]}
    )
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
       
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <h1><center>VIEW ALL DETAILS</center></h1>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.articles.map(
                                (value,index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.urlToImage}></img>
                                            <div class="card-body">
                                                <p class="card-text">status:{value.title}</p>
                                                <p class="card-text">code:{value.name}</p>
                                                <p class="card-text">message:{value.message}</p>
                                            </div>
                                        </div>
                                    </div>

                                }
                            )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
