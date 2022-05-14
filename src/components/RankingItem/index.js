import React from 'react';
import ItemIcon from './ItemIcon';
import RankingDescription from './RankingDescription';
import './styles.css';

const RankingItem = ({ title, subtitle, description, type, image, link, embeded }) => {
    return (
        <div className="CertItemContainer">
           <ItemIcon image={image} alt={title}/>
           <RankingDescription
             title={title}
             certLink={link}
             subtitle={subtitle}
             description={description}
             type={type}
             embeded={embeded}
           />
        </div>
    )
}

export default RankingItem;