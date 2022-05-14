import React, { useState } from 'react';
import SubMenu from '../../components/SubMenu';
import Films from '../Films';
// import ArtCertifications from '../ArtCertifications';
// import TechCertifications from '../TechCertifications';

const Movies = () => {
    const [activeId, setActiveId] = useState(2);

    const MenuItems = [
        {
            name: 'Reviews',
            code: 0
        },
        {
            name: 'Series',
            code: 1
        },
        {
            name: 'Movies',
            code: 2
        }
    ];

    const SelectItem = (id) => {
        setActiveId(id);
     }

    return (
        <div>
           <SubMenu action={SelectItem} activeItem={activeId} items={MenuItems} />
           {Boolean(activeId === 2) && <Films />}
           {/* {Boolean(activeId === 2) && <TechCertifications />}
           {Boolean(activeId === 1) && <ArtCertifications />} */}
        </div>
    )
}

export default Movies;