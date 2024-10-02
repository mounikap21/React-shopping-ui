import React from 'react'

const Collections = (props) => {
  const{title, image1, image2, image3, image4, image5, image6, image7}=props.gentsFashion
  return (
    <div>
       <div className="collectionsection">
           <h2>{title}</h2>
           <div className="menImages">
              <img src={image1} alt={title} />
              <img src={image2} alt={title} />
              <img src={image3} alt={title} />
              <img src={image4} alt={title} />
              <img src={image5} alt={title} />
              <img src={image6} alt={title} />
              <img src={image7} alt={title} />
           </div>

       </div>
    </div>
  )
}

export default Collections
