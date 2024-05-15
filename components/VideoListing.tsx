import React from 'react'

export default function VideoListing() {

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
      <div className='pt-12 pb-40'>
        <div className='px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
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
