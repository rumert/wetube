import React from 'react'
import { LuListVideo } from "react-icons/lu";

export default function page() {
    const lists = [
        {
            title: 'Title',
            videoCount: 132,
        },
        {
            title: 'Title',
            videoCount: 132,
        },
        {
            title: 'Title',
            videoCount: 132,
        },
        {
            title: 'Title',
            videoCount: 132,
        },
        {
            title: 'Title',
            videoCount: 132,
        },
    ]
  return (
    <div className='pt-12 pb-40'>
        <div className='px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {lists.map((list, index) => {
                return(
                <div key={index} className="card bg-base-100 shadow-xl h-80">
                  <figure className='w-full h-full p-2'>
                    <div className="stack w-full h-full z-0">
                      <div className="grid h-full rounded bg-primary text-primary-content place-content-end p-4">
                        <div className='p-1 rounded-md border border-primary-content flex justify-center items-center'>
                            <LuListVideo />
                            {list.videoCount} Videos
                        </div>
                      </div> 
                      <div className="grid h-full rounded bg-accent text-accent-content place-content-center"></div> 
                      <div className="grid h-full rounded bg-secondary text-secondary-content place-content-center"></div>
                    </div>
                  </figure>
                  <div className="card-body flex">
                    <h2 className="card-title">
                      {list.title}
                    </h2>
                  </div>
                </div>
                )
            })}
        </div>
      </div>
  )
}
