import React from 'react';
import style from './ProjectCard.module.css';
import Button from './Button';
import live from '../../assets/live.gif'

const ProjectCard = ({ projImg, description, title, ghLink, demoLink }) => {
    return (
        <div className={style["cardm"]}>

            <div className={style["card"]} style={{ background: `url(${projImg}) top center / cover no-repeat` }}>
                <div className={`${style["overlay"]} flex items-center justify-center h-[309px] z-[3] rounded-3xl opacity-0`}>
                    <div className="flex w-3/4 justify-between">
                        <Button to="github" goto={ghLink} />
                        <Button to="site" goto={demoLink} />

                    </div>
                </div>
            </div>

            <div className={style["card2"]}>
                <div className={style["upper"]}>
                    <h1 className="text-3xl font-bold">{title}</h1>
                </div>

                <div className={style["lower"]}>
                    <p className='text-sm px-5'>{description}</p>
                    <div className={style["card3"]}>
                        <img src={live} alt="liveIc" width={"25%"} style={{ marginTop: '-10px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

const LiveIcon = ()=>{
    return (
        <svg
    viewBox="0 0 100 100"
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <g className="ldl-scale" style={{ transformOrigin: '50% 50%', transform: 'rotate(0deg) scale(0.8, 0.8)' }}>
      <g className="ldl-ani">
        <g className="ldl-layer">
          <g className="ldl-ani" style={{ opacity: 1, transformOrigin: '50px 50px', transform: 'matrix3d(0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 1)', animation: '1s linear -0.6s infinite normal forwards running animate', transformBox: 'view-box' }}>
            <path
              strokeMiterlimit="10"
              fill="#f0af6b"
              stroke="#333"
              strokeWidth="3.5"
              d="M54.523 89.999h-9.046c-3.209 0-5.567-3.011-4.797-6.126l4.523-17.308A4.94 4.94 0 0 1 50 62.809h0a4.942 4.942 0 0 1 4.797 3.756l4.523 17.308c.769 3.115-1.588 6.126-4.797 6.126z"
              style={{ strokeWidth: 3.5, fill: 'rgb(237, 28, 36)', stroke: 'rgb(237, 28, 36)' }}
            />
          </g>
        </g>
        <g className="ldl-layer">
          <g className="ldl-ani" style={{ opacity: 1, transformOrigin: '50px 50px', transform: 'matrix3d(0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 1)', animation: '1s linear -0.7s infinite normal forwards running animate', transformBox: 'view-box' }}>
            <circle
              strokeMiterlimit="10"
              fill="#f0af6b"
              stroke="#333"
              strokeWidth="3.5"
              r="7.738"
              cy="50"
              cx="50"
              style={{ strokeWidth: 3.5, fill: 'rgb(237, 28, 36)', stroke: 'rgb(237, 28, 36)' }}
            />
          </g>
        </g>
        <g className="ldl-layer">
          <g className="ldl-ani" style={{ opacity: 1, transformOrigin: '50px 50px', transform: 'matrix3d(0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 1)', animation: '1s linear -0.8s infinite normal forwards running animate', transformBox: 'view-box' }}>
            <path
              strokeLinecap="round"
              strokeWidth="3.5"
              strokeLinejoin="round"
              stroke="#333"
              fill="none"
              d="M67.025 86.199C80.601 79.802 90 66.001 90 50c0-21.434-16.859-38.928-38.039-39.95-.65-.032-1.303-.05-1.961-.05s-1.311.018-1.961.05C26.859 11.072 10 28.566 10 50c0 16.001 9.399 29.802 22.975 36.199"
              style={{ strokeWidth: 3.5, stroke: 'rgb(237, 28, 36)' }}
            />
          </g>
        </g>
        <g className="ldl-layer">
          <g className="ldl-ani" style={{ opacity: 1, transformOrigin: '50px 50px', transform: 'matrix3d(0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 1)', animation: '1s linear -0.9s infinite normal forwards running animate', transformBox: 'view-box' }}>
            <path
              strokeLinecap="round"
              strokeWidth="3.5"
              strokeLinejoin="round"
              stroke="#333"
              fill="none"
              d="M64.542 76.24C73.76 71.12 80 61.291 80 50c0-16.393-13.151-29.706-29.477-29.987C50.349 20.01 50.176 20 50 20s-.349.01-.523.013C33.151 20.294 20 33.607 20 50c0 11.291 6.24 21.12 15.458 26.24"
              style={{ strokeWidth: 3.5, stroke: 'rgb(237, 28, 36)' }}
            />
          </g>
        </g>
        <g className="ldl-layer">
          <g className="ldl-ani" style={{ opacity: 1, transformOrigin: '50px 50px', transform: 'matrix3d(0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 0.91, 0, 0, 0, 0, 1)', animation: '1s linear -1s infinite normal forwards running animate', transformBox: 'view-box' }}>
            <path
              strokeLinecap="round"
              strokeWidth="3.5"
              strokeLinejoin="round"
              stroke="#333"
              fill="none"
              d="M38.015 65.984C33.157 62.335 30 56.543 30 50c0-9.996 7.341-18.255 16.921-19.739C47.927 30.105 48.95 30 50 30s2.073.105 3.079.261C62.659 31.745 70 40.004 70 50c0 6.543-3.157 12.335-8.015 15.984"
              style={{ strokeWidth: 3.5, stroke: 'rgb(237, 28, 36)' }}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
    )
}