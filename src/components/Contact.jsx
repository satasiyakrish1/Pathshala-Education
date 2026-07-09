import { useState } from 'react'
import { useFadeUp } from '../hooks/useAnimations'
import styles from './Contact.module.css'

const grades = ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

export default function Contact() {
  const ref1 = useFadeUp(0)
  const ref2 = useFadeUp(150)
  const [form, setForm] = useState({ name: '', phone: '', grade: '', message: '' })
  const [status, setStatus] = useState('idle')

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    fetch('https://formsubmit.co/ajax/binitshah5@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form)
    })
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(() => {
      setStatus('sent')
      setForm({ name: '', phone: '', grade: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    })
    .catch(() => {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    })
  }

  return (
    <section className="section" id="contact">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className="label">— GET IN TOUCH</span>
          <h2 className={styles.title}>Let&apos;s Connect</h2>
          <p className={styles.sub}>We respond within 24 hours. Visit our centre or send us an enquiry online.</p>
        </div>

        {/* Body */}
        <div className={styles.body}>

          {/* Info */}
          <div ref={ref1}>
            <div className={styles.infoGrid}>
              {[
                { icon: '📍', label: 'LOCATION', val: 'Ahmedabad, Gujarat, India' },
                { icon: '📞', label: 'PHONE', val: '+91 63521 34932', href: 'tel:6352134932' },
                { icon: '✉️', label: 'EMAIL', val: 'binitshah5@gmail.com', href: 'mailto:binitshah5@gmail.com' },
              ].map((item, i) => (
                <div className={styles.infoCard} key={i}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <span className="label">{item.label}</span>
                  {item.href
                    ? <a href={item.href} className={styles.infoVal}>{item.val}</a>
                    : <p className={styles.infoVal}>{item.val}</p>
                  }
                </div>
              ))}
            </div>

            <div className={styles.socials}>
              {[
                { label: 'INSTAGRAM', href: 'https://www.instagram.com/pathshaala_edu/', icon: '◆', target: '_blank', rel: 'noopener noreferrer' },
                { label: 'WHATSAPP', href: 'https://wa.me/916352134932', icon: '✦', target: '_blank', rel: 'noopener noreferrer' },
              ].map(s => (
                <a key={s.label} href={s.href} className={styles.socialLink} target={s.target} rel={s.rel}>
                  <span className={styles.socialIcon}>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={styles.formWrap} ref={ref2}>
            <div className={styles.formHeader}>
              <h3>Send an Enquiry</h3>
            </div>
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 00000 00000" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Grade / Class</label>
                <select name="grade" value={form.grade} onChange={onChange}>
                  <option value="">Select Grade</option>
                  {grades.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="How can we help you?" />
              </div>
              <button
                type="submit"
                className={`btn btn-black btn-full ${status === 'sent' ? styles.sent : ''}`}
                disabled={status !== 'idle'}
              >
                {status === 'sent' ? '✓ Enquiry Sent!' : status === 'sending' ? 'Sending...' : 'Submit Enquiry →'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
