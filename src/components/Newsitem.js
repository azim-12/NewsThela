import React from 'react'
import defaultImg from './default.png'

export default function Newsitem(props) {
  return (
    <div>
        <div className='my-3'>
        <div className="card" >
          <span className="news-item-badge badge rounded-pill">{props.source}</span>
            <a href={props.newsUrl} target="_blank" rel="noreferrer">
                <img src={props.imgUrl ? props.imgUrl : defaultImg} className="news-item-img card-img-top" alt="..." />
            </a>
            <div className="news-item-body card-body">
                    <h5 className="news-item-title card-title">{props.title}...</h5>
                    <p className="news-item-description card-text">{props.description}...</p>
                    <p className="news-item-publish card-text">
                        <small className='text-muted'>By {props.author ? props.author : "unknown"} on {new Date(props.date).toGMTString()} </small>
                    </p>
                    <a href={props.newsUrl} className="news-item-btn btn btn-sm btn-dark" target="_blank" rel="noreferrer" style={{border: "1px solid #FFFFFF8C"}}>Read More</a>
            </div>
        </div>
      </div>
    </div>
  )
}
