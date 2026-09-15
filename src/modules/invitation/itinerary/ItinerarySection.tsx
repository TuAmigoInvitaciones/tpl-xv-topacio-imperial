import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import decoration from '@/assets/images/icons/itinerary-flowers.svg'
import ceremoniaIcon from '@/assets/images/icons/ceremonia-icon.svg'
import recepcionIcon from '@/assets/images/icons/recepcion-icon.svg'
import cenaIcon from '@/assets/images/icons/cena-icon.svg'
import valsIcon from '@/assets/images/icons/vals-icon.svg'
import musicIcon from '@/assets/images/icons/music-icon.svg'
import finIcon from '@/assets/images/icons/fin-icon.svg'

const getAmenityIcon = (event: string, index: number) => {
    const norm = event.toLowerCase()
    if (norm.includes('ceremonia') || norm.includes('iglesia') || norm.includes('misa') || norm.includes('religios')) {
        return ceremoniaIcon
    }
    if (norm.includes('recep') || norm.includes('bienvenida') || norm.includes('invitados')) {
        return recepcionIcon
    }
    if (norm.includes('cena') || norm.includes('comida') || norm.includes('banquete') || norm.includes('almuerzo')) {
        return cenaIcon
    }
    if (norm.includes('vals') || norm.includes('baile') || norm.includes('brindis')) {
        return valsIcon
    }
    if (norm.includes('música') || norm.includes('musica') || norm.includes('banda') || norm.includes('pista') || norm.includes('dj') || norm.includes('fiesta')) {
        return musicIcon
    }
    if (norm.includes('fin') || norm.includes('despedida') || norm.includes('cierre')) {
        return finIcon
    }
    const defaultIcons = [ceremoniaIcon, recepcionIcon, cenaIcon, valsIcon, musicIcon, finIcon]
    return defaultIcons[index % defaultIcons.length]
}

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const
const FLUID_EASE = [0.25, 0.46, 0.45, 0.94] as const

export const ItinerarySection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const itineraryConfig = sections.itinerary

    if (!itineraryConfig?.showItinerary || !itineraryConfig?.itinerary?.length) {
        return null
    }

    return (
        <section id="itinerary" className="itinerary-section">
            <div className="itinerary-section__container">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.9, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        pretitle="Cronograma"
                        title="Itinerario del Evento"
                        align="center"
                    />
                </motion.div>

                <div className="itinerary-section__timeline">
                    <motion.div
                        className="itinerary-section__line"
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-5% 0px' }}
                        style={{ originY: 0 }}
                        transition={{ duration: 1.2, ease: EASE_LUXURY }}
                    />

                    {itineraryConfig.itinerary.map((item, index) => {
                        const icon = getAmenityIcon(item.event, index)
                        return (
                            <motion.div
                                key={index}
                                className="itinerary-item"
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-6% 0px' }}
                                transition={{
                                    duration: 0.75,
                                    delay: index * 0.1,
                                    ease: FLUID_EASE,
                                }}
                            >
                                {/* Ícono de la amenidad */}
                                <div className="itinerary-item__icon-wrapper">
                                    <motion.div
                                        className="itinerary-item__icon-placeholder"
                                        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.65,
                                            delay: index * 0.1 + 0.1,
                                            ease: EASE_LUXURY,
                                        }}
                                    >
                                        {icon && <img src={icon} alt={item.event} className="itinerary-item__icon-img" />}
                                    </motion.div>
                                </div>

                                {/* Punto de la línea */}
                                <div className="itinerary-item__dot" />

                                {/* Contenido */}
                                <motion.div
                                    className="itinerary-item__content"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.1 + 0.15,
                                        ease: FLUID_EASE,
                                    }}
                                >
                                    <span className="itinerary-item__time">{item.time}</span>
                                    <p className="itinerary-item__event">{item.event}</p>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>


            </div>
            <motion.div
                className="itinerary-section__decoration"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 1.0, ease: EASE_LUXURY }}
            >
                <img src={decoration} alt="decoration" />
            </motion.div>
        </section>
    )
}
