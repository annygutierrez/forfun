import React from 'react';
import SocialItem from '../SociaItem';
import Insta from '../../assets/insta.svg';
import Twitter from '../../assets/twitter.svg';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import './styles.css';

const SocialsLinks = {
    twitter: 'https://twitter.com/annygutierrezl',
    insta: 'https://www.instagram.com/annyglop16/',
    github: 'https://github.com/annygutierrez',
    linkedin: 'https://www.linkedin.com/in/annygutierrez/'
}

const Socials = () => {

    return (
        <div className="Socials">
            <SocialItem link={SocialsLinks.twitter} icon={Twitter} alt='twitter' />
            <SocialItem link={SocialsLinks.insta} icon={Insta} alt='insta' />
            <SocialItem link={SocialsLinks.github} icon={Github} alt='git' />
            <SocialItem link={SocialsLinks.linkedin} icon={Linkedin} alt='linkedin' />
        </div>
    )
}

export default Socials;