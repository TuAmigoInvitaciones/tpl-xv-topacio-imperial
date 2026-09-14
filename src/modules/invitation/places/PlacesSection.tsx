import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Button } from '@/common/components/button/Button'
import { MapPinIcon } from '@phosphor-icons/react'
import { Formatter } from '@/common/helpers/formatter'

import logo from '@/assets/images/icons/logo.svg'
import flowersCard1 from '@/assets/images/icons/flowers-locations-card-1.svg'
import flowersCard2 from '@/assets/images/icons/flowers-locations-card-2.svg'

import iconChurch from '@/assets/images/icons/icon-church.svg'
import iconParty from '@/assets/images/icons/icon-party.svg'
import decoration from '@/assets/images/icons/locations.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const getCardVariant = (idx: number) => ({
    initial: { opacity: 0, x: idx % 2 === 0 ? -35 : 35, y: 15 },
    animate: { opacity: 1, x: 0, y: 0 },
})

export const PlacesSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const placesConfig = sections.places

    if (!placesConfig?.showPlaces || !placesConfig?.locations) {
        return null
    }

    return (
        <section id="places" className="places-section">
            <div className="places-section__container">

                <div className="places-section__logo">
                    <img src={logo} alt="Michelle Logo" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.1, delay: 0.2, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        pretitle="Dónde y Cuándo"
                        title="Ubicaciones"
                        align="center"
                    />
                </motion.div>

                <p className='places-section__text'>No te puedes perder ningún momento de mi celebración. Guarda las ubicaciones y acompáñame en cada una de ellas.</p>

                {placesConfig.locations[0].date && (
                    <motion.p
                        className="places-item__date"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.8, delay: 0.5, ease: FLUID_EASE }}
                    >
                        {Formatter.formatLocalDate(placesConfig.locations[0].date)}
                    </motion.p>
                )}

                <div className="places-section__grid">
                    {placesConfig.locations.map((loc, idx) => {
                        const variant = getCardVariant(idx)
                        return (
                            <React.Fragment key={idx}>
                                <motion.div
                                    className={`places-item places-item--${idx + 1}`}
                                    initial={variant.initial}
                                    whileInView={variant.animate}
                                    viewport={{ once: true, margin: '-10% 0px' }}
                                    transition={{ duration: 1.1, delay: 0.35 + idx * 0.22, ease: FLUID_EASE }}
                                >
                                    <div className="places-item__icon">
                                        {
                                            idx === 0 ? <img src={iconChurch} alt="Iglesia" /> : <img src={iconParty} alt="Fiesta" />
                                        }
                                    </div>

                                    {idx === 0 && (
                                        <div className="places-item__corner-flower places-item__corner-flower--top-left">
                                            <img src={flowersCard1} alt="Decoración floral" />
                                        </div>
                                    )}

                                    {idx === 1 && (
                                        <div className="places-item__corner-flower places-item__corner-flower--bottom-right">
                                            <img src={flowersCard2} alt="Decoración floral" />
                                        </div>
                                    )}

                                    {loc.venue && (
                                        <p className="places-item__venue">{loc.venue}</p>
                                    )}

                                    {loc.title && (
                                        <h3 className="places-item__title">{loc.title}</h3>
                                    )}

                                    {loc.time && (
                                        <p className="places-item__time">{loc.time}</p>
                                    )}


                                    {loc.location && (
                                        <p className="places-item__address">{loc.location}</p>
                                    )}

                                    {loc.url && (
                                        <Button
                                            icon={<MapPinIcon size={20} weight="thin" />}
                                            radius="full"
                                            variant='secondary'
                                            onClick={() => window.open(loc.url, '_blank')}
                                            className="places-item__button"
                                        >
                                            Ver ubicación
                                        </Button>
                                    )}
                                </motion.div>

                                {idx < placesConfig.locations.length - 1 && (
                                    <div className="places-section__decoration">
                                        <img src={decoration} alt="Decoración de lugar" />
                                    </div>
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
