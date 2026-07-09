import { useState, useEffect } from 'react'
import { useFadeUp } from '../hooks/useAnimations'
import styles from './Hero.module.css'

const words = ['Excellence', 'Growth', 'Success', 'Knowledge', 'Clarity']

function TypedWord() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex(i => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className={styles.typed}>
      {displayed}<span className={styles.cursor}>|</span>
    </span>
  )
}

const heroImages = [
  '/Photos/68886f8449c74.jpg',
  '/Photos/68886f84465fc.jpg',
  '/Photos/68886f84476c4.jpg',
  '/Photos/68886f84492ae.jpg',
  '/Photos/68886f844844c.jpg',
  '/Photos/68886f8447111.jpg',
  '/Photos/68886fc2123f9.jpg',
]

export default function Hero() {
  const refLabel   = useFadeUp(0)
  const refHeading = useFadeUp(80)
  const refSub     = useFadeUp(160)
  const refActions = useFadeUp(220)
  const refImage   = useFadeUp(100)

  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setImgIndex(i => (i + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>

        {/* ── MAIN GRID ── */}
        <div className={styles.mainGrid}>

          {/* LEFT: Content */}
          <div className={styles.contentCol}>

            <div ref={refHeading}>
              <div className={styles.schoolTag}>
                <span className={styles.schoolTagDot} />
                PATHSHAALA EDU
              </div>

              <h1 className={styles.headline}>
                Where every<br />
                student finds<br />
                <TypedWord />
              </h1>
            </div>

            <p className={styles.subtext} ref={refSub}>
              Pathshaala — meaning <em>"school"</em> in Sanskrit — is a premier
              educational institution dedicated to high-quality, personalised
              learning for Grade 8–12 students in Ahmedabad.
            </p>

            <div className={styles.actions} ref={refActions}>
              <a href="#courses" className={`btn btn-black btn-lg ${styles.primaryBtn}`}>
                Explore Courses
                <span className={styles.btnArrow}>→</span>
              </a>
              <a href="#contact" className={`btn btn-yellow btn-lg`}>
                Enquire Now
              </a>
            </div>

          </div>

          {/* RIGHT: Image + Floating Cards */}
          <div className={styles.imageCol} ref={refImage}>

            {/* Main hero image */}
            <div className={styles.imageFrame}>
              {heroImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Pathshaala Edu Classroom ${idx}`}
                  className={`${styles.heroImg} ${idx === imgIndex ? styles.activeImg : ''}`}
                />
              ))}
              <div className={styles.imgFallback}>
                <div className={styles.fallbackGrid}>
                  <div className={styles.fg1} />
                  <div className={styles.fg2} />
                  <div className={styles.fg3} />
                  <div className={styles.fg4} />
                </div>
                <div className={styles.fallbackLabel}>
                  <span>🏫</span>
                  <p>Drop Photos in <code>/public/Photos</code></p>
                </div>
              </div>

              {/* Overlay tag */}
              <div className={styles.imgTag}>
                <span className={styles.imgTagDot} />
                LIVE CLASSES AVAILABLE
              </div>
            </div>

            {/* Floating card 1 — Board */}
            <div className={`${styles.floatCard} ${styles.fc1}`}>
              <span className="label">BOARD</span>
              <div className={styles.fcRow}>
                <span className={styles.fcChip}>CBSE</span>
                <span className={styles.fcChip}>GSEB</span>
              </div>
            </div>

            {/* Floating card 2 — Satisfaction */}
            <div className={`${styles.floatCard} ${styles.fc2}`}>
              <div className={styles.fcBig}>100%</div>
              <span className="label">SATISFACTION</span>
            </div>

            {/* Floating card 3 — Mode */}
            <div className={`${styles.floatCard} ${styles.fc3}`}>
              <span className="label">LEARNING MODE</span>
              <p className={styles.fcVal}>Online &amp; Offline</p>
            </div>

          </div>
        </div>

        {/* ── STATS STRIP ── */}
        <div className={styles.statsStrip}>
          {[
            { val: '2000+', label: 'Students' },
            { val: '500+',  label: 'A1 Grades' },
            { val: '2',     label: 'Branches' },
            { val: '100%',  label: 'Rated' },
          ].map((s, i) => (
            <div className={styles.statsCell} key={i}>
              <strong>{s.val}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── INFO STRIP ── */}
        <div className={styles.infoStrip}>
          <div className={styles.infoCell}>
            <span className="label">LOCATION</span>
            <p>Ahmedabad, Gujarat</p>
          </div>
          <a href="tel:6352134932" className={styles.callCell}>
            <span className={styles.callArrow}>↗</span>
            <div>
              <span className="label">CALL US NOW</span>
              <p>+91 63521 34932</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
