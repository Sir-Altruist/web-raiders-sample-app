import { useEffect, useState  } from "react";
import styled from "styled-components";
import NavigationBar from './navbar'
import { Slide1, Slide2, Slide3, Slide4, EnergyImg } from "./assets";
// import { GoArrowRight } from "react-icons/go";
import Counter from './counter'
import { HiOutlineLightBulb } from "react-icons/hi";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Screen from "./screens";

const sliders = [Slide1, Slide2, Slide3, Slide4]
function App() {

  // const [mobile, setMobile] = useState(false)

  {/** Check screen sizes */}
  // useEffect(() => {
  //   const responsive = () => {
  //     return window.innerWidth
  //   }
  // }, [])
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  function handleToggle(type, name){
    type === 'menu' ? setOpen(!open) : setOpenMenu(openMenu === name ? null : name)
  }
  return (
    <AppContainer>
      {/** Landing */}
      <NavigationBar open={open} openMenu={openMenu} handleToggle={handleToggle} />
      <Carousel
      width={'100%'}
      animationHandler='fade'
      infiniteLoop={true}
      autoPlay={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      >
        {sliders.map((item, i) => (
          <Section key={i} className='landing' background={item}>
            {/* <NavigationBar /> */}
          <Container>
            <Content>
              <Header>Welcome to webraider</Header>
              <SubHeader>Cleaner Energy For a Cleaner World</SubHeader>
              <Caption>Help protect the environment by powering your home with 100% renewable energy.</Caption>
              <ButtonWrapper>
                <Button background="#0FCC7C" border="#0FCC7C">Get a Quote</Button>
                <Button background="transparent" border="#fff" left="20px">Discover More</Button>
              </ButtonWrapper>
            </Content>
          </Container>
        </Section>

        ))}
      </Carousel>

      {/** About Us */}
      <Section className="about">
        <Container>
            <CardContainer>
              <Card className="count">
                <Container>
                  <p>Since 2010, our customers have avoided</p>
                  <Counter end="1000" duration="0.01" />
                  <h4>pounds of CO2.</h4>
                </Container>
              </Card>
              <Card className="learn">
                <Container>
                  <h4>Let's utilize sun, wind and water in a better way</h4>
                  <p>
                    Ac facilisi dolor lobortis a faucibus imperdiet sapien 
                    laoreet pellentesque vulputate. Euismod posuere viverra 
                    adipiscing gravida venenatis. Vitae augue potenti inceptos 
                    parturient ante porttitor dictum auctor.
                  </p>
                  <Button background="#0FCC7C" className="learn">Learn more</Button>
                </Container>
              </Card>
            </CardContainer>
          <FlexBox className="about">
            <Box>
              <Header className="about">About Us</Header>
              <SubHeader className="about">Renewable Energy for a Sustainable World</SubHeader>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </span>
              <Card className="about">
                <FlexBox style={{ padding: '20px' }}>
                  <div><HiOutlineLightBulb color="#0FCC7C" size={'40px'} /></div>
                  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
                    <p style={{ marginTop: '0', color: '#00384F', fontWeight: 'bold' }}>The idea</p>
                    <span style={{ fontSize: '14px'}}>
                      Fermentum vehicula venenatis tellus dolor a luctus sodales 
                      lectus cras nullam senectus
                    </span>
                  </div>
                </FlexBox>
              </Card>
            </Box>
            <Box>
              <Image src={EnergyImg} alt="energy" />
            </Box>
          </FlexBox>
        </Container>
      </Section>
    </AppContainer>
  );
}

export default App;

/** STYLES */
const AppContainer = styled.div`
width: 100%;
position: relative;
`;

const Section = styled.section`
width: 100%;

&.landing {
  padding-top: 200px;
  margin: 0!important;
  height: 130vh;
  background-image: ${({ background }) => `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${background})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

${Screen.surfacePro`
    height: 80vh;
`}
${Screen.iPhone14ProMax`
  height: 100vh;
`}
${Screen.samsungGalaxyS8`
  padding-top: 150px;
  min-height: 100vh;
`}
}

&.about {
  padding-bottom: 100px;
  margin-top: -100px;
  ${Screen.iPhone14ProMax`
    margin-top: -70px;
  `}
  ${Screen.iPhone5`
    margin-top: -50px;
  `}
}
`;

const Container = styled.div`
width: 80%;
padding: 15px 0;
margin: 0 auto;
${Screen.surfacePro`
  width: 90%;
`}
`;

const Content = styled.div`
width: 65%;
height: auto;
margin: 70px auto 10px;
display: flex;
flex-direction: column;
color: #fff;
// ${Screen.surfacePro`
//   width: 70%;
//   margin-top: 10px;
// `}
${Screen.surfacePro`
  width: 100%;
  margin-top: 40px;
  // background: #000;
`}
${Screen.iPhone14ProMax`
  width: 100%;
  // margin-top: 10px;
`}
${Screen.samsungGalaxyS8`
  margin-top: 0;
`}
`;

const Header = styled.h6`
text-transform: uppercase;
font-size: 16px;
text-align: center;
margin: 0;
${Screen.surfacePro`
  font-size: 13px;
  margin-top: 20px;
`}
${Screen.iPadMini`
  font-size: 20px;
  margin-top: 10px;
`}
${Screen.iPhone14ProMax`
  font-size: 13px;
  margin-top: 0;
`}
${Screen.samsungGalaxyS8`
  margin-top: 30px;
`}

&.about {
color: #0FCC7C;
text-align: left;
margin-top: 30px;
font-eize: 14px;
${Screen.surfacePro`
  font-size: 13px;
`}
}
`;

const SubHeader = styled.h1`
font-size: 60px;
padding-top: 0;
line-height: 1.2em;
text-align: center;
margin: 20px 0 0;
${Screen.surfacePro`
  font-size: 48px;
  margin-top: 20px;
`}
${Screen.iPadMini`
  font-size: 40px;
  margin-top: 30px;
`}
${Screen.iPhone14ProMax`
  font-size: 38px;
  margin-top: 0;
`}
${Screen.samsungGalaxyS8`
  margin-top: 10px;
  font-size: 30px;
`}

&.about {
  font-size: 48px;
  color: #00384F;
  text-align: left;
  margin-bottom: 20px;
  ${Screen.surfacePro`
    font-size: 34px;
    // margin-top: 30px;
  `}
  ${Screen.iPhone14ProMax`
    font-size: 28px;
  `}
}
`;

const Caption = styled.h4`
font-size: 24px;
text-align: center;
margin: 15px 0 0;
${Screen.surfacePro`
  margin-top: 30px;
`}
${Screen.iPhone14ProMax`
  font-size: 18px;
`}
${Screen.samsungGalaxyS8`
  font-size: 14px;
`}
`;

const Button = styled.div`
width: max-content;
padding: 20px 100px;
background-color: ${({ background }) => background};
border: 2px solid ${({ border }) => border};
margin-left: ${({ left }) => left};
color: #fff;
border-radius: 30px;
cursor: pointer!important;
font-weight: 600;

${Screen.iPhone14ProMax`
  width: 100%;
  margin-left: 0;
  margin-top: 10px;
`}

${Screen.samsungGalaxyS8`
  font-size: 14px;
  white-space: no-wrap;
  padding: 10px;
`}

&.learn {
  padding: 10px 20px;
  margin-top: 50px;

  ${Screen.iPhone14ProMax`
    width: max-content;
    margin: 30px 0 10px;
  `}
}
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
cursor: pointer!important;
${Screen.iPhone14ProMax`
  flex-direction: column;
`}
${Screen.samsungGalaxyS8`
  margin-top: 15px;
`}
`;

const CardContainer = styled.div`
display: flex;
${Screen.iPhone14ProMax`
  width: 100%;
  flex-direction: column;
`}
`;

const Card = styled.div`
&.count {
width: 400px;
height: 300px;
border-radius: 20px;
background-color: #0FCC7C;
color: #fff;
margin-right: 50px;

p {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

h4 {
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
}

${Screen.surfacePro`
width: 500px;
margin-right: 20px;
padding-bottom: 50px;  
`}
${Screen.iPhone14ProMax`
  width: 100%;
  height: 200px;
  padding-bottom: 0;

  p {
      font-size: 18px;
  }

  h4 {
      font-size: 18px;
  }
`}
}

&.learn {
  width: 800px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
  color: #00384F;

  h4 {
    font-size: 20px;
  }

  ${Screen.iPhone14ProMax`
    width: 100%;
    margin-top: 2rem;
  `}
}

&.about {
  width: 90%;
  height: auto;
  background-color: #E1F5EC;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;

  
  ${Screen.surfacePro`
    width: 97%;
    margin: 0;
    padding-bottom: 50px;
    margin-top: 20px;  
  `}
  ${Screen.iPhone14ProMax`
    width: 95%;
  `}

}
`;

const FlexBox = styled.div`
display: flex;

&.about {
margin-top: 150px;

${Screen.surfacePro`
  flex-direction: column;
  width: 100%; 
  margin-top: 100px;
  // background-color: #000;
`}
${Screen.iPhone14ProMax`
  width: 100%;
  flex-direction: column;
  justify-content: column-reverse;
  margin-top: 50px;
`}
}
`;

const Box = styled.div`
width: 50%;

${Screen.surfacePro`
  width: 100%;  
`}
${Screen.iPhone14ProMax`
  width: 100%;  
`}

span {
font-size: 16px;
color: #00384F; 

${Screen.surfacePro`
  font-size: 14px;  
`}
}
`;

const Image = styled.img`
width: 100%;
border-radius: 10px;
${Screen.surfacePro`
  margin-top: 50px;  
`}
${Screen.iPhone14ProMax`
  margin-top: 30px;
  height: 300px;
`}
`