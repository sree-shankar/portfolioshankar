import { Grid, Stack, Typography, Container, Box, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { avatarCircle, handyhifi, mobileavatar, online } from '../images/images'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Toolbarstyle } from '../theme/helpertheme';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Containere = styled.div`
  display: grid;
  /* height: 50vh; */
  place-items: center;
  /* overflow: hidden; */
  /* background-color: black; */
  --circleDiameter: 300px;
  --planets: calc(var(--circleDiameter) / 6);
  @media (max-width: 768px) {
    overflow: hidden; /* Apply overflow hidden on mobile view */
    --circleDiameter: 280px;
    --planets: calc(var(--circleDiameter) / 8);
    height: 40vh;
    width: 100%;
  }
`;

const HeroCircle = styled.div`
  position: relative;
  width: var(--circleDiameter);
  height: var(--circleDiameter);
`;

const InnerImage = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 10px;
  width: 220px;
  height: 250px;
`;

const rotateAnimation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

const HeroRotate = styled.div`
  position: relative;
  top: -7px;
  left: -7px;
  width: 100%;
  height: 100%;
  /* border: 1px solid white; */
  border-radius: 100%;
  animation: ${rotateAnimation} 30s linear infinite;
`;

const maintainAnimation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(-360deg); }
`;

const 
Planet = styled.div`
  position: absolute;
  width: var(--planets);
  aspect-ratio: 1;
  border-radius: 100%;
  animation: ${maintainAnimation} 30s linear infinite;

  &:nth-child(1) {
    top: calc(-1 * var(--planets) / 2);
    left: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 5px);
  }
  &:nth-child(2) {
    top: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 5px);
    right: calc(-1 * var(--planets) / 2);
  }
  &:nth-child(3) {
    top: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 5px);
    left: calc(-1 * var(--planets) / 2);
  }
  &:nth-child(4) {
    left: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 5px);
    bottom: calc(-1 * var(--planets) / 2);
  }
`;

const scaleAnimation = keyframes`
  0% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const PlanetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border: 1px solid white; */
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  animation: ${scaleAnimation} 1s linear infinite alternate;
`;



const Home = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:599px)');

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <Box component={"main"} className="">
      <Toolbarstyle />
    <Container maxWidth="lg" sx={{marginTop: {xs: 8 ,sm: 6 , md:10}, marginBottom: {xs: 1 ,sm: 2 , md:1}} } >
      <div className='home-div-home' >

        <Grid container spacing={2} sx={{
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
        }}>

          <Grid item xs={12} md={9} pl={2} data-aos="flip-up">
              <Typography variant='h1'  className='h1-font-smallscreen' data-aos="zoom-in">Hi, I'm Sree Shankar
              <img src={handyhifi} alt='wave'  className='wave-imageone' />
              </Typography>

            <div className='home-div-content'>
              <Box>
                <Typography variant='h6' mt={2} textAlign={{ xs: "flex-start", md: "unset" }} pl={0.5}>
                I'm a Front-End Developer with 3+ years of experience specializing in React.js. I focus on creating exceptional
                 digital experiences that are fast, accessible, visually appealing, and responsive. 
                Despite being relatively new to the field, my passion for web development drives me 
                to continuously learn and take on new challenges.
                </Typography>
              </Box>
            </div>
            <div className='div-home-location'>
              <Stack direction={"row"} gap={1} alignItems={"center"} sx={{ display: { xs: "flex", md: "flex" }, justifyContent: { xs: "flex-start", md: "unset" } }}  >
                <FmdGoodOutlinedIcon width={7} height={10} sx={{color: theme?.palette?.mode  === "dark" && "#FFFFFF" }} />
                <Typography variant='h6'  >
                  Marthandam,Kanniyakumari, TN
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={2} alignItems={"center"} mt={1} ml={1} sx={{ display: { xs: "flex", md: "flex" }, justifyContent: { xs: "flex-start", md: "unset" } }}>
                <img src={online} alt="online" width={10} height={10} />
                <Typography variant='h6'  >
                  Available for new projects
                </Typography>
              </Stack>
            </div>

          </Grid>
          <Grid item xs={12} md={3} display={"flex"} justifyContent={{ xs: "center", md: "flex-end" }}  data-aos="zoom-in-up">
              {/* <img src={isMobile ? mobileavatar: avatarCircle} alt='avatarcircle' className='avatarcircle-img' />  */}
              <Containere>
      <HeroCircle>
        <InnerImage
          src={isMobile ? mobileavatar: avatarCircle} alt='avatarcircle' className='avatarcircle-img' 
        />
        <HeroRotate>
          <Planet>
            <PlanetImage src="data:image/png;base64,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" alt="" />
          </Planet>
          <Planet>
            <PlanetImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAAAq1BMVEX///9DW6lHZ7Dr6+sBAQEzT6TKz+NFYaw/WKj8/Pw4U6Y1W6tGZK/z8u/w7+3f5PDN0d9md7WosM0KCgqao8h6enri4uKbm5tthb47X6y2wNuCgoKms9XY2NhXV1f19vctS6Pr7fVXbLF7ir9MTEyVocvV2up+ksWwuNfFyuHg5fGhqstQbrTd3+ZUabBrfLhubm6qqqq9vb1OTk4eQp+KlsJ2hb67wdayudIcIAw0AAAHiUlEQVR4nO2cf1/iOBCHi1xoCD8El1VhuaXAAiIqt3eL+v5f2RWhpcmkaUNvM8Gb58+usn0+Kek3kzFBQBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDE56KpUPqS9/wh8yO2UC79FQS3yqU77Lsug3LP36HZVzLzDDK7eLPTDPLj65Gfqdn35NLf2HddhqPG3ZGfqdm32z8P3KZmd8crf9ax77oM6ROX8rlmfZPZZX/PyIzMfEBj9uP7kfTf6sqlCzJLid9nwSRJ9F9S6+RK/XLNPm8GIbML4H9j9s/nMfsmc7c3+5LlYCZfuggzgiAIgrggpg03TJ2bNX4xF/xqODe7ZjUXsGvnZtPIiVnk/mkMHJm5Fwu4EzOOYDZzocZnCGZbJ2ZbBLO5E7M5gtlCWN9n2C7N8TfEAsFsfIbZVVlSszGC2ciJ2QjBrGEfQsqbhcffYO7D1Vnx6gwz9+EqjlcuzDDCVTD5nd+zxExMEMwCazELs/RXMMSCF+tXtbUZf0Ex6zsw66OY2ccrezOMcHVOvLI2QwlXunhVVNQQrQISMdRwpYtXvQKW1wUMVTOMcKWJV6zerZvoFr2cJi3FDCVcBcFSrYSwZ6NYvV5kdp2YpeFq6cREBVSvWM88ZoVmS9UMJVwFQVM1E28VzdZD1QwlXAWB+j0TNxXNHhKz9Clw4gEJlVe1GFQ0GyhmPHTiAVHjldhVNFuEihlOuILxis871czu216EqyDYqWb9imZPamzcOfGAbNQQElY0AxFk48QDAuKVqGimRhCkcBW/fmC86hgpMJuCcLV2IwJYqma8b2Z7rzLIft6jJ+FKtznIzQzVGvdQWn/5Eq7iaG5blwMrz6G0/lqDMUMKV0HTUkxjJk0RIzVc1dD+SNK2egXMWtL6a6yGK5zK1R7b6hU0k4rbC9UMY8PzwGtlM2mKmKvh6hVLDMQrezPpi7RVzARWuNLEK1uztvRxT6oZVriKV4pVzZ6yn9ZMfROzBywxGK8szdr32U+DlSuscKWJV7Zmq+ynTb0JV3HQA2ZcmGgNZVrmcMUescSCiRoc+e7GxMNIQRqUhjexMYBdZeyt0zVgjoEgXEVOHPSApae5Lmc2U8NVTTiy0KF2lYlFBTMQrvBiI4xXfGesF5jNVv6EqzheKY8jf61g5lG4CoKBajarYKbW5MTA+OO/FxivKpiByhVeuNLEq+h8s6ZH4UoTr6Lbs81guMLZ8DzwaLftaTSDG54Y3WQJIF6Ztz2NZjBcYVWu9jRBCDHGK+OtgnAlUI/3UjcH+XxgYDOWkR43ULnC2hY8AJr2jcsYZRUjpKgPNjzxKld77Jr2lZVnS1p/gXCF0aqfuR2rSohqJq2/wIbnKu8/dYIar+zMpI8C4QqnmyzBrnql1kGkj0ouehGu4qnaqsajmEmdAxNPuskS4OZgNl5129xg1pY6B/wKV3EkMsarTt9kFkrrLxCuIsxwpWnaZ72s2dxkNpSK2yBcMcTKVaCNV5ng2NkZzaQvEugmQ9vwPALM3jNmXeWlIJu1pPUX6CbDrFztUbc9xSZrdmM0k8IVqFzhxkYYr6Susu6b0Uz6Iu186SZLb0it8WS7yro9ZjKTvkhgwxOrmyxBbdrn22wl5Nlk1pbWX/0r2Qw5XMGmff6SXVQ/RzzPrD0sCFc4rfonYNO+VC54n9eY4MAsHLaeFnLG8KabLAE07UdS5aPb6fY2W3G0Cw+D1bpajdTXMOwmww1XurocqF51O/W3xQtjnIdXw9bw/kG34Qe6ySK8Dc8DmqZ91Wwv1+08v89DsR3n3a8/3WQJoGmfNXLqcvHQGW4WtuqjH0yvTiBSvFIwJEEQrjAOmZABm4Obs8w2Pm0LHgDxyrDtaTDzLlxpmvZX+dsxBjNvWvVPaOJV7qAZzNRwhdaqfwL8TWS46dVz5HLNluNkyLwJV7p4JVht/v7c6UI7rdl0tGq3kvnDn3CVc+QEF9Fs0QBDB8wmjcVTa5iMlxSuMDc8D+QdOcEF49ub507WTjZbjrdDWevKi26yBNORE/HQ1XZvpwfzZBY/gtBKMsMOV8VHTnAh+oPeYegOZk3wCGrMcA6ZkCneZ4ofTBHPKd1uHAWvx/et03wBSX8HWyuA2565drPFaHWVO1iKGc7xGTKlm/a54GarjBnyhucBiyMnSpzIkJhhdpMlWBw5YWGGXbnaY9G0X2yWRhDMbrIEixO9zGbt8PSTyBueByxO9DKYZbVqXoQrq6b9HDPF6sMMP1xZHZiqMdNY7YnwWvVPgK6y8mY5WjXkbrKUqPQLLSxlFcN/YUt9MJqLTO2+lJnRSjD2ir/uPLIczBgrlguLB4uxl4UPs0eG6XpeiwqGLiwYrKi2WuOvy3Rcb/r7jYnCsdNZMdYf43aAFDBp7F6Khk4zWC+LhhezYQHTh9eo5Jyyt2JzsJvmMx9zSlGijOeL/saz+aIM0/WO5z+Y8WDx3foSHkE9j+Ot5mW3r9i9arc+L4pJYyHNKZxFs8ESfd/vP2I6mn88mB+vrIuaL8qwjF92W79fWQRBEARBEARBEARBEARBEARBEARBEARBEARBECX4F2jAzpkz0b8OAAAAAElFTkSuQmCC" alt="" />
          </Planet>
          <Planet>
            <PlanetImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAA1VBMVEX9zQD///8oKCgpKSkZGRkYGBghISEcHBwlJSX+3nT9ywD9xwD//fX+1mD9yQAWFhb/0wD/+ev7+/f/1wAAABn8zSX88c/357cAACv88tQYHSkAAB0cHSEAACAAACglJinwyAYdISlGORZMQyT+78L92mv/9+O4mBdYSiRsWyPCoBPWrgntwQWghRiDbxhlUxRYSBYPGCmoiA8GDRkADSWWfBd4ZiAACyrkugxtWxL956MzMCb+4ZFhUyQzKRz90Dr+3oH80kp6YxJCOR88NiYoIRv+7LIEnu1NAAAPaklEQVR4nL1cZ2OqOhjmMITSKlrRVqS11nWqXRRtPXbp7fj/P+lmAQkQEi31/YIYIY8Z70ryKBXHcCqaplmOYZiqplUMw0D34GqCq6qDDxb4YBr4hxVSYIECB/7Ad133efD36vZmMp3NZteKcg0u08nN7d395XM/8HxHN+gq4Cv16JUWVaA5pCCqE4DDTyoVA7xDVVXL0XVTVbWKrusVTQUwwb0GCsC9boEC09AdVKDjAnh1esFp8PHfwxSAqzebdSAKFPgB3gPA04fHD/A/fFgFqApUoapm8krDogucqABeQV0IHKyLhmkgmIYcTPCDELTi43R5oUTocgQWXSyn/9TA6/d+ChM1vE46HcLUCEzYQ+gRDb0TdTqCqfXnX3eLGWwxCQEtO1tcfblh9pUWrgs0Fez0qIBcY3BKxbKsimma8Ao/MPfU90xBJTwb3MwUfiPmNasyexicB9xXgqsZFWR+oFRQ28JZAfsTDmlViwaACr7XVdLhqBPQZOh7z/9mWyCksM4e30CTgjeT6aOSKYvqNgxwVeO6okEGwWGYyaxgxwrsHTKYUAEcEf7T38VSrq9zcDaXi7/dnoaGH3xlMmVhXRquy7FUMi5VMhcUNNwcx8E6xiEKAt+r4KrDMWM6uAD80K1MrnfESJBeT9TzHv1KrBANxzFgnbBApQsgGKUCBQ4BztWir37wMdlmQHKA1icfgZ9Xl8kDo2D1ribq3SFjxcHjFal3Mpjcr5vr5k9BQmle3zwH4JVONBcMB84Fot5RXQaeCwTcFuo9dP9dl4ERy/XVvL+N3kyMpZO0JjFgkbEE3/fO7maltGQkzdlr14mNpcMYSzMxlg7Rm6DzK1iiayV1D6/efHHx40HJSv1iMffI8Kuw14oVXckXRG/qRG/qid5E41I3kJLT3cvdFKUA6Gzg+bpuRAopX2+C78V6E1574a3yCygBTuU2dBK9aRTpTTShslZIi6wQMN+T38CIZeKGRmRsiqxQgc7E48MbLEudO6w0l4OQq6/jL/JmenIPZzpQQ7/S4ZHUrx/PSV1gpjt4pjuZmS7Qm+e3v4kRy63r5OhNlaM3c4IM1bv51abEUr8JJfRmwbg8m+wBJcA5Pfcz45EeqLTeRAqJdDi677mTX5w8tDQnAdAuiSNHG0pDpDf96Z5QwvYEPmNWb2qM3syzQqp6up8eJzgnroFhGjFM2gqploriEHBFsU90tbybvbUllOZN6JO6TYuAisEpjJOsUk6zu9hjW0KpLwIYLaB0Qtq15+rN+d1+QUK5ckXpBI1KJ8ASb5B+x+agdNmk6xi4VJ4hjmSR9x6NRx3Fx2pFh/f9z7TjZr/8KV2+bbaO+uwtROPSjMalTsApsMNjhWSiPwMGQJiZ5PaofJjrFEygljwrDrbh6FNxroqjN91FZpLb1fJhjtIwlebiiVJIab3JwtSC+5zx3SofZmZsAnntZtU70puk01Xc6eC+95wXUdjlw2xlawHD08EjL9XpupncWbDUdB/y9Pph+TBzalGaD/M4s5hAzclvhpe51qd8mMeHuTgHXloh5cF0wmWu+am1y4Z5lAuzvuz3CtOwOjKWPCNZPsxOLbciYDRz0rBoCJjxFPI/lrkPK7VV2TDb+TCV5aVPQOFJY7KOHFJI5zxP2C4d5ooDszl5EqUTwk+uX3SwL5hK/bOfUe+MsTTcKRdm6WZoxKupPn2Ksx4qCnEVdjnAu7rgPatsyoZZ5VZ1cReyaxUKk3ZV+wVxxea4ZJh5tpI05ySM0rCRI0e7xf2/3CcBzKO9wVSU+zCdhqWCDO40h/I+5td43O4QwfedNk+S/3r0zq+r+eCmggx6pahb8P+U9w4f5rjWwjJCMI5HLY7YjeSZApiK8uTnLF/hAHiedTMpaQ35MBuR3atimNzZYSet2clxkGJpLs50jt7s+bOi/6eUAbOVwBwWwVRmnpNJw+LWLNJGUArM0E4wCyu7+BdSmSI61RU+FEfmZcCsJlptVVhZ/cGj1guoxKHzlu/BRVIUW8rCtEfSMJfPvbw0rBHeFydjSoFJveMlE7Ax0nzt56Zh82MLqoo13wzJwqS9QRHMh6d0GhbJuWCpzx7xzZD02PyOHznOROkpuT5PsJEFFzCZ+gNBAs6uNraGWeMrsaNslM5K8zKMnY1Eb86FGbgCa8mFecJ/ZCOAWV+4ab0JAM+nApRKq1yYhbYSytTNLl/5z5wYiBK+Ud8B5rjQCEFZvvmZ5av+vXCx3C4VZkfYKtevXkZverfC5HDBfPgVmMptQOlNbDol1qnKhTnkBWyx1G8CNg0LhoDPj9VimHwztAPMEzHMqZ/EQsRJ/hLPIHtdJkyBEYKyVHvxBh+sN5038VMFmdgdYIqMEKzwrcdkiw3d+ZBYXnkvE2ZRwEak/tlj9KZphncya1VlwhRqd2Aur4I4FsKZzuBWAmatTJgSrdK8ddk0rDaXWfn7Aczjo0aj/X1AJR+FEx2uD7psGlZ7kllGPeS6SEUeUqMzPFmtqy2lVqttCfPBTaUTTsVqE8Dk+h5cf3O0rm7eW4pto3lNmdtGbqqYlfrUjY0l3ofblYHJH2mSbrGd+P9jKZinGrsuVJAwLBEmNbjFRgiuvmCYiVvsymwu4wdtskFG8sS3DMxl0po4DevK7HnkW0tJmNRKnYQRAq7caWyFsHUXxWtYuMurkjBH28I8i10PrJBOi1MJEYifwbSp9D0/VZxIfebqTBpWO5Xa+MjNxMrBpKN0KZjTnfTmDjDt2uGhUrUzMI8kPA9Gb2LXQ0pvKhuefs/ABOq89b6pjlZD8MhxBLO9LczTVBpWlJnBwk0Yp2Gu16uTYSeyrZ0IZvJ4caqYCMzPsKcIXKlNRy3eumUK5p8jJt00jGZ10hkdKZg3c+YUgWG4Mo4cP2GchslKnCJMXJe2MEqHMG8D1JrJKYLgSgrmdw4IMcwXUviewCxOFUcw7wLqFAGc8z3+WiUl9m4w1+RpSlF8y8Csf6aXr3rPMlaBuwpcDPOAPH2QjNj0FqT86t4cNg2rqpo4AC7wPQphHpM1VDqPu5KBuVST1iQikU6gKuqsh2MaUCHMBtGRtnyqGEl96lNpWLyfOJTZRGxHKNpKTam+DOMpUQhzTGDWtkgVI5g3QbRlPE7DhjI7shOYQJ8AQ/NeXTXEMOPltMSrPqrKdPptqCXpBNKarzKuXKuRwERSO1QOTjpHfJiNzkls4BOteyRKFUO5vve02ApFY1MiDZsDU4HeRWsU9yELszF8qSq1qIyyYQ0Z7b58psZmtC7kCpPaUMZZmAhq9CGBeTRebVoK3WiUR9CQqWs6j/d7UDBlNulGESzX1hGY4+916zDdrxtqkVpmBi3mFTYNCxcMOHvOWIkysQKYxwd2Dg4KZkcCZnPQpzafxVtSuhJzKNIpbd4Pirx3KkQZysygc3pLSnzO8knC5Yw09HiUzIxdYEqEv80Hlz5nGS/7918lYEYh8NF4uLZzkHJh2jXaveLulKJg3odGatMuOs3SexZHlzaztWu8Gm0UFmouTFvZjFZMmuxA2On15ZuTPn2Fh4AnWPaHkt66Ox6uRgo1pzMw7UMFBETpVJ5ovRIu+4fMlpRo37uhh/8utoYJMR21160aaVUGJgjbWuv2Uc76tli7X1x5mpajNx3dCYu3pKCas1Ui6azWGzirEpigp9crXognhjnzexxSAr1buMEHCT9h/KfR/q7WNgTm4WbV5q9r/xH2eXMxZzftJrs5TfNM+CdrBXVDaaMePm7z8g5ExBO9S/a/miT3ntAhaGpXqDprBTvQ5GUsgtmcPMUbdrPb88O8ffkszFJ2GAthKn/7qe35zOmr7FmMNEz+CsoWIlpWrU/6avr0Fb0FOry7KH5BOTuMRbYSaKN4a34Fb4GmzxRY6pMocivlPI4grqxPu4JTBH1RWoG/CryFvBTXUf8MyfZ87imCM8HRylL2a68Lq2hOunoGJtvpqn9ZHBONSthhfMzdo41k+eFnj47gM4I6ObioVwJBsLFBmdXdBTgrxQnt+sK1KFDkAGOazKXXF/hzIDwfrXZE2viGrl/hBKovwxQpQS6Zi+aJdqEpyD07YNMzQoGOtJIJ47LSvAwNipSATiewZC6BVILbtlujF5HtjjG2Xw5axa0YoQSxRR6Zi0msOzrAqMKh4L9J0k7AZYDqt8AZARhPqu8tRQYjXAp67uEDjJYVHbDlsUvNX6VeiaVWe38ZjnnzH0yY95rE8mQs94FGnVrln76C7FJPYseTQWpvDl5yfJLOy8HG3gYjcDO7agEJFtkQHY9cT2qZiBG7VR02ktRMYziKIw9pqU9cmsQrIQ7jEGZ4ssOTkZpSRUoVqcb8OL4Y5ezTzycmiBOHhBqOUNXobuaospTYMNYVqkauDDxIP2I4DL1DEQmW3r3aqaIfyd08S+bC6E0jRYIF7kVGs3QBRhKTYBlEb1I8KHzCDD/cNymBl0/kQpav6GP08E/EjDTufikeTvNIsHLSCUaKzMUxtldLu0pz2reKSbBA69GtSelR39tXezYnc0guBylIcGtmSAmKxD/fT3vWp2eFOHh6k5AMGY7UqtaPUd54KiYP1LbUmxEJltPdB9HQKY88UMucImBIsGBrYhIs8+nXaZv+nWkMFSPhaIyo7uRIsKxgryRYPJvOI3OJ6Bh1I3R/k1Js3o/r0iIyF9NxDDkyF5o80PF+j6DN6yVzQSvUm3lkLjF1E+Y4DAa/Q3d3iQ+xODFMfAV6U88jc2FiIXyPyIfUiPinH/wGeWA3jLmEKlaCQWXJhuJ0AsrIWYTXA/HPwKuF+ADQCpxuOk+vZVMx3s17FuEewHWbKq5Lt9SkoJImJUjYpRK9GXPDGlZ/flUmseU/lz40TZEH5rNLCTgOaW7Y4Lk8mtAvV44blp9O4HPD+u5lOaSrn55vbMcNKyIPhNTZGCos6J1bP6ewrbiOEb0yQxOqagnZdi55oJCsGg0i0KI3PyMEfgo5ZNVFejML0+DBJEM6dL8ed6ZXfvb6aU5tjQ+Tm4Zl7glzCkqJ0qw6vne+E1n1ZdftpV4VXWNa0nRdRG/mcGjT9yZ9pQrCM+tqO+rvu695X+W+slJYkNKbDKc2ozcTTm3MQGmYvb7nfUkSqT++uW7ogwlpER2nUaSlEac2pTdFZC5CTu0Ipo4Hk+u6H480LX3CSx/R0v/3EZwGvpGQ2eskm7W13swGGfjeyCoItI6oRqz8oHKj7wX9t8v7uyzJ/9XfwRtizk+qQAT/Kk2xGfF9ZoIMgwoy/geZ4qJeLwrpCwAAAABJRU5ErkJggg==" alt="" />
          </Planet>
          <Planet>
            <PlanetImage src="data:image/png;base64,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" alt="" />
          </Planet>

       
          
        </HeroRotate>
      </HeroCircle>
    </Containere>
          </Grid>

        </Grid>

      </div>
     
    </Container>
    </Box>
  )
}

export default Home