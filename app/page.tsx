import React from 'react'
import { FaHouse, FaList, FaYoutube } from "react-icons/fa6";

export default function page() {

  const videoCards = [
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      isNew: true,
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      isNew: true,
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      isNew: true,
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      isNew: true,
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      isNew: true,
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
    {
      imgSrc: "/thumbnail.png",
      imgAlt: "Video",
      title: "Title",
      isNew: true,
      description: "Let's Play the Best Game Ever!",
      tags: ["Gameplay", "English"]
    },
  ]

  return (
    <div className='pt-16 pb-40'>
      <ul className="menu bg-base-200 rounded-box w-fit fixed top-32 left-6">
        <li>
          <a className="tooltip tooltip-right" data-tip="Home">
            <FaHouse className='h-5 w-5' />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right" data-tip="Subs">
            <FaYoutube className='h-5 w-5' />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right" data-tip="Lists">
            <FaList className='h-5 w-5' />
          </a>
        </li>
      </ul>
      <div className='ml-24 px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {videoCards.map((card, index) => {
          return(
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={card.imgSrc} alt={card.imgAlt} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {card.title}
                {card.isNew && <div className="badge badge-secondary">NEW</div>}
              </h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end">
                {card.tags.map((tag, index) => {
                  return(
                    <div key={index} className="badge badge-outline">{tag}</div> 
                  )
                })}
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}
