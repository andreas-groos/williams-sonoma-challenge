import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Img from "next/image";
import { useLockBodyScroll, useKeyPress } from '../lib/hooks'

function ImageCarousel({ images, setIsShowingOverlay }) {
  const [imgIndex, setImgIndex] = useState(0)
  useLockBodyScroll()
  const leftKey = useKeyPress('ArrowLeft')
  const rightKey = useKeyPress('ArrowRight')
  const escKey = useKeyPress('Escape')

  useEffect(() => {
    if (leftKey) {
      arrowClick(null, -1)
    }
    if (rightKey) {
      arrowClick(null, 1)
    }
    if (escKey) {
      setIsShowingOverlay(false)
    }
  }, [leftKey, rightKey, escKey])

  const arrowClick = (e, delta) => {
    let newIndex = imgIndex + delta
    if (newIndex === -1) {
      newIndex = images.length - 1
    }
    if (newIndex === images.length) {
      newIndex = 0
    }
    setImgIndex(newIndex)
  }

  return (
    <div id="modal-background" onClick={(e) => {
      setIsShowingOverlay(false)
      e.stopPropagation()
    }}>
      <div id="carousel" onClick={e => e.stopPropagation()}> {/* prevents modal from closing on clicking on the nested elements  */}
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
                  {images.map((img, i) => <div key={i} onClick={() => setImgIndex(i)} className={i == imgIndex ? 'active' : ''} />)}
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

