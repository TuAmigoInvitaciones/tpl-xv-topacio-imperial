import React from 'react'
import { motion } from 'framer-motion'
import { LinkIcon } from '@phosphor-icons/react'
import { useTicket, useInvitationConfig, useNavigation } from '@/common/hooks'
import { Button } from '@/common/components/button/Button'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'

import envelopeSvg from '@/assets/images/icons/envelope.svg'
import selloSvg from '@/assets/images/icons/sello.svg'
import photo7 from '@/assets/images/photos/7.jpg'
import bg from '@/assets/images/backgrounds/bg-rsvp.svg'

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const

export const RsvpSection: React.FC = () => {
    const { goTo } = useNavigation()
    const { ticket } = useTicket()
    const { config, sections } = useInvitationConfig()

    const showTicketSystem = Boolean(config?.hasTicketingSystem || sections?.ticket?.showTicket)
    if (!showTicketSystem) return null

    const guestName = ticket?.name || 'Familia & Amigos'

    return (
        <section id="rsvp" className="rsvp">
            <div className="rsvp__bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="rsvp__container">
                <div className="rsvp__envelope-wrapper">
                    <motion.div
                        className="rsvp__envelope-back"
                        initial={{ opacity: 0, y: 35, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.1, ease: EASE_LUXURY }}
                    >
                        <img
                            src={envelopeSvg}
                            alt="Sobre de invitación"
                            className="rsvp__envelope-img"
                        />
                    </motion.div>

                    <div className="rsvp__cards-container">
                        <motion.div
                            className="rsvp__card"
                            initial={{ opacity: 0, y: 55, x: '-50%', scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.35, ease: EASE_LUXURY }}
                            whileHover={{ x: '-50%', y: -6, rotate: -0.8, transition: { duration: 0.35, ease: 'easeOut' } }}
                        >
                            <motion.button
                                type="button"
                                className="rsvp__seal-btn"
                                onClick={() => goTo('/ticket')}
                                aria-label="Ver más detalles de los pases"
                                initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.95, delay: 0.75, ease: [0.34, 1.25, 0.64, 1] }}
                                whileHover={{ scale: 1.08, rotate: 4, transition: { duration: 0.25 } }}
                                whileTap={{ scale: 0.94 }}
                            >
                                <div className="rsvp__seal-bg">
                                    <img src={selloSvg} alt="Sello" className="rsvp__seal-img" />
                                </div>
                            </motion.button>

                            <div className="rsvp__card-outer-border">
                                <div className="rsvp__card-inner">
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.55, ease: EASE_LUXURY }}
                                    >
                                        <SectionHeader
                                            pretitle="Rsvp"
                                            title="Tus Boletos"
                                            align="center"
                                        />
                                    </motion.div>

                                    <motion.h3
                                        className="rsvp__card-name"
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.68, ease: EASE_LUXURY }}
                                    >
                                        {guestName}
                                    </motion.h3>

                                    <motion.p
                                        className="rsvp__card-message"
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.8, ease: EASE_LUXURY }}
                                    >
                                        Revisa tus boletos asignados y confirma tu asistencia.
                                    </motion.p>

                                    <motion.div
                                        className="rsvp__card-action"
                                        initial={{ opacity: 0, y: 14, scale: 0.96 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.92, ease: EASE_LUXURY }}
                                    >
                                        <Button
                                            variant="secondary"
                                            size="md"
                                            radius="full"
                                            icon={<LinkIcon size={20} weight='thin' />}
                                            onClick={() => goTo('/ticket')}
                                        >
                                            Ver boletos
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="rsvp__polaroid"
                        initial={{ opacity: 0, y: -30, x: '-50%', rotate: 8, scale: 0.94 }}
                        whileInView={{ opacity: 1, y: 0, x: '-50%', rotate: 18, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: 0.25, ease: EASE_LUXURY }}
                        whileHover={{ x: '-50%', y: -6, rotate: 20, scale: 1.03, transition: { duration: 0.35, ease: 'easeOut' } }}
                    >
                        <div className="rsvp__polaroid-img-box">
                            <img
                                src={photo7}
                                alt="Foto de la festejada"
                                className="rsvp__polaroid-img"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
