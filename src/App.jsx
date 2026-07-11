import { useEffect, useState } from 'react'
import ClickSpark from './ClickSpark'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const heroTags = [
  'soft strategy',
  'creative operator',
  'lifestyle archive',
  'digital nomad',
  'AI-powered creator',
  'global mindset',
]

const resumeFacts = [
  ['Location', 'Germany · Nordrhein-Westfalen'],
  ['Languages', '中文 / English / Deutsch'],
  ['Tools', 'AI 大模型工具 / Canva / Figma / PS / 剪映'],
  ['Focus', '内容增长 / 海外社媒 / Creator Marketing / AI Workflow'],
]

const works = [
  {
    no: '01',
    title: 'FreeLab 自由客实验室',
    duties: '公众号内容运营 / 活动文案 / 社区增长 / 付费长文策划',
    images: [asset('assets/optimized/ppt/ppt-media-16.jpg'), asset('assets/optimized/ppt/ppt-media-06.jpg')],
    copy:
      '围绕自由职业者、数字游民与社区活动，完成活动文案、周报、干货内容与付费长文策划，建立更稳定的内容发布与用户触达节奏。',
    resultLabel: '数据成果',
    result: '公众号涨粉提升 300%，日均阅读量 5k+，独立完成 30+ 篇干货内容。',
    focus: ['公众号内容策划', '活动文案撰写', '社区增长运营', '付费长文策划'],
    outputs: [
      { src: asset('assets/optimized/ppt/ppt-media-16.jpg'), label: '公众号主页' },
      { src: asset('assets/optimized/ppt/ppt-media-06.jpg'), label: '长文内容示例' },
      { src: asset('assets/optimized/ppt/ppt-media-07.jpg'), label: '干货内容合集' },
    ],
  },
  {
    no: '02',
    title: 'E-Talent Pte.Ltd. / 易特新景',
    duties: '海外品牌内容 / 公众号 / 小红书 / 内容模块搭建',
    images: [asset('assets/optimized/ppt/ppt-media-23.jpg'), asset('assets/optimized/e-talent-team-plog.jpg')],
    copy:
      '负责公众号与小红书内容策划、结构优化和发布节奏维护，结合海外行业语境做内容转译与品牌表达。',
    resultLabel: '工作重点',
    result: '内容模块搭建、选题拆解、数据复盘、海外语境转译与稳定交付。',
    focus: ['内容模块搭建', '选题拆解与结构优化', '海外语境转译', '稳定内容交付'],
    outputs: [
      { src: asset('assets/optimized/ppt/ppt-media-23.jpg'), label: '行业内容封面' },
      { src: asset('assets/optimized/e-talent-team-plog.jpg'), label: '全球团队 Plog' },
      { src: asset('assets/optimized/e-talent-malaysia-visa.jpg'), label: '马来西亚签证内容' },
    ],
  },
  {
    no: '03',
    title: '小米全球手机新品发布会',
    duties: '海外达人商务营销 / 德国市场 / KOL 建联 / 内容交付跟进',
    images: [asset('assets/optimized/ppt/ppt-media-19.jpg'), asset('assets/optimized/ppt/ppt-media-22.jpg')],
    copy:
      '参与德国区达人合作项目，完成达人筛选、触达、报价沟通、内容 brief 对齐和视频交付跟进。',
    resultLabel: '数据成果',
    result: '每周触达 / 建联达人 700+，单月推动约 3 万美金交易量，对接 20 位达人，跟进近 30 条视频交付。',
    focus: ['德国市场达人筛选', 'KOL 建联与报价沟通', '内容 brief 对齐', '视频交付跟进'],
    outputs: [
      { src: asset('assets/optimized/ppt/ppt-media-19.jpg'), label: '达人内容封面' },
      { src: asset('assets/optimized/ppt/ppt-media-22.jpg'), label: 'KOL 视频案例' },
      { src: asset('assets/optimized/xiaomi-kol-1-1m.jpg'), label: '1.1M 播放案例' },
    ],
  },
  {
    no: '04',
    title: '资阳国际数字游民社区',
    duties: '小红书矩阵 / Instagram 观察 / AI 工作流 / 内容 SOP',
    images: [asset('assets/optimized/ppt/ppt-media-01.jpg'), asset('assets/optimized/ppt/ppt-media-26.jpg')],
    copy:
      '主导账号选题规划与内容排期，结合海外趋势观察、AI 选题拆解和二创转译流程，提升多账号内容生产效率。',
    resultLabel: '数据成果',
    result: '最高单篇获得 780+ 点赞、640+ 收藏，评论及私信累计 600+，有效提升曝光、互动与私域咨询量。',
    focus: ['小红书矩阵选题', 'Instagram 趋势观察', 'AI 选题拆解', '内容 SOP 复用'],
    outputs: [
      { src: asset('assets/optimized/ppt/ppt-media-01.jpg'), label: '社区账号内容' },
      { src: asset('assets/optimized/ppt/ppt-media-13.jpg'), label: '社群招募内容' },
      { src: asset('assets/optimized/ppt/ppt-media-26.jpg'), label: '活动内容记录' },
    ],
  },
  {
    no: '05',
    title: '优觅 U&Me',
    duties: '小红书内容策划 / 社交媒体运营 / 生活方式内容表达',
    images: [asset('assets/optimized/ppt/ppt-media-05.jpg'), asset('assets/optimized/ppt/ppt-media-09.jpg')],
    copy:
      '根据平台调性与业务目标完成图文内容策划、标题优化、发布执行与互动数据观察，持续调整内容形式。',
    resultLabel: '工作重点',
    result: '生活方式内容表达、账号结构优化、标题与封面优化、互动数据观察。',
    focus: ['生活方式内容策划', '标题与封面优化', '账号结构整理', '互动数据观察'],
    outputs: [
      { src: asset('assets/optimized/ppt/ppt-media-05.jpg'), label: '账号内容样本' },
      { src: asset('assets/optimized/ppt/ppt-media-09.jpg'), label: '图文内容示例' },
      { src: asset('assets/optimized/ppt/ppt-media-18.jpg'), label: '生活方式表达' },
    ],
  },
]

const strengths = [
  {
    title: 'Content Map',
    copy: '把用户需求、平台语境和发布节奏整理成清晰的内容路径。',
    icon: 'map',
  },
  {
    title: 'Global Voice',
    copy: '用中文、英文、德语语境理解不同市场里的表达差异。',
    icon: 'globe',
  },
  {
    title: 'Data Loop',
    copy: '观察阅读量、互动率和转化行为，再反推选题与内容结构。',
    icon: 'chart',
  },
  {
    title: 'AI Workflow',
    copy: '用 AI Agent、Vibe Coding 和设计工具提高采集、改写与复盘效率。',
    icon: 'spark',
  },
]

const travelCountries = [
  { name: 'China', className: 'china', style: { left: '67%', top: '46%', '--marker-delay': '0.18s' } },
  { name: 'Thailand', className: 'thailand', style: { left: '68.5%', top: '59.5%', '--marker-delay': '0.42s' } },
  { name: 'Indonesia', className: 'indonesia', style: { left: '74%', top: '74%', '--marker-delay': '0.96s' } },
  { name: 'Germany', className: 'germany', style: { left: '32.5%', top: '30%', '--marker-delay': '0.3s' } },
  { name: 'France', className: 'france', style: { left: '23.5%', top: '38.5%', '--marker-delay': '0.74s' } },
  { name: 'Italy', className: 'italy', style: { left: '33.5%', top: '46.5%', '--marker-delay': '1.18s' } },
  { name: 'Czechia', className: 'czechia', style: { left: '38%', top: '33.5%', '--marker-delay': '0.58s' } },
  { name: 'Spain', className: 'spain', style: { left: '17.5%', top: '47%', '--marker-delay': '1.34s' } },
  { name: 'Portugal', className: 'portugal', style: { left: '9.7%', top: '46%', '--marker-delay': '0.86s' } },
  { name: 'Cyprus', className: 'cyprus', style: { left: '43.5%', top: '52%', '--marker-delay': '1.48s' } },
  { name: 'Austria', className: 'austria', style: { left: '33.2%', top: '38%', '--marker-delay': '1.08s' } },
  { name: 'Hungary', className: 'hungary', style: { left: '40.8%', top: '39.5%', '--marker-delay': '0.68s' } },
  { name: 'Netherlands', className: 'netherlands', style: { left: '24%', top: '27%', '--marker-delay': '1.62s' } },
  { name: 'Belgium', className: 'belgium', style: { left: '22.5%', top: '32%', '--marker-delay': '1.24s' } },
]

function WorldTravelMap() {
  return (
    <div className="travelMapFrame">
      <img
        className="travelMapFinalImage"
        src={asset('assets/optimized/global-travel-map-final.png')}
        alt="Global travel map"
        loading="lazy"
        decoding="async"
      />
      <div className="travelMapMarkers" aria-hidden="true">
        {travelCountries.map((marker) => (
          <span className={`travelMarker ${marker.className}`} style={marker.style} key={marker.name}>
            <i />
            <b>{marker.name}</b>
          </span>
        ))}
      </div>
    </div>
  )
}

function SketchIcon({ type }) {
  return (
    <svg className="sketchIcon" viewBox="0 0 120 120" aria-hidden="true">
      {type === 'map' && (
        <>
          <path d="M18 32 43 22l34 11 25-10v66L77 99 43 88 18 98Z" />
          <path d="M43 22v66M77 33v66M31 46c16 4 23 9 34 24 8 11 17 14 28 12" />
        </>
      )}
      {type === 'globe' && (
        <>
          <circle cx="60" cy="60" r="40" />
          <path d="M22 60h76M60 20c16 15 18 66 0 80M60 20c-16 15-18 66 0 80" />
          <path d="M32 37c15 8 41 9 57 0M31 82c17-7 42-7 58 0" />
        </>
      )}
      {type === 'chart' && (
        <>
          <path d="M22 94h78M29 88V55M54 88V35M79 88V48" />
          <path d="M24 42c18 7 29 5 43-7 8-7 16-10 30-5" />
          <path d="M93 24 101 31 91 38" />
        </>
      )}
      {type === 'spark' && (
        <>
          <path d="M60 16c5 23 15 34 38 41-23 6-34 17-40 41-6-24-17-35-40-41 24-7 35-18 42-41Z" />
          <path d="M25 20c2 10 6 15 16 18-10 3-14 8-17 18-3-10-8-15-18-18 11-3 16-8 19-18ZM94 73c2 8 5 12 13 14-8 3-12 6-14 15-3-9-6-12-15-15 9-2 13-6 16-14Z" />
        </>
      )}
    </svg>
  )
}

function App() {
  const [isNavFloating, setIsNavFloating] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrame = 0
    let lastFloating = null
    let observer

    const updateNav = () => {
      const nextFloating = window.scrollY > window.innerHeight - 110
      if (nextFloating !== lastFloating) {
        lastFloating = nextFloating
        setIsNavFloating(nextFloating)
      }
    }

    const parallaxImages = reduceMotion ? [] : [...document.querySelectorAll('.outputCard img')]
    const heroImage = reduceMotion ? null : document.querySelector('.heroImage')
    const motionStart = performance.now()

    if (!reduceMotion) {
      document.body.classList.add('motion-ready')

      const revealItems = document.querySelectorAll(
        '.about, .works, .skills, .travelMap, .travelMapFrame, .contactPage, .worksHeader, .noteCard, .resumeFact, .workRow, .outputCard, .skillsIntro, .skillList article, .contactPoster',
      )

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
      )

      revealItems.forEach((item) => observer.observe(item))
    }

    const updateMotion = () => {
      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY

      if (heroImage && performance.now() - motionStart > 2200) {
        heroImage.style.transform = `translate3d(0, ${scrollY * 0.055}px, 0) scale(1.12)`
      }

      parallaxImages.forEach((image) => {
        const rect = image.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > viewportHeight) return
        const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight
        image.style.transform = `translate3d(0, ${progress * -18}px, 0) scale(1.055)`
      })
    }

    const updateFrame = () => {
      updateNav()
      if (!reduceMotion) updateMotion()
      animationFrame = 0
    }

    const requestFrame = () => {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateFrame)
      }
    }

    updateFrame()
    window.addEventListener('scroll', requestFrame, { passive: true })
    window.addEventListener('resize', requestFrame)

    return () => {
      document.body.classList.remove('motion-ready')
      observer?.disconnect()
      window.removeEventListener('scroll', requestFrame)
      window.removeEventListener('resize', requestFrame)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <ClickSpark sparkColor="#b792c8" sparkSize={12} sparkRadius={18} sparkCount={9} duration={460}>
      <main>
      <section className="hero" id="home">
        <div className="openingFrame" aria-hidden="true">
          <span>STONE</span>
        </div>
        <img
          className="heroImage"
          src={asset('assets/optimized/hero-flowers-bubbles.jpg')}
          alt=""
          aria-hidden="true"
          width="900"
          height="1605"
          decoding="async"
          fetchPriority="high"
        />
        <div className="heroShade" />

        <nav className={`nav shell${isNavFloating ? ' navFloating' : ''}`}>
          <a className="brand" href="#home">STONE</a>
          <div className="navLinks">
            <a href="#about">ABOUT</a>
            <a href="#works">WORKS</a>
            <a href="#skills">SKILLS</a>
          </div>
          <a className="navContact" href="mailto:sitongchow@gmail.com">SAY HI</a>
        </nav>

        <div className="heroStage shell">
          <aside className="heroStamp">
            <span>Germany / Global</span>
            <span>content strategy</span>
            <span>creative operations</span>
          </aside>

          <div className="poster">
            <div className="posterTop">
              <span>portfolio showcase</span>
              <span>content strategy · creative operations</span>
            </div>
            <p className="stoneScript">STONE</p>
            <h1>自由发生之前｜作品展示集</h1>
            <p className="heroSubtitle">Portfolio Showcase · Content Strategy · Creative Operations</p>
            <div className="tagCloud">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="cnLine">这里收藏内容实验，以及一点点正在变自由的生活。</p>
          </div>

          <div className="heroSideCard">
            <div className="miniPosterTop">STONE archive</div>
            <SketchIcon type="map" />
            <h2>content notes</h2>
            <p>community growth / overseas content / social media / influencer BD / AI workflow</p>
            <span>made with structure and softness</span>
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="sectionLabel">01 / Individual Resume</div>
        <div className="aboutGrid">
          <div className="noteCard introCard">
            <p className="smallHand">About Me</p>
            <h2>做内容，也搭系统。</h2>
            <p>
              Stone，目前居住在德国 Nordrhein-Westfalen。我的经历横跨自由职业社区、出海品牌内容、新媒体矩阵、海外达人商务和数字游民社区运营。
            </p>
            <p>
              擅长把分散的创意，整理成可以执行、可以复盘、可以带来增长的内容系统：从用户理解、选题规划、文案表达、视觉制作，到数据复盘、私域咨询和转化路径。
            </p>
            <span className="archiveDeco tapeOne" aria-hidden="true" />
            <span className="archiveDeco bow" aria-hidden="true" />
            <span className="archiveDeco littleHouse" aria-hidden="true" />
          </div>

          <div className="resumeBoard">
            <span className="archiveDeco stamp" aria-hidden="true" />
            <span className="archiveDeco paperclip" aria-hidden="true" />
            <span className="archiveDeco starSticker" aria-hidden="true" />
            <span className="archiveDeco ribbon" aria-hidden="true" />
            {resumeFacts.map(([label, value]) => (
              <div className="resumeFact" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="works shell" id="works">
        <div className="sectionLabel">02 / Works Display</div>
        <div className="worksHeader">
          <h2>作品集 / Things I Made</h2>
          <p>按工作内容划分，每一条记录对应一个内容方向、一组平台素材和一段运营职责。</p>
        </div>

        <div className="workList">
          {works.map((work) => (
            <article className="workRow" key={work.title}>
              <div className="workNo">{work.no}</div>
              <div className="workText">
                <p>Project {work.no}</p>
                <h3>{work.title}</h3>
                <div className="workTags">
                  {work.duties.split(' / ').map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <span>{work.copy}</span>
                <div className="workMeta">
                  <div>
                    <b>{work.resultLabel}</b>
                    <em>{work.result}</em>
                  </div>
                  <div>
                    <b>Focus Areas</b>
                    <ul>
                      {work.focus.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="workOutputs">
                <p className="smallHand">Selected Outputs</p>
                <div className="outputGrid">
                  {work.outputs.map((output) => (
                    <figure className="outputCard" key={output.src}>
                      <img
                        src={output.src}
                        alt={`${work.title} - ${output.label}`}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>{output.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills shell" id="skills">
        <div className="sectionLabel">03 / Planning and Operation</div>
        <div className="skillsGrid">
          <div className="skillsIntro">
            <p className="smallHand">planning notes</p>
            <h2>从需求，到选题、内容、数据和转化。</h2>
            <p className="skillsSubline">User Insight · Content Map · Production SOP · Data Review</p>
          </div>

          <div className="skillList">
            {strengths.map((item) => (
              <article key={item.title}>
                <SketchIcon type={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="travelMap shell" aria-label="Global travel map">
        <div className="sectionLabel mapLabel">Global Travel Map</div>
        <WorldTravelMap />
      </section>

      <section
        className="contactPage"
        style={{ '--contact-bg': `url("${asset('assets/optimized/contact-postcard-green.jpg')}")` }}
      >
        <div className="contactPoster shell">
          <p className="smallHand">Personal Work Collection</p>
          <h2>STONE</h2>
          <p>overseas content growth · copywriting · social media · influencer BD · AI workflow</p>
          <div className="contactLinks">
            <a href="mailto:sitongchow@gmail.com">sitongchow@gmail.com</a>
            <span>ZeuStone-0107</span>
          </div>
        </div>
      </section>
      </main>
    </ClickSpark>
  )
}

export default App
