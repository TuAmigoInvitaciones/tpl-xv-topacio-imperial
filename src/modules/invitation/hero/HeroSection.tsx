import React from 'react'
import { useInvitationConfig } from '@/common/hooks'
import { Particles } from '@/common/components/particles/Particles'

import photo from '@/assets/images/photos/4.jpg'
import misXvBanner from '@/assets/images/icons/mis-xv-banner.svg'

export const HeroSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const heroConfig = sections.hero

    if (heroConfig?.showHero === false) {
        return null
    }

    const eventTitle = heroConfig?.names || heroConfig?.title || ''
    const eventDate = heroConfig?.date || ''

    return (
        <section id="hero" className="hero-section">
            <Particles
                variant="glitter"
                count={30}
                colors={['#FFFFFF', '#FFF8DC', '#FFD700', '#D4AF37', '#F3E5AB', '#E6CA65', '#FFF3CD', '#E5E4E2', '#C0C0C0']}
                minSize={3.5}
                maxSize={6.5}
                speed={0.85}
                direction="down"
                zIndex={3}
            />

            <div className="hero-section__img" style={{ backgroundImage: `url(${photo})` }}>
                <div className="hero-section__fade"></div>
            </div>

            <div className="hero-section__banner-wrapper">
                <img
                    src={misXvBanner}
                    alt="Mis XV"
                    className="hero-section__banner"
                />
                {eventDate && (
                    <span className="hero-section__date">{eventDate}</span>
                )}
            </div>

            <div className="hero-section__container">
                {eventTitle && (
                    <h1 className="hero-section__title">
                        {eventTitle.split(/\s+/).filter(Boolean).map((word, index) => (
                            <span key={index} className={`hero-section__title-word hero-section__title-word--${index + 1}`}>
                                <span className={`hero-section__title-initial hero-section__title-initial--${index + 1}`}>{word.charAt(0)}</span>{word.slice(1)}
                            </span>
                        ))}
                    </h1>
                )}
            </div>
        </section>
    )
}