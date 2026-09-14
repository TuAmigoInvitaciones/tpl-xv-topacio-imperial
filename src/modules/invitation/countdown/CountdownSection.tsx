import React from 'react'
import { CalendarPlusIcon } from '@phosphor-icons/react'
import { useSaveTheDate } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Countdown } from '@/common/components/countdown/Countdown'
import { ScratchCard } from '@/common/components/scratch-card/ScratchCard'
import { Button } from '@/common/components/button/Button'
import { useCountdownSection } from './useCountdownSection'

import decoration from '@/assets/images/icons/countdown-flowers-1.svg'
import decoration2 from '@/assets/images/icons/countdown-flowers-2.svg'
import photo from '@/assets/images/photos/8.jpg'

export const CountdownSection: React.FC = () => {
    const {
        sectionRef,
        countdownConfig,
        dayStr,
        monthStr,
        yearStr,
        handleReveal,
    } = useCountdownSection()
    const { downloadSaveTheDate } = useSaveTheDate()

    if (!countdownConfig?.showCountdown || !countdownConfig?.targetDate) {
        return null
    }

    return (
        <>
            <section id="countdown" ref={sectionRef} className="countdown-section">
                <div className="countdown-section__decoration countdown-section__decoration--1">
                    <img
                        src={decoration}
                        alt="Decoración"
                    />
                </div>

                <div className="countdown-section__decoration countdown-section__decoration--2">
                    <img
                        src={decoration2}
                        alt="Decoración"
                    />
                </div>

                <div className="countdown-section__container">
                    <SectionHeader
                        pretitle="Cuenta Regresiva"
                        title="Fecha Especial"
                        align="center"
                    />

                    <p className="countdown-section__instruction">
                        Rasca sobre los círculos dorados y descubre el día en que celebraremos juntos este gran sueño.
                    </p>

                    <div className="countdown-section__date">
                        <div className="countdown-section__box">
                            <div className="countdown-section__circle-container">
                                <ScratchCard
                                    shape="circle"
                                    foilColor="gold"
                                    brushSize={16}
                                    revealPercent={38}
                                    overlayText=""
                                    className="countdown-section__scratch"
                                    confettiParticleCount={120}
                                    confettiColors={['#D4AF37', '#FFD700', '#F3E5AB', '#FFFFFF']}
                                    onReveal={() => handleReveal('day')}
                                >
                                    <div className="countdown-section__card-content">
                                        <span className="countdown-section__number">{dayStr}</span>
                                    </div>
                                </ScratchCard>
                            </div>
                            <span className="countdown-section__box-label">Día</span>
                        </div>

                        <div className="countdown-section__box">
                            <div className="countdown-section__circle-container">
                                <ScratchCard
                                    shape="circle"
                                    foilColor="gold"
                                    brushSize={16}
                                    revealPercent={38}
                                    overlayText=""
                                    className="countdown-section__scratch"
                                    confettiParticleCount={120}
                                    confettiColors={['#D4AF37', '#FFD700', '#F3E5AB', '#FFFFFF']}
                                    onReveal={() => handleReveal('month')}
                                >
                                    <div className="countdown-section__card-content">
                                        <span className="countdown-section__number">{(monthStr === '12') ? 'DIC' : monthStr}</span>
                                    </div>
                                </ScratchCard>
                            </div>
                            <span className="countdown-section__box-label">Mes</span>
                        </div>

                        <div className="countdown-section__box">
                            <div className="countdown-section__circle-container">
                                <ScratchCard
                                    shape="circle"
                                    foilColor="gold"
                                    brushSize={16}
                                    revealPercent={38}
                                    overlayText=""
                                    className="countdown-section__scratch"
                                    confettiParticleCount={120}
                                    confettiColors={['#D4AF37', '#FFD700', '#F3E5AB', '#FFFFFF']}
                                    onReveal={() => handleReveal('year')}
                                >
                                    <div className="countdown-section__card-content">
                                        <span className="countdown-section__number">{yearStr}</span>
                                    </div>
                                </ScratchCard>
                            </div>
                            <span className="countdown-section__box-label">Año</span>
                        </div>
                    </div>

                    <div className="countdown-section__button">
                        <Button
                            variant="secondary"
                            radius="full"
                            icon={<CalendarPlusIcon size={20} weight='thin' className="countdown-section__btn-icon" />}
                            onClick={() => downloadSaveTheDate()}
                            className="countdown-section__btn"
                        >
                            Guardar Recordatorio
                        </Button>
                    </div>
                </div>
            </section>
            <div className="countdown-section__countdown">
                <div className="countdown-section__overlay"></div>
                <div className="countdown-section__photo">
                    <img src={photo} alt="Foto de la Quinceañera" />
                </div>
                <Countdown
                    className='countdown-section__timer'
                    targetDate={countdownConfig.targetDate}
                    variant="glass"
                />
            </div >
        </>
    )
}
