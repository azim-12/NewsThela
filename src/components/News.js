import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'


export default function News({country, pageSize, category, setProgress}) {

    const [results, setresults] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState('')
    const [page, setPage] = useState(1)

    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    }

    document.title = category=== 'top' ? `NewsThela` : `${capitalize(category)} - NewsThela`;


    useEffect(() => {
        updateNews();
    }, [page])

    // useEffect(() =>{

    // },[loading])


    const updateNews = async () => {
        setProgress(10)
        let url = `https://newsdata.io/api/1/news?apikey=pub_6910a94b85f352fbcffb218408ecf65fb762&country=${country}&category=${category}&page=${page}`;
        setLoading(true);
        let res = await axios.get(url)
        setresults(res.data.results)
        setTotalResults(res.data.totalResults)
        setLoading(false)
        // console.log(data)
        // let parseData = await data.json();
        setProgress(100)
    }
    
    const handlePrevClick = async () => {
        setPage((prev) => {
            return prev - 1 
        });
    }

    const handleNextClick = async () => {
        if (!(page + 1 > Math.ceil(totalResults / pageSize))) {
            setPage((prev) => {
                return prev + 1
            });
        }
    }


    return (
        <div>
            <div className='container'>
                <h1 className='text-center news-item-heading my-2'> {category === `top` ? `Grab Latest News` : 'Grab Latest News About ' + capitalize(category)}   </h1>
                {loading && <Spinner />}
                <div className="row">
                    {!loading && results.map((ele) => {
                        return <div className="col-sm-6 col-lg-4 news-item-card" key={ele.link}>
                            <Newsitem title={ele.title ? ele.title.slice(0,60) : ""} imgUrl={ele.image_url} description={ele.description ? ele.description.slice(0,120) : "You should click on the link and read above news article. This might be helpful to you and for your knowledge. See you there. "} newsUrl={ele.link} date={ele.pubDate} author={ele.creator ? ele.creator[0] : ''}  />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between mb-4'>
                    <button disabled={page <= 1} data-page={page} type='button' className='btn btn-dark' onClick={handlePrevClick}>&larr; Previous</button>
                    <button type='button' className='btn btn-dark' data-page={page} onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </div>
    )
}
