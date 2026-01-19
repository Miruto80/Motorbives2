import React, { useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function CarSplide({ car = null, initialIndex = 0, onRequestInfo = () => {} }) {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (!car) return;
    if (mainRef.current && mainRef.current.splide) {
      try {
        mainRef.current.splide.go(initialIndex);
      } catch {
        console.warn('Failed to set initial index for main splide');
      }
    }
  }, [car, initialIndex]);

  if (!car) return null;

  const mainOptions = {
    type: 'loop',
    perPage: 1,
    gap: '0.6rem',
    arrows: true,
    pagination: false,
    start: initialIndex,
  };

  const thumbsOptions = {
    rewind: true,
    gap: '0.25rem',
    perPage: 5,
    focus: 'center',
    pagination: false,
    isNavigation: true,
    breakpoints: { 600: { perPage: 3 } },
  };

  return (
    <div className="car-splide">
      <div className="d-flex justify-content-center align-items-center mb-3 position-relative" style={{ width: '100%', padding: '0 24px' }}>
        <Splide options={mainOptions} ref={mainRef} aria-label="Car images" style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
          {(car.images || []).map((img, idx) => (
            <SplideSlide key={idx}>
              <a href={img} target="_blank" rel="noopener noreferrer">
                <img
                  src={img}
                  alt={`${car.name} image ${idx + 1}`}
                  style={{ width: '100%', height: 'auto', maxHeight: '45vw', objectFit: 'cover', borderRadius: '12px' }}
                />
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div style={{ overflowX: 'auto', padding: '0 8px' }}>
        <Splide options={thumbsOptions} ref={thumbsRef} aria-label="Thumbnails" onMounted={(splide) => {
          if (mainRef.current && mainRef.current.splide) {
            mainRef.current.splide.sync(splide);
          }
        }}>
          {(car.images || []).map((img, idx) => (
            <SplideSlide key={idx} style={{ padding: '0.12rem' }}>
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                style={{ width: '84px', height: '52px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer', display: 'block', margin: '0 auto' }}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-4">
        <button
          className="btn btn-success btn-lg px-5 py-2 fw-bold"
          style={{ fontSize: '1.1rem', borderRadius: '2rem', height: '60px' }}
          onClick={() => onRequestInfo(car)}
        >
          Request information
        </button>
      </div>
    </div>
  );
}
