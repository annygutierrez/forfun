import React  from 'react';
import RankingItem from '../../components/RankingItem';
import { FilmsList } from './filmsList';
import './styles.css';

const Films = () => {
    return (
        <div className="TechCertContainer">
          {
              FilmsList.map(item => (
                <RankingItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  type={item.type}
                  image={item.icon}
                  link={item.link}
                  embeded={item.embeded}
                  freeHeight={true}
                />
              ))
          }
        </div>
    )
}

export default Films;