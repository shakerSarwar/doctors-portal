import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Infocard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white">
          <div className={`d-flex align-items-center justify-content-center info-container info-${info.background}`}>
          <div>
            <FontAwesomeIcon className="info-icon me-3" icon={info.icon} />
            </div>
            <div>
                <h5>{info.title}</h5>
                <small>{info.description}</small>
            </div>
          </div>
        </div>
    );
};

export default InfoCard;