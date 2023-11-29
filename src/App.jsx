import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion"
import './assets/css/index.scss'

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);
  const updateScreen = () => {
    setScreenHeight(window.innerHeight)
  }
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  React.useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
      window.addEventListener('resize', updateScreen);
  });
  return (
    <div className={`header ${scrollPosition > screenHeight ? 'scrolled' : ''}`}>
      <a href='' className='header-left'>
        <span/>
        <p>JiSung</p>
      </a>
      <div className='header-right'>
        {/* choiji1995@naver.com */}
        with.jisunghr@gmail.com
      </div>
    </div>
  )
}
const MainBanner = () => {
  return (
    <div className='main-banner'>
      <div className='main-banner-title'>
        <div className='main-banner-title-top'>
          <motion.div className='main-banner-title-top-1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            지성 있는 분들은!
          </motion.div>
          <motion.div 
            className='main-banner-title-top-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5}}
          >
            <span>지성</span>과 함께하세요!
          </motion.div>
        </div>
        <motion.div 
          className='main-banner-title-bot'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1}}
        >
          상세하고 신속한 피드백 <br/>
          고객 친화적 헤드헌터 최지성
        </motion.div>
      </div>
      <div className='main-banner-arrow'/>
    </div>
  )
}

const Section1 = () => {
  return (
    <div className='section1-wrap'>
      <div className='section1'>
        <div className='section1-content'>
          <div className='section1-content-top'>
            <motion.div
              className='section1-content-top1'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              정확한 인력 매칭
            </motion.div>
            <motion.div
              className='section1-content-top2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              기업과 후보자 <br/>
              모두가 Win-Win!
            </motion.div>
          </div>
          <motion.div
            className='section1-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            기업에겐 원하는 인재상 <br/>
            후보자에겐 역량을 펼칠 수 있는 기업 <br/>
            조화롭게 매칭되는 선순환 구조를 지향합니다. <br/>
            서로에게 좋은 경험이 될 수 있는 인터뷰 기회를 주선하겠습니다.
          </motion.div>
        </div>
        <motion.div 
          className='section1-img'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='section2-wrap'>
      <div className='section2'>
        <div className='section2-content'>
          <div className='section2-content-top'>
            <motion.div
              className='section2-content-top1'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              커리어패스를 함께 할 조력자
            </motion.div>
            <motion.div
              className='section2-content-top2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              장점은 부각!<b> 단점은 보완!</b>
            </motion.div>
          </div>
          <motion.div
            className='section2-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            경력직, 신입 모두 부각할 장점과 보완할 단점이 있다고 생각합니다. <br/>
            후보자 님들의 커리어패스를 직무적합성에 맞게,<br/>
            검토하고 보완해드리겠습니다.
          </motion.div>
        </div>
        <motion.div 
          className='section2-img'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  )
}

const Section3 = () => {
  return (
    <div className='section3-wrap'>
      <div className='section3'>
        <div className='section3-content'>
          <div className='section3-content-top'>
            <motion.div
              className='section3-content-top1'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              헤드헌팅 공식!
            </motion.div>
            <motion.div
              className='section3-content-top2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              신속성 + 정확성 + 친절성 <b>= </b> <b> 최지성</b>
            </motion.div>
          </div>
        </div>
        <motion.div 
          className='section3-img'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className='section3-graph'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <p>신속성</p>
            <div><div/></div>
            <span>90%</span>
          </div>
          <div>
            <p>정확성</p>
            <div><div/></div>
            <span>85%</span>
          </div>
          <div>
            <p>친절성</p>
            <div><div/></div>
            <span>95%</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const Section4 = () => {
  return (
    <div className='section4-wrap'>
      <div className='section4'>
        <div className='section4-img-wrap'>
          <motion.div 
            className='section4-img'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className='section4-content'>
          <div className='section4-content-top'>
            <motion.div
              className='section4-content-top1'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              about <span>JiSung</span>
            </motion.div>
            <motion.div
              className='section4-content-top2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              마음을 다하는 헤드헌터 <br/>
              <span>최지성</span>입니다.
            </motion.div>
          </div>
          <motion.div
            className='section4-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            좋은 사람, 좋은 인연을 넓혀가고자 하는 헤드헌터입니다.<br/>
            다양한 산업군을 경험하고, 많은 후보자 분들을 만나고 있습니다.<br/>
            <br/>
            청소년 상담을 전공하였고, 사람 자체에 대한 관심이 많습니다.<br/>
            사람을 만나고, 사람을 이어주는 일에 큰 보람을 느끼며,<br/>
            그 일이 전문적인 인력을 이어주는 것이라면 사회에 공헌하는 의미가 더 큰 것 같습니다.<br/>
            <br/>
            사람과의 관계는 큰 행복을 주기도 하지만, 때때로 어렵기도 합니다.<br/>
            누군가에겐 쉽고 재밌는 일이, 누군가에겐 어려움이 될 수도 있습니다.<br/>
            저는 그런 어려움을 겪는 기업고객과 후보자의 입장이 되어,<br/>
            마음을 다하는 헤드헌팅을 하고 싶습니다.
          </motion.div>
        </div>
        
      </div>
    </div>
  )
}

const Section5 = () => {
  return (
    <div className='section5-wrap'>
      <div className='section5'>
        <div className='section5-content'>
          <motion.div
            className='section5-content-top'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <p> 누적 추천수 </p>
              <div> <span>200</span>건 이상</div>
            </div>
            <p/>
            <div>
              <p> 인터뷰 진행 </p>
              <div> <span>70</span>건 이상</div>
            </div>
            <p/>
            <div>
              <p> 매칭 건수 </p>
              <div> <span>13</span>건</div>
            </div>
          </motion.div>
            
          <motion.div
            className='section5-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            월 평균 1회 이상 <span>Success</span> <br/>
            지속적인 <span>인터뷰 및 사후관리</span>
          </motion.div>
        </div>
        
      </div>
    </div>
  )
}

const Section6 = () => {
  return (
    <div className='section6-wrap'>
      <div className='section6'>
        <div className='section6-title'>
          경력
        </div>
        <div className='section6-line'></div>
        <div className='section6-content'>
          <div className='section6-content-item'>
            <div className='section6-content-title'>
              <p>2022.12 ~ 재직 중</p>
              <h1>탑 앤 스카우트</h1>
            </div>
            <div className='section6-content-stitle'>
              <p>헤드헌터 업무 전반</p>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 고객사 채용의 오더 수주 <br/>
                • &nbsp; 고객사 기업 분석 <br/>
                • &nbsp; 채용의뢰 직무 분석 <br/>
                • &nbsp; 적격한 인재 서치 <br/>
                • &nbsp; 포지션 제안 및 사전 인터뷰 <br/>
                • &nbsp; 추천서 작성 <br/>
                • &nbsp; 면접 및 입사 전체 과정 핸들링 <br/>
                • &nbsp; IT / B2B / Finance / Marketing / Engineer 등 전 산업군 진행
              </div>
            </div>
            <div className='section6-content-stitle'>
              <p>채용 성사 내역 (Success)</p>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 소프트웨어 개발사(C++, MFC) 연구원 (사원/팀원) / 2023.11
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 소프트웨어 개발사(C++, MFC) 연구원 (사원/팀원) / 2023.09
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 광고대행사 영상기획자 (과장/팀장) / 2023.09
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 소프트웨어 개발사 회계 (차장/팀장) / 2023.09
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 중견 아트 커뮤니티 웹(TypeScript) 개발자 (사원/팀원) / 2023.08
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 광고대행사 영상기획자 (대리/팀원) / 2023.07
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 중견 독서 플랫폼 프론트엔드(PHP) 개발자 (대리/팀원) / 2023.06
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 광고대행사 그래픽 디자이너 (대리/팀원) / 2023.05
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 코스닥 상장 중견제조업 전략기획 (이사) / 2023.05
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 중견 아트 커뮤니티 웹 디자이너 (과장/팀장) / 2023.04
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 웹 미디어 플랫폼 웹소설 PD (사원/팀원) / 2023.03 
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 소프트웨어 개발사(C++, MFC) 연구원 (대리/팀원) / 2023.02
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 유명 커피 프랜차이즈 POS 담당 파트장 (과장/팀장) / 2023.01
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className='section6'>
        <div className='section6-title'>
          자격증
        </div>
        <div className='section6-line'></div>
        <div className='section6-certificate'>
          <div> 직업상담사 2급 <span>한국산업인력공단</span></div>
          <div> 청소년 상담사 3급 <span>여성가족부</span></div>
          <div> 청소년지도사 2급 <span>여성가족부</span></div>
          <div> 1종 보통 운전면허 <span>경찰청(운전면허 시험관리단)</span></div>
          <div> 농구심판 3급 <span>대한민국 농구협회</span></div>
          <div> 농구경기원 <span>대한민국 농구협회</span></div>
        </div>
      </div>
    </div>
  )
}

const Section7 = () => {
  return (
    <div className='section7-wrap'>
      <motion.div 
        className='section7'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        꼭 필요했던 인력 <br/>
        놓치지 마세요
      </motion.div>
    </div>
  )
}

const Section8 = () => {
  return (
    <div className='section8-wrap'>
      <div className='section8'>
        <motion.div 
          className='section8-title'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span>고객사</span>도<br/>
          <span>후보자</span>도<br/>
          <b>서로</b>에게 <b>딱 맞게</b>
        </motion.div>
        <motion.div className='section8-img'/>
      </div>
    </div>
  )
}

const Section9 = () => {
  return (
    <div className='section9-wrap'>
      <div className='section9'>
        <p>링크를 클릭하면 오픈채팅으로 이동합니다.</p>
        <a href='https://open.kakao.com/o/sClwwQzf'>with <span>Jisung</span></a>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='footer'>
      <a href='' className='footer-left'>
        <div/>
        JiSung
      </a>
      <div className='footer-right'>
        Tel :  010-2598-8843 <br/>
        Email : choiji1995@naver.com<br/>
        Copyright 2023. ChoiJiSung. All rights reserved.
      </div>
    </div>
  )
}
const Main = () => {
  return (
    <div className='main'>
      <Header />
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
