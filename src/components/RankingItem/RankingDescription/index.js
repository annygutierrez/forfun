import React from 'react';
import RankingTitle from '../RankingTitle';
import './styles.css';

const RankingDescription = ({ title, certLink, subtitle, description, type, embeded }) => {
    return (
        <div className="CertDescriptionContainer">
            <RankingTitle title={title} certLink={certLink} />
            <p style={{ fontFamily: 'Poppins', fontSize: '15px' }}>{subtitle}</p>
            <div>
                <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>{description}</p>
            </div>
            <div>{embeded}</div>
            <p style={{ fontFamily: 'Roboto', fontSize: '15px', color: '#07AC7B', fontWeight: 'bold' }}>{type}</p>
        </div>
    )
}

export default RankingDescription;