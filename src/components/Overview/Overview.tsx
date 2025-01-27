import React from 'react'
import {
    ContainerData, Data, DataText, Title, Subtitle, ContainerCardCharts, CardCharts, ChartsLines, Lines, TagsCard, MainTexts, Radio,
    CardContainer,
    GradientOverlay,
    InnerBackground,
    ContentWrapper,
    Header,
    HeaderLeft,
    IconContainer,
    Icon,
    StatusBadge,
    StatGrid,
    StatCard,
    StatLabel,
    StatValue,
    StatChange,
    ChartContainer,
    Chart,
    Bar,
    Footer,
    FooterLeft,
    FooterButton,
    FooterIcon,
    TitleGraphic,
    GraphContainer,
    Content,
    Display,
    ContainerText,
    Text,
    ContainerPerson,
    Div,
    ContainerName,
    Name,
    Time,
    TitleUser,
    ButtonUser,
    ScrollContent,
    ContainerHide
} from '../../styles/Overview/Overview.styles'
import { IoIosBed, IoMdCloseCircleOutline } from "react-icons/io";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TbLogin, TbLogin2 } from "react-icons/tb";
import { FaCalendarCheck } from "react-icons/fa";
import { FaRegCircleCheck } from 'react-icons/fa6';

export default function Overview() {

    const scroll = (direction: string) => {
        const container = document.getElementById("scrollContainer");
        if (container) {
            if (direction === "left") {
                container.scrollBy({ left: -800, behavior: "smooth" });
                console.log('Si')
            } else {
                container.scrollBy({ left: 800, behavior: "smooth" });
            }
        }
    }

    return (
        <>
            <ContainerHide>
                <ContainerData>
                    <Data>
                        <IoIosBed size={40} color="white" />
                        <DataText>
                            <Title>8,461</Title>
                            <Subtitle>New Booking</Subtitle>
                        </DataText>
                    </Data>
                    <Data>
                        <FaCalendarCheck size={40} color='white' />
                        <DataText>
                            <Title>963</Title>
                            <Subtitle>Scheduled Room</Subtitle>
                        </DataText>
                    </Data>
                    <Data>
                        <RiContactsBook2Fill size={40} color='white' />
                        <DataText>
                            <Title>12,645</Title>
                            <Subtitle>New Contacts</Subtitle>
                        </DataText>
                    </Data>
                    <Data>
                        <TbLogin2 size={40} color='white' />
                        <DataText>
                            <Title>753</Title>
                            <Subtitle>Check In</Subtitle>
                        </DataText>
                    </Data>
                    <Data>
                        <TbLogin size={40} color='white' />
                        <DataText>
                            <Title>516</Title>
                            <Subtitle>Check Out</Subtitle>
                        </DataText>
                    </Data>
                </ContainerData>
                <GraphContainer>
                    <CardContainer>
                        <GradientOverlay />
                        <InnerBackground />
                        <ContentWrapper>
                            <Header>
                                <HeaderLeft>
                                    <IconContainer>
                                        <Icon viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </Icon>
                                    </IconContainer>
                                    <TitleGraphic>Performance Analytics</TitleGraphic>
                                </HeaderLeft>
                                <StatusBadge>
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                    Live
                                </StatusBadge>
                            </Header>
                            <StatGrid>
                                <StatCard>
                                    <StatLabel>Total Views</StatLabel>
                                    <StatValue>24.5K</StatValue>
                                    <StatChange>+12.3%</StatChange>
                                </StatCard>
                                <StatCard>
                                    <StatLabel>Conversions</StatLabel>
                                    <StatValue>1.2K</StatValue>
                                    <StatChange>+8.1%</StatChange>
                                </StatCard>
                            </StatGrid>
                            <ChartContainer>
                                <Chart>
                                    <Bar style={{ height: '40%' }}>
                                        <div style={{ height: '60%' }}></div>
                                    </Bar>
                                    <Bar style={{ height: '60%' }}>
                                        <div style={{ height: '40%' }}></div>
                                    </Bar>
                                    <Bar style={{ height: '75%' }}>
                                        <div style={{ height: '80%' }}></div>
                                    </Bar>
                                    <Bar style={{ height: '45%' }}>
                                        <div style={{ height: '50%' }}></div>
                                    </Bar>
                                    <Bar style={{ height: '85%' }}>
                                        <div style={{ height: '90%' }}></div>
                                    </Bar>
                                    <Bar style={{ height: '65%' }}>
                                        <div style={{ height: '70%' }}></div>
                                    </Bar>
                                    <Bar style={{ height: '95%' }}>
                                        <div style={{ height: '85%' }}></div>
                                    </Bar>
                                </Chart>
                            </ChartContainer>
                            <Footer>
                                <FooterLeft>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Last 7 days</span>
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        style={{ color: '#94a3b8' }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </FooterLeft>
                                <FooterButton>
                                    View Details
                                    <FooterIcon viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </FooterIcon>
                                </FooterButton>
                            </Footer>
                        </ContentWrapper>
                    </CardContainer>
                    <ContainerCardCharts>
                        <CardCharts>
                            <TagsCard>
                                <Radio>
                                    <input type="radio" name="radio" />
                                    <span className="name">1H</span>
                                </Radio>
                                <Radio>
                                    <input type="radio" name="radio" />
                                    <span className="name">1D</span>
                                </Radio>
                                <Radio>
                                    <input type="radio" name="radio" defaultChecked />
                                    <span className="name">1W</span>
                                </Radio>
                                <Radio>
                                    <input type="radio" name="radio" />
                                    <span className="name">1M</span>
                                </Radio>
                                <Radio>
                                    <input type="radio" name="radio" />
                                    <span className="name">ALL</span>
                                </Radio>
                            </TagsCard>
                            <MainTexts>
                                <p className="title">BTC 70K</p>
                                <p className="change">-2.92%</p>
                            </MainTexts>
                            <ChartsLines>
                                <i className="icon-month">
                                    <svg fill="none" viewBox="0 0 472 170" style={{ width: '100%' }}>
                                        <path
                                            d="M2.5 167L7.87783 124.955C7.95728 124.334 8.22911 123.753 8.65521 123.294L12.5765 119.071C13.6568 117.908 15.4565 117.788 16.682 118.797L23 124L28.9022 129.246C30.4289 130.603 32.8358 130.071 33.648 128.197L37.7169 118.807C38.1923 117.71 39.2738 117 40.4696 117H47.9618C49.192 117 50.2976 116.249 50.7508 115.105L60.1181 91.4638C60.3655 90.8394 60.8153 90.316 61.3955 89.9776L72.0575 83.7581C72.3504 83.5873 72.6122 83.368 72.8317 83.1097L77.1069 78.0801C78.7093 76.195 81.7764 76.9507 82.3195 79.3645L85.1283 91.848C85.359 92.8733 86.1094 93.7031 87.1064 94.0355L93.877 96.2923C95.1364 96.7121 96.522 96.2542 97.2833 95.1666L116.458 67.7747C116.811 67.2705 117 66.6698 117 66.0543V52C117 50.3431 118.343 49 120 49H137.857C138.88 49 139.834 49.5221 140.385 50.3848L150.824 66.7248C150.941 66.9077 151.077 67.0774 151.231 67.2309L155.012 71.0123C156.318 72.3175 158.481 72.1456 159.563 70.6505L165.937 61.8495C167.019 60.3544 169.182 60.1824 170.488 61.4877L179.121 70.1213C179.684 70.6839 180.447 71 181.243 71H200.338C200.774 71 201.205 71.0952 201.601 71.279L213.688 76.891C214.517 77.2758 215.476 77.2619 216.293 76.8533L221.342 74.3292C222.358 73.821 223 72.7822 223 71.6459V37.4669C223 36.2725 223.704 35.1822 224.827 34.7763C228.907 33.3021 234.813 32.0629 235.5 35.5C236.221 39.1067 245.127 48.1338 250.781 53.4172C251.786 54.3559 253.302 54.4654 254.446 53.7028L261.5 49L279.106 36.4903C279.97 35.8764 281.094 35.7639 282.062 36.1944L292.391 40.7847C293.384 41.2263 294.539 41.0957 295.409 40.4433L301.025 36.2309C301.65 35.7622 302.068 35.0683 302.189 34.2966L306.775 5.11153C307.114 2.95384 309.572 1.87012 311.394 3.07489L337.527 20.3567C338.153 20.7705 338.601 21.4037 338.783 22.1314L344.852 46.4092C345.222 47.8862 346.639 48.8524 348.148 48.6567L370.337 45.7804C371.627 45.6132 372.877 46.296 373.434 47.4713L376.858 54.6994C376.952 54.8992 377.069 55.0879 377.205 55.2621L388.12 69.2333C388.938 70.281 390.349 70.665 391.585 70.1768L405.789 64.5701C407.299 63.9741 409.009 64.687 409.648 66.1788L414.257 76.934C414.417 77.3074 414.5 77.7095 414.5 78.1158V84.3944C414.5 85.3975 415.001 86.3342 415.836 86.8906L437 101L456.676 112.518C457.212 112.832 457.638 113.304 457.894 113.869L469.5 139.5"
                                            stroke="red"
                                            strokeWidth="5"
                                            strokeDasharray="1500"
                                        ></path>
                                    </svg>
                                </i>
                                <Lines>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Lines>
                            </ChartsLines>
                        </CardCharts>
                    </ContainerCardCharts>
                </GraphContainer>


                <Content>
                    <TitleUser>Latest Review by Customers</TitleUser>
                    <ScrollContent id='scrollContainer' style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}>
                        <ButtonUser direction='left' onClick={() => scroll('left')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.8 13H15q.425 0 .713-.288T16 12t-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275t.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                        </ButtonUser>
                        <Display>
                            <ContainerText>
                                <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                                <ContainerPerson>
                                    <Div>
                                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Random" />
                                        <ContainerName>
                                            <Name>Kusnaidi Anderson</Name>
                                            <Time>4m ago</Time>
                                        </ContainerName>
                                    </Div>
                                    <Div>
                                        <FaRegCircleCheck color='green' size={25} />
                                        <IoMdCloseCircleOutline color='red' size={30} />
                                    </Div>
                                </ContainerPerson>
                            </ContainerText>
                            <ContainerText>
                                <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                                <ContainerPerson>
                                    <Div>
                                        <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Random" />
                                        <ContainerName>
                                            <Name>Kusnaidi Anderson</Name>
                                            <Time>4m ago</Time>
                                        </ContainerName>
                                    </Div>
                                    <Div>
                                        <FaRegCircleCheck color='green' size={25} />
                                        <IoMdCloseCircleOutline color='red' size={30} />
                                    </Div>
                                </ContainerPerson>
                            </ContainerText>
                            <ContainerText>
                                <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                                <ContainerPerson>
                                    <Div>
                                        <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="Random" />
                                        <ContainerName>
                                            <Name>Kusnaidi Anderson</Name>
                                            <Time>4m ago</Time>
                                        </ContainerName>
                                    </Div>
                                    <Div>
                                        <FaRegCircleCheck color='green' size={25} />
                                        <IoMdCloseCircleOutline color='red' size={30} />
                                    </Div>
                                </ContainerPerson>
                            </ContainerText>
                            <ContainerText>
                                <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                                <ContainerPerson>
                                    <Div>
                                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="Random" />
                                        <ContainerName>
                                            <Name>Kusnaidi Anderson</Name>
                                            <Time>4m ago</Time>
                                        </ContainerName>
                                    </Div>
                                    <Div>
                                        <FaRegCircleCheck color='green' size={25} />
                                        <IoMdCloseCircleOutline color='red' size={30} />
                                    </Div>
                                </ContainerPerson>
                            </ContainerText>
                            <ContainerText>
                                <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                                <ContainerPerson>
                                    <Div>
                                        <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Random" />
                                        <ContainerName>
                                            <Name>Kusnaidi Anderson</Name>
                                            <Time>4m ago</Time>
                                        </ContainerName>
                                    </Div>
                                    <Div>
                                        <FaRegCircleCheck color='green' size={25} />
                                        <IoMdCloseCircleOutline color='red' size={30} />
                                    </Div>
                                </ContainerPerson>
                            </ContainerText>
                            <ContainerText>
                                <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                                <ContainerPerson>
                                    <Div>
                                        <img src="https://randomuser.me/api/portraits/men/19.jpg" alt="Random" />
                                        <ContainerName>
                                            <Name>Kusnaidi Anderson</Name>
                                            <Time>4m ago</Time>
                                        </ContainerName>
                                    </Div>
                                    <Div>
                                        <FaRegCircleCheck color='green' size={25} />
                                        <IoMdCloseCircleOutline color='red' size={30} />
                                    </Div>
                                </ContainerPerson>
                            </ContainerText>
                            <ContainerText>
                                <Text>I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent</Text>
                                <ContainerPerson>
                                    <Div>
                                        <img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Random" />
                                        <ContainerName>
                                            <Name>Kusnaidi Anderson</Name>
                                            <Time>4m ago</Time>
                                        </ContainerName>
                                    </Div>
                                    <Div>
                                        <FaRegCircleCheck color='green' size={25} />
                                        <IoMdCloseCircleOutline color='red' size={30} />
                                    </Div>
                                </ContainerPerson>
                            </ContainerText>
                        </Display>
                        <ButtonUser direction='' onClick={() => scroll('right')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                        </ButtonUser>
                    </ScrollContent>
                </Content>
            </ContainerHide>
        </>

    )
}
