import React, { useState } from 'react';
import SubMenu from '../../components/SubMenu';
import Ranking from '../Ranking';
// import ArtCertifications from '../ArtCertifications';
// import TechCertifications from '../TechCertifications';

const Music = () => {
    const [activeId, setActiveId] = useState(2);

    const MenuItems = [
        {
            name: 'Playlist of My Life',
            code: 0
        },
        {
            name: 'Favorite Artists',
            code: 1
        },
        {
            name: 'Ranking',
            code: 2
        }
    ];

    const SelectItem = (id) => {
        setActiveId(id);
     }

    return (
        <div>
           <SubMenu action={SelectItem} activeItem={activeId} items={MenuItems} />
           {Boolean(activeId === 2) && <Ranking />}
           {/* {Boolean(activeId === 2) && <TechCertifications />}
           {Boolean(activeId === 1) && <ArtCertifications />} */}
        </div>
    )
}

export default Music;