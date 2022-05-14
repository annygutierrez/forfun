import React  from 'react';
import RankingItem from '../../components/RankingItem';
import { RankingList } from './rankingList';
import './styles.css';

const Ranking = () => {
    return (
        <div className="TechCertContainer">
          {
              RankingList.map(item => (
                <RankingItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  type={item.type}
                  image={item.icon}
                  link={item.link}
                  embeded={item.embeded}
                />
              ))
          }
        </div>
    )
}

export default Ranking;