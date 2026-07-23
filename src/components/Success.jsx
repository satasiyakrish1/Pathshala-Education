import { useRef, useState, useEffect } from 'react'
import { useFadeUp } from '../hooks/useAnimations'
import { useCounter } from '../hooks/useAnimations'
import styles from './Success.module.css'

const stats = [
  { target: 2000, plus: '+', label: 'Students Taught', sub: 'Across both branches', bg: 'navy' },
  { target: 95,   plus: '%', label: 'Pass Rate',        sub: 'In board examinations', bg: 'yellow' },
  { target: 500,  plus: '+', label: 'A1 Achievers',     sub: 'Top grade scorers',     bg: 'white' },
  { target: 4,    plus: '',  label: 'Years Running',    sub: 'Of academic excellence', bg: 'dark' },
]

const classBreakdown = [
  { grade: '8',  board: 'CBSE & GSEB', students: 320, toppers: 45, passRate: 98, icon: '📗' },
  { grade: '9',  board: 'CBSE & GSEB', students: 410, toppers: 62, passRate: 97, icon: '📘' },
  { grade: '10', board: 'CBSE & GSEB', students: 480, toppers: 89, passRate: 96, icon: '🏆' },
  { grade: '11', board: 'CBSE & GSEB', students: 350, toppers: 71, passRate: 95, icon: '📙' },
  { grade: '12', board: 'CBSE & GSEB', students: 440, toppers: 98, passRate: 94, icon: '🎓' },
]

const achievements = [
  { year: '2024–25', title: 'Board Toppers',    desc: '12 students scored above 95% in Class 10 boards',                   tag: 'CBSE' },
  { year: '2024–25', title: 'District Rank 1',  desc: 'Pathshaala student secured district rank 1 in GSEB Class 12',       tag: 'GSEB' },
  { year: '2023–24', title: '100% Batch Pass',  desc: 'Entire Class 10 CBSE batch cleared with distinction',              tag: 'MILESTONE' },
  { year: '2023–24', title: 'Science Olympiad', desc: '8 students qualified for National Science Olympiad Finals',         tag: 'OLYMPIAD' },
  { year: '2022–23', title: 'Perfect Score',    desc: 'First student to score 100/100 in Mathematics',                    tag: 'RECORD' },
  { year: '2022–23', title: 'Foundation Batch', desc: 'Launched Grade 8 Foundation Program with 120 students',            tag: 'LAUNCH' },
]

/* ── All 11 result-card images from /Photos/Success/ ── */
const resultCards = [
  { src: '/Photos/Success/e9749034-59cf-41f8-bbb4-22baa36d4df1.JPG.jpeg', subject: 'Social Studies', rank: 'Top 20 — Rank 1–10' },
  { src: '/Photos/Success/5e9abd53-2604-471d-841a-ff308e4d9d2d.JPG.jpeg', subject: 'Social Studies', rank: 'Top 20 — Rank 11–20' },
  { src: '/Photos/Success/b97ab401-e09a-4cfb-8653-1d9ae2098f78.JPG.jpeg', subject: 'Science',        rank: 'Top 25 — Rank 1–15' },
  { src: '/Photos/Success/bcfbae59-f8a2-4548-98c6-fedd0e7c0d16.JPG.jpeg', subject: 'Science',        rank: 'Top 25 — Rank 16–25' },
  { src: '/Photos/Success/2384307b-0458-412f-8c8c-5be9ff0df5fb.JPG.jpeg', subject: 'English',        rank: 'Top 25 — Rank 6–15' },
  { src: '/Photos/Success/7e87163c-78cc-4ab3-9055-76ef1ca0c430.JPG.jpeg', subject: 'English',        rank: 'Top 25 — Rank 16–25' },
  { src: '/Photos/Success/99e22f3d-a551-4f9b-bf03-237f1e475e86.JPG.jpeg', subject: 'Maths',          rank: 'Top 25 — Rank 16–25' },
  { src: '/Photos/Success/c17f1c48-ab78-42ee-891e-9c6082694b9a.JPG.jpeg', subject: 'Maths',          rank: 'Top 25 — Rank 1–15' },
  { src: '/Photos/Success/5e9e6916-3165-43bc-82a5-60d3dfc86b6e.JPG.jpeg', subject: 'Gujarat',        rank: 'Top Students' },
  { src: '/Photos/Success/bdf6d21b-1e44-4d63-8a2a-9051a088ce69.JPG.jpeg', subject: 'Hindi',          rank: 'Top Students' },
  { src: '/Photos/Success/e0da4ac9-1cee-4566-ad63-62c7844fe728.JPG.jpeg', subject: 'Overall',        rank: 'Top Achievers' },
]

function StatCounter({ target, plus, label, sub, bg }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const count = useCounter(target, started)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div className={`${styles.statCell} ${styles[`bg_${bg}`]}`} ref={ref}>
      <div className={styles.statBgText}>{target}{plus}</div>
      <div className={styles.statInner}>
        <div className={styles.statNum}>
          <span>{count.toLocaleString()}</span>
          <span className={styles.statPlus}>{plus}</span>
        </div>
        <p className={styles.statLabel}>{label}</p>
        <span className={styles.statSub}>{sub}</span>
      </div>
    </div>
  )
}

export default function Success() {
  const refHero    = useFadeUp(0)
  const refCards   = useFadeUp(0)
  const refBreak   = useFadeUp(100)
  const refAchiev  = useFadeUp(100)
  const [lightbox, setLightbox] = useState(null)
  const [lbIdx, setLbIdx] = useState(0)

  const openLightbox = (i) => { setLbIdx(i); setLightbox(resultCards[i]) }
  const prevImg = () => { const i = (lbIdx - 1 + resultCards.length) % resultCards.length; setLbIdx(i); setLightbox(resultCards[i]) }
  const nextImg = () => { const i = (lbIdx + 1) % resultCards.length; setLbIdx(i); setLightbox(resultCards[i]) }

  // Keyboard nav for lightbox
  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  prevImg()
      if (e.key === 'ArrowRight') nextImg()
      if (e.key === 'Escape')     setLightbox(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, lbIdx])

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroInner} ref={refHero}>
            <div className={styles.heroLeft}>
              <span className={`label ${styles.heroLabel}`}>— PROVEN RESULTS</span>
              <h1 className={styles.heroTitle}>
                Numbers That<br />
                <em>Speak Louder</em><br />
                Than Words.
              </h1>
              <p className={styles.heroSub}>
                Every stat below represents a student who walked in with potential and walked out with results. This is the Pathshaala promise.
              </p>
              <a href="/#contact" className="btn btn-yellow btn-lg">Join Our Success Story →</a>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.bigNumber}>2000<span>+</span></div>
              <p className={styles.bigLabel}>Students and counting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS GRID ── */}
      <div className={styles.statsGrid}>
        {stats.map((s, i) => <StatCounter key={i} {...s} />)}
      </div>

      {/* ── RESULT CARDS SECTION ── */}
      <div className={`section ${styles.resultSection}`}>
        <div className="container">
          <div className={styles.sectionHead} ref={refCards}>
            <span className="label">— REAL RESULTS, REAL STUDENTS</span>
            <h2 className={styles.sectionTitle}>Subject-wise Topper Cards</h2>
            <p className={styles.sectionSub}>
              Official score leaderboards across every subject — straight from the classroom. Click any card to view full size.
            </p>
          </div>
        </div>

        {/* Grid — same layout as gallery page */}
        <div className={styles.resultGrid}>
          {resultCards.map((card, i) => (
            <button
              key={i}
              className={styles.resultCard}
              onClick={() => openLightbox(i)}
              aria-label={`View ${card.subject} result card`}
            >
              <div className={styles.resultImgWrap}>
                <img src={card.src} alt={`${card.subject} topper card`} loading="lazy" />
              </div>
              <div className={styles.resultCardInfo}>
                <span className="tag tag-yellow">{card.subject}</span>
                <p>{card.rank}</p>
              </div>
              <div className={styles.resultHoverOverlay}>
                <span>🔍 View Full</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── UT RESULT CARDS ── */}
      <div className={`section ${styles.utSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="label">— SCHOOL UT RESULTS</span>
            <h2 className={styles.sectionTitle}>Student Unit Test Results</h2>
            <p className={styles.sectionSub}>Real scores, real pride. Our students consistently top their school unit tests across all subjects.</p>
          </div>
          <div className={styles.resultGrid}>
            {utCards.map((card, i) => (
              <button
                key={i}
                className={styles.resultCard}
                onClick={() => { setLbIdx(resultCards.length + i); setLightbox({ ...card, subject: 'UT Result' }) }}
                aria-label="View UT result card"
              >
                <div className={styles.resultImgWrap}>
                  <img src={card.src} alt="UT Result Card" loading="lazy" />
                </div>
                <div className={styles.resultCardInfo}>
                  <span className="tag tag-navy">UT Result</span>
                  <p>{card.sub}</p>
                </div>
                <div className={styles.resultHoverOverlay}>
                  <span>🔍 View Full</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CLASS BREAKDOWN ── */}
      <div className={`section ${styles.breakdownSection}`}>
        <div className="container">
          <div className={styles.sectionHead} ref={refBreak}>
            <span className="label">— GRADE-WISE DATA</span>
            <h2 className={styles.sectionTitle}>Success by Class</h2>
            <p className={styles.sectionSub}>Detailed breakdown of student outcomes across every grade we teach.</p>
          </div>
          <div className={styles.breakdownTable}>
            <div className={styles.tableHead}>
              <span>Grade</span>
              <span>Board</span>
              <span>Students</span>
              <span>A1 Toppers</span>
              <span>Pass Rate</span>
            </div>
            {classBreakdown.map((c, i) => (
              <div className={styles.tableRow} key={i} style={{ animationDelay: `${i * 80}ms` }}>
                <span className={styles.gradeCell}>
                  <span className={styles.gradeIcon}>{c.icon}</span>
                  Grade <strong>{c.grade}</strong>
                </span>
                <span><span className="tag tag-navy">{c.board}</span></span>
                <span className={styles.numCell}>{c.students}</span>
                <span className={styles.numCell} style={{ color: 'var(--navy)' }}>{c.toppers}</span>
                <span>
                  <div className={styles.rateWrap}>
                    <div className={styles.rateBar}>
                      <div className={styles.rateFill} style={{ width: `${c.passRate}%` }} />
                    </div>
                    <strong>{c.passRate}%</strong>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ACHIEVEMENTS ── */}
      <div className={`section ${styles.achievSection}`}>
        <div className="container">
          <div className={styles.sectionHead} ref={refAchiev}>
            <span className="label">— HALL OF FAME</span>
            <h2 className={styles.sectionTitle}>Key Achievements</h2>
            <p className={styles.sectionSub}>Milestones that define our journey and the students who made them possible.</p>
          </div>
          <div className={styles.achievGrid}>
            {achievements.map((a, i) => (
              <div className={styles.achievCard} key={i}>
                <div className={styles.achievTop}>
                  <span className="tag tag-navy">{a.tag}</span>
                  <span className={styles.achievYear}>{a.year}</span>
                </div>
                <h3 className={styles.achievTitle}>{a.title}</h3>
                <p className={styles.achievDesc}>{a.desc}</p>
                <div className={styles.achievLine} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <p className={styles.ctaLabel}>Ready to be our next success story?</p>
              <h2 className={styles.ctaTitle}>Enrol for 2025–26 Batch Now</h2>
            </div>
            <div className={styles.ctaActions}>
              <a href="tel:6352134932" className="btn btn-white btn-lg">Call Us</a>
              <a href="/#contact" className="btn btn-yellow btn-lg">Enquire Now →</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className={styles.lbOverlay} onClick={() => setLightbox(null)}>
          <div className={styles.lbBox} onClick={e => e.stopPropagation()}>
            <button className={styles.lbClose} onClick={() => setLightbox(null)}>✕</button>
            <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={prevImg}>‹</button>
            <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={nextImg}>›</button>
            <img src={lightbox.src} alt={lightbox.subject} />
            <div className={styles.lbFooter}>
              <span className="tag tag-navy">{lightbox.subject}</span>
              <p>{lightbox.rank}</p>
              <span className={styles.lbCounter}>{lbIdx + 1} / {resultCards.length}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
