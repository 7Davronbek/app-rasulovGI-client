import React from 'react'

const YouTube = () => {
    return (
        <div className='YouTube'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pRY2AJL3rOM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YouTube