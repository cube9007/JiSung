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
        choiji1995@naver.com
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
            다양한 산업군을 경험하고, 많은 후보자 분들을 만나왔습니다.<br/>
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
              <div> <span>120</span>건 이상</div>
            </div>
            <p/>
            <div>
              <p> 인터뷰 진행 </p>
              <div> <span>40</span>건 이상</div>
            </div>
            <p/>
            <div>
              <p> 매칭 건수 </p>
              <div> <span>10</span>건</div>
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
                • &nbsp; 채용의뢰 직무 분석 <br/>
                • &nbsp; 공고 작성 및 인재 서치 <br/>
                • &nbsp; 포지션 제안 및 추천서 작성
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; (추천 120건 이상, 인터뷰 진행 40건 이상)
              </div>
            </div>
            <div className='section6-content-stitle'>
              <p>주요 업무 성과 (Success)</p>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 유명 커피 프랜차이즈 POS 담당 파트장 채용성사 (5,000)<br/>
                &nbsp;  &nbsp; (POS 개발 / 제작 간에 이슈 전달 담당자 물색)<br/>
                &nbsp;  &nbsp; (신세계 계열사 POS 개발 관여자 서칭하여 컨택→추천)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 하남 소프트웨어 개발사 연구원 채용성사 (4,200)<br/>
                &nbsp;  &nbsp; (영상처리 C++ 개발자 물색)<br/>
                &nbsp;  &nbsp; (구리 소재 소규모 SW연구사 재직자 컨택하여 추천)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 웹 미디어 플랫폼 웹소설 PD 채용성사 (3,200)<br/>
                &nbsp; &nbsp; (웹소설 작가 관리 및 작품 기획자 물색)<br/>
                &nbsp; &nbsp; (경쟁사 재직자 컨택하여 추천)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 중견 아트 커뮤니티 웹디자이너 채용성사 (5,300)<br/>
                &nbsp; &nbsp; (수준급의 포트폴리오 보유한 구직자 커피챗 진행하여 추천)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 코스닥 상장 중견기업 전략기획 임원급 채용성사 (12,000)<br/>
                &nbsp; &nbsp; (기존 진행하던 중견기업 파이널 인터뷰 불합격자에게 연락하여 기업 소개 및 1-2-3차 인터뷰 전체 지원 및 입사 핸들링)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 광고대행사 그래픽디자이너 채용성사 (3,800)<br/>
                &nbsp; &nbsp; (홍보영상 인서트 제작, 3D 디자인 인력 물색)<br/>
                &nbsp; &nbsp; (후보자 포트폴리오 및 이력서 기업 JD에 맞게 첨삭, 추천)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 중견 독서 플랫폼 프론트앤드(PHP) 개발자 채용성사 (5,500)<br/>
                &nbsp; &nbsp; (일본 프로야구단 웹사이트 개발자 컨택(사람인)→추천)<br/>
                &nbsp; &nbsp; (면접 예상질문 90% 적중하여 기업에 좋은 인상 남김)<br/>
                &nbsp; &nbsp; (4,200→5,500 연봉 인상 협의 조율)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 광고대행사 영상기획자 채용성사 (3,500)<br/>
                &nbsp; &nbsp; (제안 및 입찰 포트폴리오 보유한 구직자 컨택→추천)<br/>
                &nbsp; &nbsp; (동일 기업 2번째 채용성사 건으로 신규 의뢰 시 첫번째로 포지션 오픈 받음)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 중견 아트 커뮤니티 웹 개발 (TypeScript) 채용 성서 (4,000)<br/>
                &nbsp; &nbsp; (TypeScript 사용가능 . 주도적 개발 프로젝트 경험 보유자 컨택(사람인)→추천)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 광고대행사 그래픽 디자이너 채용성사 (4,200)<br/>
                &nbsp; &nbsp; (고객사와 Fit한 포트폴리오 보유 중인 구직자 컨택 (내부 DB))<br/>
                &nbsp; &nbsp; (3,700 → 4,200 연봉 인상 협의 조율)
              </div>
            </div>
            <div className='section6-content-stitle'>
              <p>주요 업무 성과 : BackOut (입사취소, 중도포기)</p>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 세무/노무 컨설팅 그룹 세무사무원 (4,000)<br/>
                &nbsp; &nbsp; (- 기업 경영지원팀, 세무사무소 경력자 서칭하여 컨택→추천)<br/>
                &nbsp; &nbsp; (최종합격 후 기업 규모 영세하여 후보자 입사취소)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 프리미엄 반려견 생활용품 스타트업 온라인MD (4,300)<br/>
                &nbsp; &nbsp; (동종업계 재직자 컨택하여 설득 후 추천)<br/>
                &nbsp; &nbsp; (고객사 담당자와 적극적인 소통하여 후보자 궁금증 즉각 해결)<br/>
                &nbsp; &nbsp; (최종합격 후 스타트업 불안정성으로 후보자 입사취소)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 대전 4차산업 설비 SW개발사 웹/플랫폼 개발자 (4,200)<br/>
                &nbsp; &nbsp; (세종 지역 개발자 물색하여 컨택→추천)<br/>
                &nbsp; &nbsp; (최종합격 후 처우 불만족 및 프리랜서 건 의뢰로 입사취소)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 중견 아트커뮤니티 웹서비스 기획자 (4,400)<br/>
                &nbsp; &nbsp; (에듀윌 웹서비스 기획자, 반응형 웹 경력자 대리급 물색하여 컨택→추천)<br/>
                &nbsp; &nbsp; (1,2차 면접 합격 후 파이널 인터뷰 앞두고 타사 합격하여 입사취소)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; IR컨설팅사 컨설턴트 중간관리급 (6,000)<br/>
                &nbsp; &nbsp; (금융/증권사 경험의 IPO 경력자 물색)<br/>
                &nbsp; &nbsp; (개인 파이낸스 컨설팅 운영한 후보자 컨택→추천)<br/>
                &nbsp; &nbsp; (최종합격 후 판교의 증권사에서 7,000 제시하여 타사 입사)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 웹 미디어 플랫폼 웹툰 PD (3,200) <br/>
                &nbsp; &nbsp; (신입 포지션으로 자체 지원자 및 포트폴리오 보유자 물색)<br/>
                &nbsp; &nbsp; (서울대학교 졸업, 웹툰PD 구직자 컨택→추천)<br/>
                &nbsp; &nbsp; (최종합격 후 더 좋은 조건으로 타사 입사)
              </div>
              
            </div>
          </div>
          
          
          <div className='section6-content-item'>
            <div className='section6-content-title'>
              <p>2021. 08 ~ 2022. 05</p>
              <h1>사당 청소년 문화의 집</h1>
            </div>
            <div className='section6-content-stitle'>
              <p>주요 업무</p>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 청소년사업 기획 및 운영, 기관 교육문화 강좌 관리, 외부 교강사 초빙
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 기관 내 교육문화 강좌 전반적 운영 및 관리<br/>
                &nbsp; &nbsp; (코로나19 로 인해 잠정 중단되었던 교육문화 강좌를 재운영하여 예체능 분야 6개 강좌 교강사 초빙 및 기관 내부강사로 영입)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 지역구 복지 프로그램 기획 및 운영<br/>
                &nbsp; &nbsp; (2021년 연말 성탄절 행사에 불우한 청소년, 노인 가정에 방한용품 및 식량 지원 활동 총괄)<br/>
                &nbsp; &nbsp; (지역구 내 복지기관 네트워크 적극 이용하여 지역구 커뮤니티 활성화 및 지역주민 생활수준 향상에 기여함)
              </div>
              <div
                className='section6-content-item-list'
              >
                • &nbsp; 청소년 농구대회 기획 및 운영 <br/>
                &nbsp; &nbsp; (청소년 농구대회를 기획하여 청소년이 한데 뭉치고 성장하는 자리를 마련하고 지역발전에 기여함)
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
          <span>고용주</span>도<br/>
          <span>채용인</span>도<br/>
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
        <a href='https://open.kakao.com/o/sClwwQzf'>With <span>Ji-Sung</span></a>
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
