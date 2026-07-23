import { useState } from 'react'
import { useFadeUp } from '../hooks/useAnimations'
import styles from './Gallery.module.css'

const categories = ['ALL', 'CLASSROOM', 'EVENTS', 'STUDENTS', 'CAMPUS', 'ACTIVITIES', 'OUTING', 'UT RESULTS']

const photos = [
  { src: '/Photos/Culture/IMG_0307.jpeg',        cat: 'EVENTS',    title: 'Pathshaala Moments',   sub: 'Life at the Center' },
  { src: '/Photos/Culture/IMG_0379.jpeg',        cat: 'STUDENTS',  title: 'Together We Learn',    sub: 'Student Stories' },
  { src: '/Photos/Culture/IMG_0380.jpeg',        cat: 'STUDENTS',  title: 'Student Vibes',        sub: 'Real Moments' },
  { src: '/Photos/Culture/IMG_0386.jpeg',        cat: 'CLASSROOM', title: 'In the Classroom',     sub: 'Focus Mode ON' },
  { src: '/Photos/Culture/IMG_0390.jpeg',        cat: 'CLASSROOM', title: 'Learning in Action',   sub: 'Chanakyapuri Center' },
  { src: '/Photos/Culture/IMG_0392.jpeg',        cat: 'CLASSROOM', title: 'Lesson Time',          sub: 'Expert Faculty' },
  { src: '/Photos/Culture/IMG_0398.jpeg',        cat: 'STUDENTS',  title: 'Student Energy',       sub: 'The Pathshaala Way' },
  { src: '/Photos/Culture/IMG_0401.jpeg',        cat: 'EVENTS',    title: 'Big Moments',          sub: 'Celebrations' },
  { src: '/Photos/Culture/IMG_1331.jpeg',        cat: 'CAMPUS',    title: 'Our Campus',           sub: 'Built for Excellence' },
  { src: '/Photos/Culture/IMG_1538.jpeg',        cat: 'EVENTS',    title: 'Event Day',            sub: 'Pathshaala Edu' },
  { src: '/Photos/Culture/IMG_1539.jpeg',        cat: 'EVENTS',    title: 'Prize Distribution',   sub: 'Celebrating Toppers' },
  { src: '/Photos/Culture/IMG_1541.jpeg',        cat: 'EVENTS',    title: 'Award Ceremony',       sub: 'Hall of Fame' },
  { src: '/Photos/Culture/IMG_1542.jpeg',        cat: 'STUDENTS',  title: 'Happy Students',       sub: 'Smiles of Success' },
  { src: '/Photos/Culture/IMG_1545.jpeg',        cat: 'STUDENTS',  title: 'Squad Goals',          sub: 'Study Tribe' },
  { src: '/Photos/Culture/IMG_1547.jpeg',        cat: 'CLASSROOM', title: 'Interactive Session',  sub: 'Smart Boards' },
  { src: '/Photos/Culture/IMG_1548.jpeg',        cat: 'CLASSROOM', title: 'Group Discussion',     sub: 'Concept Building' },
  { src: '/Photos/Culture/IMG_1549.jpeg',        cat: 'STUDENTS',  title: 'Peer Learning',        sub: 'Growing Together' },
  { src: '/Photos/Culture/IMG_1555.jpeg',        cat: 'EVENTS',    title: 'Cultural Day',         sub: 'Beyond Academics' },
  { src: '/Photos/Culture/IMG_1556.jpeg',        cat: 'EVENTS',    title: 'Fest Highlights',      sub: 'Full of Energy' },
  { src: '/Photos/Culture/IMG_1560.jpeg',        cat: 'CAMPUS',    title: 'Campus Tour',          sub: 'Jagatpur Wing' },
  { src: '/Photos/Culture/IMG_1561.jpeg',        cat: 'CAMPUS',    title: 'Study Zones',          sub: 'Library & Labs' },
  { src: '/Photos/Culture/IMG_1563.jpeg',        cat: 'STUDENTS',  title: 'Bright Minds',         sub: 'Class of 2025' },
  { src: '/Photos/Culture/IMG_3655.jpeg',        cat: 'CLASSROOM', title: 'Lesson in Progress',   sub: 'CBSE Batch' },
  { src: '/Photos/Culture/IMG_3659.jpeg',        cat: 'CLASSROOM', title: 'Board Practice',       sub: 'Exam Ready' },
  { src: '/Photos/Culture/IMG_3665.jpeg',        cat: 'STUDENTS',  title: 'Student Life',         sub: 'Everyday Energy' },
  { src: '/Photos/Culture/IMG_3668.jpeg',        cat: 'STUDENTS',  title: 'Real Connections',     sub: 'Friends & Futures' },
  { src: '/Photos/Culture/IMG_3669.jpeg',        cat: 'EVENTS',    title: 'Annual Ceremony',      sub: 'Pride of Pathshaala' },
  { src: '/Photos/Culture/IMG_3673.jpeg',        cat: 'EVENTS',    title: 'Award Winners',        sub: 'Top Achievers' },
  { src: '/Photos/Culture/IMG_3677.jpeg',        cat: 'CAMPUS',    title: 'Common Area',          sub: 'Designed to Inspire' },
  { src: '/Photos/Culture/IMG_3680.jpeg',        cat: 'CAMPUS',    title: 'Facilities',           sub: 'State-of-the-Art' },
  { src: '/Photos/Culture/IMG_3684.jpeg',        cat: 'STUDENTS',  title: 'Study Hard',           sub: 'Dream Bigger' },
  { src: '/Photos/Culture/IMG_3817.jpeg',        cat: 'CLASSROOM', title: 'Doubt Session',        sub: 'One-on-One Care' },
  { src: '/Photos/Culture/IMG_3818.jpeg',        cat: 'CLASSROOM', title: 'Whiteboard Magic',     sub: 'Science & Maths' },
  { src: '/Photos/Culture/IMG_3826.jpeg',        cat: 'EVENTS',    title: 'Celebration Time',     sub: 'End of Term' },
  { src: '/Photos/Culture/IMG_3827.jpeg',        cat: 'EVENTS',    title: 'Group Photo',          sub: 'Batch 2024–25' },
  { src: '/Photos/Culture/IMG_3828.jpeg',        cat: 'STUDENTS',  title: 'After Class',          sub: 'Chilling & Chasing' },
  { src: '/Photos/Culture/IMG_3838.jpeg',        cat: 'STUDENTS',  title: 'Topper Moment',        sub: 'Rank 1 Feels' },
  { src: '/Photos/Culture/IMG_3854.jpeg',        cat: 'CLASSROOM', title: 'Focus Zone',           sub: 'Test Prep Mode' },
  { src: '/Photos/Culture/IMG_3884.jpeg',        cat: 'EVENTS',    title: 'Grand Gathering',      sub: 'Parents & Students' },
  { src: '/Photos/Culture/IMG_3886.jpeg',        cat: 'EVENTS',    title: 'Stage Moment',         sub: 'Prize Day 2025' },
  { src: '/Photos/Culture/IMG_3891.jpeg',        cat: 'EVENTS',    title: 'Award Night',          sub: 'Honours & Glory' },
  { src: '/Photos/Culture/IMG_3893.jpeg',        cat: 'STUDENTS',  title: 'Batch Photo',          sub: 'Together Always' },
  { src: '/Photos/Culture/IMG_3898.jpeg',        cat: 'CAMPUS',    title: 'Inside Pathshaala',    sub: 'Where Dreams Grow' },
  { src: '/Photos/Culture/IMG_3914.jpeg',        cat: 'CAMPUS',    title: 'Reading Hall',         sub: 'AC Study Rooms' },
  { src: '/Photos/Culture/IMG_3924.jpeg',        cat: 'STUDENTS',  title: 'Candid Moments',       sub: 'Authentic Vibes' },
  { src: '/Photos/Culture/IMG_3928.jpeg',        cat: 'STUDENTS',  title: 'On the Way Up',        sub: 'Motivated Learners' },
  { src: '/Photos/Culture/IMG_3929.jpeg',        cat: 'CLASSROOM', title: 'Deep Focus',           sub: 'Exam Week' },
  { src: '/Photos/Culture/IMG_5854.jpeg',        cat: 'EVENTS',    title: 'Special Day',          sub: 'School Celebrations' },
  { src: '/Photos/Culture/IMG_5858.jpeg',        cat: 'EVENTS',    title: 'Milestone Marked',     sub: 'Pathshaala History' },
  { src: '/Photos/Culture/IMG_9382 (1).jpeg',   cat: 'STUDENTS',  title: 'Student Portrait',     sub: 'Future Leaders' },
  { src: '/Photos/Culture/IMG_9382.jpeg',        cat: 'STUDENTS',  title: 'Class Champions',      sub: 'Grade 10 Batch' },
  { src: '/Photos/Culture/IMG_9386.jpeg',        cat: 'CAMPUS',    title: 'Campus Life',          sub: 'Ahmedabad Centers' },
  { src: '/Photos/Culture/IMG_9535.jpeg',        cat: 'CLASSROOM', title: 'Morning Session',      sub: 'Early Risers' },
  { src: '/Photos/Culture/IMG_9536.jpeg',        cat: 'CLASSROOM', title: 'Concept Clarity',      sub: 'No Doubt Left' },
  { src: '/Photos/Culture/IMG_9537.jpeg',        cat: 'STUDENTS',  title: 'Break Time Vibes',     sub: 'Friends Forever' },
  { src: '/Photos/Culture/IMG_9539.jpeg',        cat: 'EVENTS',    title: 'Special Occasion',     sub: 'Centre Stage' },
  { src: '/Photos/Culture/IMG_9541.jpeg',        cat: 'EVENTS',    title: 'Proud Moments',        sub: 'Achievement Night' },
  { src: '/Photos/Culture/IMG_9546.jpeg',        cat: 'CAMPUS',    title: 'Open Day',             sub: 'Welcome to Pathshaala' },
  { src: '/Photos/Culture/IMG_9547.jpeg',        cat: 'CAMPUS',    title: 'Bright Spaces',        sub: 'Light & Airy Rooms' },
  { src: '/Photos/Culture/IMG_9549.jpeg',        cat: 'STUDENTS',    title: 'Final Day',              sub: 'Memories Made' },

  /* ── RANGOLI COMPETITION ── */
  { src: '/Photos/Rangoli/image 1.png', cat: 'ACTIVITIES', title: 'Rangoli Competition',  sub: 'Art & Creativity' },
  { src: '/Photos/Rangoli/image 2.png', cat: 'ACTIVITIES', title: 'Team Work',             sub: 'Rangoli 2024' },
  { src: '/Photos/Rangoli/image 3.png', cat: 'ACTIVITIES', title: 'Creative Minds',        sub: 'Festival Spirit' },
  { src: '/Photos/Rangoli/image 4.png', cat: 'ACTIVITIES', title: 'Artistry in Action',    sub: 'Diwali Special' },
  { src: '/Photos/Rangoli/image 5.png', cat: 'ACTIVITIES', title: 'Colours & Culture',     sub: 'Pathshaala Event' },
  { src: '/Photos/Rangoli/image 6.png', cat: 'ACTIVITIES', title: 'Diwali Rangoli',        sub: 'Lotus & Lights ✨' },
  { src: '/Photos/Rangoli/image 7.png', cat: 'ACTIVITIES', title: 'Squad Fun',             sub: 'Laughter & Bonding' },
  { src: '/Photos/Rangoli/image 8.png', cat: 'ACTIVITIES', title: 'Detail Work',           sub: 'Precision & Passion' },

  /* ── KANTARA MOVIE SCREENING ── */
  { src: '/Photos/Kantara/image 9.png', cat: 'OUTING',      title: 'Kantara Screening',    sub: 'Sanelite Cinemas, Science City' },

  /* ── SIGNATURE DAY CELEBRATION ── */
  { src: '/Photos/Signature Day Celebration.png', cat: 'EVENTS', title: 'Signature Day', sub: 'A Day to Remember 🖊️' },

  /* ── BOWLING 2.0 ── */
  { src: '/Photos/Bowling 2.0/image 12.png', cat: 'OUTING', title: 'Bowling 2.0',       sub: 'Strike! 🎳' },
  { src: '/Photos/Bowling 2.0/image 13.png', cat: 'OUTING', title: 'Team Bowling',      sub: 'Batch Bonding' },
  { src: '/Photos/Bowling 2.0/image 14.png', cat: 'OUTING', title: 'Bowling Night',     sub: 'Fun Beyond Books' },
  { src: '/Photos/Bowling 2.0/image 15.png', cat: 'OUTING', title: 'Let\'s Bowl!',      sub: 'Pathshaala Outing' },
  { src: '/Photos/Bowling 2.0/image 16.png', cat: 'OUTING', title: 'Strike Ready',      sub: 'Squad Goals 🎳' },
  { src: '/Photos/Bowling 2.0/image 17.png', cat: 'OUTING', title: 'Bowling Vibes',     sub: 'Good Times Together' },
  { src: '/Photos/Bowling 2.0/image 18.png', cat: 'OUTING', title: 'Game On!',          sub: 'Winning Attitude' },
  { src: '/Photos/Bowling 2.0/image 19.png', cat: 'OUTING', title: 'Bowling Smiles',    sub: 'Memories Made' },

  /* ── SCHOOL UT RESULTS ── */
  { src: '/Photos/UT/image 10.png', cat: 'UT RESULTS', title: 'School UT Result', sub: 'Excellence is my Habit!' },
  { src: '/Photos/UT/image 11.png', cat: 'UT RESULTS', title: 'School UT Result', sub: 'Hard Work → Success' },

  /* ── LIVE SCREENING: INDIA VS PAK ODI ── */
  { src: '/Photos/Live Screening of India- Pak ODI/image 20.png', cat: 'OUTING', title: 'India vs Pak ODI 🏏',  sub: 'Live Screening — Pathshaala' },
  { src: '/Photos/Live Screening of India- Pak ODI/image 21.png', cat: 'OUTING', title: 'Cricket Night!',       sub: 'Cheering Together 🇮🇳' },
  { src: '/Photos/Live Screening of India- Pak ODI/image 22.png', cat: 'OUTING', title: 'Match Vibes',          sub: 'Passion Beyond Books' },
]

const vibes = [
  { icon: '🔥', label: 'High Energy', desc: 'Classes that spark curiosity and keep students engaged.' },
  { icon: '🤝', label: 'Community', desc: 'A family of learners who grow together, not in isolation.' },
  { icon: '🏆', label: 'Results-First', desc: 'Every activity is tied back to academic outcomes.' },
  { icon: '🎯', label: 'Focused', desc: 'Structured sessions with clear milestones and goals.' },
  { icon: '😄', label: 'Fun Learning', desc: 'Because joy and education are not opposites.' },
  { icon: '💡', label: 'Innovation', desc: 'Modern tools, smart boards, and digital practice tests.' },
]

export default function Gallery() {
  const [active, setActive] = useState('ALL')
  const [lightbox, setLightbox] = useState(null)

  const refHero  = useFadeUp(0)
  const refVibe  = useFadeUp(100)
  const refGrid  = useFadeUp(100)

  const filtered = active === 'ALL' ? photos : photos.filter(p => p.cat === active)

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroInner} ref={refHero}>
            <div>
              <span className={`label ${styles.heroLabel}`}>— LIFE AT PATHSHAALA</span>
              <h1 className={styles.heroTitle}>
                Culture &<br /><em>Vibes</em>
              </h1>
              <p className={styles.heroSub}>
                Beyond textbooks — this is how we learn, laugh, and level up together. Peek inside our classrooms, events, and everyday moments.
              </p>
            </div>
            <div className={styles.heroTagsWrap}>
              {['CBSE', 'GSEB', 'CLASS 8–12', 'AHMEDABAD', 'TWO BRANCHES', 'SINCE 2021'].map(t => (
                <span key={t} className={`tag ${styles.heroTag}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── VIBE CARDS ── */}
      <div className={`section ${styles.vibeSection}`} ref={refVibe}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="label">— WHAT MAKES US DIFFERENT</span>
            <h2 className={styles.sectionTitle}>Our Culture</h2>
          </div>
          <div className={styles.vibeGrid}>
            {vibes.map((v, i) => (
              <div className={styles.vibeCard} key={i}>
                <span className={styles.vibeIcon}>{v.icon}</span>
                <strong className={styles.vibeLabel}>{v.label}</strong>
                <p className={styles.vibeDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PHOTO GALLERY ── */}
      <div className={`section ${styles.gallerySection}`} ref={refGrid}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="label">— PHOTO GALLERY</span>
            <h2 className={styles.sectionTitle}>Moments That Matter</h2>
            <p className={styles.sectionSub}>
              Real moments. Real students. Real results.
            </p>
          </div>

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            {categories.map(cat => {
              const count = cat === 'ALL' ? photos.length : photos.filter(p => p.cat === cat).length
              return (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat} <span className={styles.filterCount}>{count}</span>
                </button>
              )
            })}
          </div>

          {/* Masonry Grid */}
          <div className={styles.masonryGrid}>
            {filtered.map((photo, i) => (
              <div
                key={i}
                className={styles.photoItem}
                onClick={() => setLightbox(photo)}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className={styles.photoOverlay}>
                  <span className={`tag tag-yellow ${styles.photoCat}`}>{photo.cat}</span>
                  <div className={styles.photoInfo}>
                    <h3>{photo.title}</h3>
                    <p>{photo.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.emptyState}>
              <span>📷</span>
              <p>Photos coming soon for this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── INSTAGRAM CTA ── */}
      <div className={styles.igStrip}>
        <div className="container">
          <div className={styles.igInner}>
            <div className={styles.igLeft}>
              <span className={styles.igIcon}>📸</span>
              <div>
                <p className={styles.igLabel}>Follow us for daily updates</p>
                <h2 className={styles.igTitle}>@pathshaala_edu</h2>
              </div>
            </div>
            <a
              href="https://www.instagram.com/pathshaala_edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-black btn-lg"
            >
              Follow on Instagram ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className={styles.lightboxOverlay} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxCard} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.src} alt={lightbox.title} />
            <div className={styles.lightboxInfo}>
              <span className="tag tag-navy">{lightbox.cat}</span>
              <h3>{lightbox.title}</h3>
              <p>{lightbox.sub}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
