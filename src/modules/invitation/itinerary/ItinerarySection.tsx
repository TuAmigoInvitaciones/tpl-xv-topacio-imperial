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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <SectionHeader
                        pretitle="Cronograma"
                        title="Itinerario del Evento"
                        align="center"
                    />
                </motion.div>

                <div className="itinerary-section__timeline">
                    <div className="itinerary-section__line" />

                    {itineraryConfig.itinerary.map((item, index) => {
                        const icon = getAmenityIcon(item.event, index)
                        return (
                            <motion.div
                                key={index}
                                className="itinerary-item"
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-8% 0px' }}
                                transition={{
                                    duration: 0.75,
                                    delay: index * 0.08,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                            >
                                {/* Ícono de la amenidad */}
                                <div className="itinerary-item__icon-wrapper">
                                    <div className="itinerary-item__icon-placeholder">
                                        {icon && <img src={icon} alt={item.event} className="itinerary-item__icon-img" />}
                                    </div>
                                </div>

                                {/* Punto de la línea */}
                                <div className="itinerary-item__dot" />

                                {/* Contenido */}
                                <div className="itinerary-item__content">
                                    <span className="itinerary-item__time">{item.time}</span>
                                    <p className="itinerary-item__event">{item.event}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>


            </div>
            <div className="itinerary-section__decoration">
                <img src={decoration} alt="decoration" />
            </div>
        </section>
    )
}
