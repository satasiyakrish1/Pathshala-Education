import { useFadeUp } from '../hooks/useAnimations'
import styles from './Mission.module.css'

const pillars = [
  { num: '01', title: 'Lifelong Success',     desc: 'We focus on nurturing well-rounded individuals prepared for real-world challenges beyond the classroom.' },
  { num: '02', title: 'Future Leaders',        desc: 'Shaping the next generation of leaders with high-quality education tailored to individual potential.' },
  { num: '03', title: 'Brighter Tomorrow',     desc: 'Cultivating young minds through engaging, effective, and innovative educational experiences.' },
]

export default function Mission() {
  const ref1 = useFadeUp(0)
  const ref2 = useFadeUp(100)

  return (
    <section className={`section ${styles.section}`} id="mission">
      <div className="container">

        <div className={styles.grid} ref={ref2}>
          
          {/* LEFT: Header + Pillars */}
          <div className={styles.left}>
            <div className={styles.header} ref={ref1}>
              <span className="label">— OUR MISSION</span>
              <h2 className={styles.title}>
                Empowering students<br />
                <span className={styles.titleAccent}>for a bright future.</span>
              </h2>
            </div>
            
            <div className={styles.pillars}>
              {pillars.map((p, i) => (
                <div className={styles.pillar} key={i}>
                  <span className={styles.pillarNum}>{p.num}</span>
                  <div>
                    <h4 className={styles.pillarTitle}>{p.title}</h4>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Full Height Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <img
                src="/Photos/68886f84492ae.jpg"
                alt="Pathshaala Mission"
                className={styles.image}
                onError={e => { e.target.parentElement.classList.add(styles.noImg) }}
              />
              <div className={styles.imageFallback}>
                <span>📚</span>
                <p>Drop Photos in<br/>/public/Photos</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
