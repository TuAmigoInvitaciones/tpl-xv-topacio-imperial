import { useState, useEffect, useRef } from 'react'
import { useInvitationConfig } from '@/common/hooks'

export const useCountdownSection = () => {
    const { sections } = useInvitationConfig()
    const countdownConfig = sections.countdown
    const sectionRef = useRef<HTMLElement | null>(null)

    const [revealed, setRevealed] = useState({ day: false, month: false, year: false })
    const [isScrollLocked, setIsScrollLocked] = useState(false)
    const [hasArrived, setHasArrived] = useState(false)

    const allRevealed = revealed.day && revealed.month && revealed.year

    // Bloquear scroll al llegar a la sección si no se han revelado todas las boxes
    useEffect(() => {
        if (allRevealed || hasArrived) {
            return
        }

        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry.isIntersecting && !allRevealed && !hasArrived) {
                    setHasArrived(true)
                    setIsScrollLocked(true)
                    section.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
            },
            {
                threshold: 0.35,
            }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [allRevealed, hasArrived])

    // Manejo del bloqueo de scroll
    useEffect(() => {
        if (!isScrollLocked) {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
            return
        }

        const prevBodyOverflow = document.body.style.overflow
        const prevHtmlOverflow = document.documentElement.style.overflow

        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'

        const handleTouchMove = (e: TouchEvent) => {
            const target = e.target as HTMLElement | null
            if (target && target.closest('.scratch-card')) {
                return // Permitir rascar en los círculos
            }
            if (e.cancelable) {
                e.preventDefault()
            }
        }

        const handleWheel = (e: WheelEvent) => {
            if (e.cancelable) {
                e.preventDefault()
            }
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)) {
                e.preventDefault()
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: false })
        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('keydown', handleKeyDown, { passive: false })

        return () => {
            document.body.style.overflow = prevBodyOverflow
            document.documentElement.style.overflow = prevHtmlOverflow
            window.removeEventListener('wheel', handleWheel)
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isScrollLocked])

    const handleReveal = (field: 'day' | 'month' | 'year') => {
        setRevealed(prev => {
            const next = { ...prev, [field]: true }
            if (next.day && next.month && next.year) {
                setIsScrollLocked(false)
            }
            return next
        })
    }

    const targetDateObj = countdownConfig?.targetDate ? new Date(countdownConfig.targetDate) : null
    const dayStr = targetDateObj && !isNaN(targetDateObj.getTime()) ? String(targetDateObj.getDate()).padStart(2, '0') : '26'
    const monthStr = targetDateObj && !isNaN(targetDateObj.getTime()) ? String(targetDateObj.getMonth() + 1).padStart(2, '0') : '12'
    const yearStr = targetDateObj && !isNaN(targetDateObj.getTime()) ? String(targetDateObj.getFullYear()).slice(-2) : '26'

    return {
        sectionRef,
        countdownConfig,
        dayStr,
        monthStr,
        yearStr,
        handleReveal,
        allRevealed,
        isScrollLocked,
    }
}
