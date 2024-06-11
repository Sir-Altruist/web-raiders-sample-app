import React, { Fragment, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram, IoMdClose } from "react-icons/io";
import { Logo } from './assets';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { fadeIn, slideInRight, fadeInDown, bounceInDown, bounceOutUp, flipInY, flipOutY } from 'react-animations';
import Screen from './screens';

const navlist = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Service',
        path: '/service',
        subMenu: [{name: 'Single Service'}]
    },
    {
        name: 'Project',
        path: '/project',
        subMenu: [{name: 'Single Project'}]
    },
    {
        name: 'Contact Us',
        path: '/contact'
    },
    {
        name: 'Page',
        path: '/page',
        subMenu: [
            {name: 'Team'}, 
            {name: 'FAQ'}, 
            {name: 'Blog'}, 
            {name: 'Single Post'}, 
            {name: 'Error 404'}
        ]
    }
]

const decorate = {
    animate: {
        flipIn: (duration) =>
          css`
            animation: ${duration}s ${keyframes(flipInY)};
          `,
        flipOut: (duration) =>
          css`
            animation: ${duration}s ${keyframes(flipOutY)};
          `,
      }
}
const subNav = ['Service', 'Project', 'Page']
const Navbar = ({ open, openMenu, handleToggle }) => {
    // const [openMenu, setOpenMenu] = useState(false)

    // function handleMenuToggle(){
    //     setOpenMenu(!openMenu)
    //     }
  return (
    <Box>
        <TopNav>
            <Container className='top-nav'>
            <FlexBox className='top-nav'>
                <IconBox className='professionals'>
                    <div style={{ marginRight: '20px', display: 'flex'}}>
                        <span><FaPhoneAlt color={'#0FCC7C'} size={'15px'} style={{ paddingRight: '2px' }} /></span>
                        <Text>+(234)-8180907820</Text>
                    </div>
                    <div style={{ display: 'flex'}}>
                        <span><IoMail color={'#0FCC7C'} size={'15px'} style={{ paddingRight: '2px'}} /></span>
                        <Text>support@webraider.com.ng</Text>
                    </div>
                </IconBox>
                <Icon className='socials'>
                    <span><TiSocialFacebook color='#fff' size={'20px'} /></span>
                    <span><TiSocialTwitter color='#fff' size={'20px'} style={{ paddingLeft: '10px'}} /></span>
                    <span><IoLogoInstagram color='#fff' size={'20px'} style={{ paddingLeft: '10px'}} /></span>
                </Icon>
            </FlexBox>
            </Container>
        </TopNav>
        <BottomNav>
            <Container className='bottom-nav'>
            <FlexBox className='bottom-nav'>
                <div>
                    <Image src={Logo} alt='logo' />
                </div>
                <Nav>
                <NavList className='desktop'>
                    {navlist.map((item) => (
                        <div key={item?.name}>
                            <div style={{ display: 'flex', fontWeight: '700', cursor: 'pointer' }}>
                                <NavListItem className={item?.path === '/' ? 'desktop active' : 'desktop'}>
                                {item.name}
                                {
                                    item.subMenu && (
                                    <SubMenu>
                                        {item.subMenu.map((link, i) => (
                                            <SubMenuItem key={i} className='desktop'>{link.name}</SubMenuItem>
                                        ))}
                                    </SubMenu>
                                    )
                                }
                                </NavListItem>
                                {subNav.includes(item.name) && <span><MdKeyboardArrowDown style={{ color: '#fff', paddingTop: '2px'}} size={'20px'} /></span>}
                            </div>
                        </div>
                    ))}
                </NavList>
                <Icon className='hamburger' onClick={() => handleToggle('menu')}>
                    {
                    open ? <IoMdClose size={'40px'} color='#fff' /> : <RxHamburgerMenu size={'40px'} color='#fff' />
                    }
                </Icon>
                {/** This is for the mobile version */}
                {open && <NavList className='mobile' open={open} >
                    {navlist.map((item) => (
                        <div key={item?.name}>
                            <div style={{ display: 'flex', fontWeight: '700', cursor: 'pointer' }} onClick={() => handleToggle('subMenu', item?.name)}>
                                <NavListItem className={item?.path === '/' ? 'mobile active' : 'mobile'}>
                                {item.name}
                                {
                                    openMenu === item?.name && item.subMenu && (
                                    <SubMenu>
                                        {item.subMenu.map((link, i) => (
                                            <SubMenuItem key={i} className='mobile'>
                                                {link.name}
                                                {console.log(i)}
                                            </SubMenuItem>
                                        ))}
                                    </SubMenu>
                                    )
                                }
                                </NavListItem>
                                {subNav.includes(item.name) && <Icon className='arrows'><MdKeyboardArrowDown size={'20px'} /></Icon>}
                            </div>
                        </div>
                    ))}
                </NavList>}
                <Button>Get a Quote</Button>
                </Nav>
            </FlexBox>
            </Container>
        </BottomNav>
    </Box>
  )
}

export default Navbar

/** STYLES */
const Box = styled.div`
width: 100%;
height: 200px;
position: absolute;
z-index: 1;
`;

const Container = styled.div`
width: 80%;
padding: 15px 0;
margin: 0 auto;
&.top-nav {
    ${Screen.iPhone14ProMax`
        width: 95%;
    `}
}
&.bottom-nav {
    ${Screen.surfacePro`
        width: 90%;
    `}
    ${Screen.samsungGalaxyS8`
        padding-top: 5px;
    `}
}
`;

const TopNav = styled.div`
width: 100%;
height: 50px;
background-color: #00384F;
`;

const BottomNav = styled.div`
width: 100%;
height: 150px;
background-color: transparent;

${Screen.iPhone14ProMax`
    margin-top: 10px; 
`}
${Screen.samsungGalaxyS8`
    height: 50px;
    margin-top: 5px;
  `}
`;

const FlexBox = styled.div`
width: 100%;
display: flex;
justify-content: ${({ justify }) => justify};

&.top-nav {
justify-content: space-between;
${Screen.iPhone14ProMax`
    justify-content: center;
    align-items: center;
`}
}
&.bottom-nav {
justify-content: space-between;
}
`;

const Image = styled.img``;

const Nav = styled.nav`
display: flex;
`;
const NavList = styled.ul`
list-style-type: none;
&.desktop {
    display: flex;
    ${Screen.surfacePro`
        display: none;
    `}
}

&.mobile {
animation: ${({ open }) => open ? decorate.animate.flipOut(.5) : decorate.animate.flipIn(.5)}
${Screen.surfacePro`
    width: 80%;
    left: 50px;  
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 80%;
    top: 120px;
    left: 50px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 25px 0; 
`}
${Screen.iPhone14ProMax`
    width: 88%;
    left: 0; 
`}
}
`;

const NavListItem = styled.li`

&.desktop {
    color: #fff;
    padding-left: 30px;
    white-space: no-wrap!important;
    position: relative;

    &:hover {

    ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        list-style-type: none!important;
        border-radius: 10px;
        margin-top: 5px;
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
        width: max-content;
        height: auto;
        background-color: #fff;
    }

    color: #0FCC7C;
    transition: all .1s ease-out;
    }
}

&.mobile {
color: #00384F;
padding-bottom: 20px;

${Screen.surfacePro`
    font-size: 18px;
`}
${Screen.iPhone14ProMax`
    font-size: 14px;
`}
}

&.active {
    color: #0FCC7C!important;
}
`;

const Button = styled.div`
width: max-content;
height: 20px;
padding: 10px 30px 15px;
background-color: #0FCC7C;
color: #fff;
cursor: pointer;
border-radius: 30px;
margin-left: 50px;
margin-top: 10px;
text-align: center;

&:hover {
background-color: #00384F;
transition: all .1s ease-out;
}

${Screen.iPhone14ProMax`
    display: none;
`}
`;

const SubMenu = styled.ul`
display: none;
${Screen.surfacePro`
    display: flex;
    list-style-type: none;
    flex-direction: column;
    white-space: no-wrap;
    // position: absolute;
`}
`;

const SubMenuItem = styled.li`
&.desktop {
    white-space: no-wrap;
    color: #00384F;
    font-size: 14px;
    padding: 10px 0 10px;
    
    &:hover {
        color: #0FCC7C;
    }
}

&.mobile {
    color: #00384F;
    padding-bottom: 10px;
    margin-left: 0;
    white-space: no-wrap;
    // position: relative;
}
`;

const Icon = styled.div`
&.socials {
display: flex;
${Screen.iPhone14ProMax`
    display: none;
`}

&.arrows {
    color: #fff;
    padding-top: 2px;

    ${Screen.iPhone14ProMax`
        color: #00384F;

    `}
}
}

&.hamburger {
    display: none!important;
    ${Screen.surfacePro`
        display: block!important;
        margin-right: -10px;
        margin-top: 10px;
        cursor: pointer;
        // animation: hide-scroll .3s backwards;
    `}
    ${Screen.iPhone14ProMax`
        margin-right: 10px;
    `}
}
`;

const Text = styled.span`
color: #fff;
font-size: 14px;
${Screen.iPhone12Pro`
    font-size: 12px;
`}
`;

const IconBox = styled.div`
width: 100%;
display: flex;
white-space: no-wrap;
&.professionals {
    ${Screen.iPhone14ProMax`
        justify-content: center!important;
        span {
            &:nth-child(1){
                padding-right: 10px!important;
            }
        }
    `}

}
`