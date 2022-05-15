import React  from 'react';
import RankingItem from '../../components/RankingItem';
import { RankingList } from './rankingList';
import './styles.css';

const Ranking = () => {
    return (
        <div className="TechCertContainer">
          <p className='RankingDescription'>These are the songs I enjoyed the most through this week or month...or year, it really depends on how often I update this. My favorite app right now is Spotify, because I really really love listening to music and this app is able to recommend pretty good music following the patterns it extracts from the songs I've already listened.</p>
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