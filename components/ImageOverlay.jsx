import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from "next/image";
import { useLockBodyScroll } from '../lib/hooks'

function ImageCarousel({ images, setIsShowingOverlay }) {
  const [imgIndex, setImgIndex] = useState(0)
  useLockBodyScroll()
  console.log('images', imgIndex)

  const arrowClick = (e, delta) => {
    e.stopPropagation()
    let newIndex = imgIndex + delta
    if (newIndex === -1) {
      newIndex = images.length - 1
    }
    if (newIndex === images.length) {
      newIndex = 0
    }
    setImgIndex(newIndex)
  }
  console.log('imgIndex', imgIndex)

  return (
    <div id="modal-background" onClick={(e) => {
      setIsShowingOverlay(false)
      e.stopPropagation()
    }}>
      <div id="carousel">
        {images.length === 0 ?
          <div id="no-image">
            <p>No Images Available</p>
          </div>
          :
          <div className="img-wrapper ">
            <Img
              src={images[imgIndex].href}
              alt={images[imgIndex].alt}
              height={images[imgIndex].height}
              width={images[imgIndex].width}
            />
            {images.length > 1 &&
              <div>
                <div className="left ">
                  <Img
                    onClick={(e) => arrowClick(e, 1)}
                    src="/arrow-alt-circle-right-regular.svg"
                    alt="go previous"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="right">
                  <Img
                    onClick={(e) => arrowClick(e, -1)}
                    src="/arrow-alt-circle-left-regular.svg"
                    alt="go previous"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="image-dots">
                  {images.map((img, i) => <div key={i} className={i == imgIndex ? 'active' : ''} />)}
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div >
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  setIsShowingOverlay: PropTypes.func.isRequired,
}

export default ImageCarousel

