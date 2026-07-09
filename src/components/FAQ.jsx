import { useState } from 'react'
import { useFadeUp } from '../hooks/useAnimations'
import styles from './FAQ.module.css'

const faqData = [
  {
    q: 'Which curriculum boards are supported at Pathshaala Edu?',
    a: 'We offer comprehensive academic preparation for both CBSE (Central Board of Secondary Education) and GSEB (Gujarat Secondary and Higher Secondary Education Board) for Grade 8 through 12 students.'
  },
  {
    q: 'What is the schedule and structure of the Test Series?',
    a: 'We conduct regular offline test series designed to match board exam patterns. These tests benchmark student progress, build exam temperament, and are followed by detailed doubt solving sessions and paper feedback.'
  },
  {
    q: 'Does Pathshaala offer both online and offline learning modes?',
    a: 'Yes! Students can choose between offline interactive classroom sessions at our Ahmedabad centers and live online streaming options. Hybrid options are also available to ensure zero study gaps.'
  },
  {
    q: 'How does Pathshaala maintain personalised attention?',
    a: 'We limit our batch sizes to ensure each student receives targeted faculty support. Additionally, we hold dedicated doubt-clearing hours, 1-on-1 feedback, and track individual progress report metrics.'
  },
  {
    q: 'What is the fee structure for the Foundation, Advanced, and Elite courses?',
    a: 'Our programs start from ₹25,000 for the starter Foundation Course up to ₹75,000 for our Elite Course. Installment facilities and academic merit scholarships are available. Get in touch with our office to receive details.'
  },
  {
    q: 'Where are the Ahmedabad center branches located?',
    a: 'We operate two state-of-the-art facilities in Ahmedabad: our Satellite Center (near Panjrapole Cross Road) and our Naranpura Center (opposite St. Xavier\'s School Road).'
  }
]

function AccordionItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  const ref = useFadeUp(index * 60)

  return (
    <div className={`${styles.item} ${open ? styles.active : ''}`} ref={ref}>
      <button className={styles.trigger} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className={styles.questionText}>{q}</span>
        <span className={styles.indicator}>{open ? '−' : '+'}</span>
      </button>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const refHeader = useFadeUp(0)

  return (
    <div className={styles.page}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header} ref={refHeader}>
          <span className="label">— FREQUENTLY ASKED QUESTIONS</span>
          <h1 className={styles.title}>Academic FAQ</h1>
          <p className={styles.sub}>Clear answers to common questions about registration, courses, coaching, and schedules.</p>
        </div>

        {/* Accordion List */}
        <div className={styles.list}>
          {faqData.map((faq, i) => <AccordionItem key={i} {...faq} index={i} />)}
        </div>

      </div>
    </div>
  )
}
