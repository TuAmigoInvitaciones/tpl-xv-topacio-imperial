import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import familyFlowers from '@/assets/images/icons/family-flowers.svg'
import photo from '@/assets/images/photos/9.jpg'

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const
const FLUID_EASE = [0.25, 0.46, 0.45, 0.94] as const

export const FamilySection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const familyConfig = sections.family

    if (!familyConfig?.showFamily) {
        return null
    }

    const parents: string[] = (familyConfig?.parents as string[]) || ['Alejandro Sánchez', 'Isela Carreón']
    const godparents: string[] = (familyConfig?.godparents as string[]) || ['Danna Janeth', 'Saulo Román']

    return (
        <section id="family" className="family-section">
            <motion.div
                className="family-section__container"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: EASE_LUXURY }}
            >
                <div className="family-section__card-outer-border">
                    <div className="family-section__card-inner">
                        <motion.div
                            className="family-section__flowers"
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: 0.15, ease: EASE_LUXURY }}
                        >
                            <img src={familyFlowers} alt="Flores" />
                        </motion.div>

                        <div className="family-section__text">
                            <motion.div
                                className="family-section__group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: FLUID_EASE }}
                            >
                                <motion.span
                                    className="family-section__pretitle"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.25 }}
                                >
                                    Con la bendición de
                                </motion.span>
                                <motion.h2
                                    className="family-section__role"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.3, ease: EASE_LUXURY }}
                                >
                                    Mis Padres
                                </motion.h2>
                                <div className="family-section__names">
                                    {parents.map((name, index) => (
                                        <React.Fragment key={index}>
                                            <motion.p
                                                className="family-section__name"
                                                initial={{ opacity: 0, x: 15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.35 + index * 0.1, ease: FLUID_EASE }}
                                            >
                                                {name}
                                            </motion.p>
                                            {index < parents.length - 1 && (
                                                <motion.span
                                                    className="family-section__ampersand"
                                                    initial={{ opacity: 0, scale: 0.6 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                                >
                                                    &
                                                </motion.span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="family-section__divider"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.48, ease: FLUID_EASE }}
                            >
                                <p className="family-section__phrase">Y el cariño incondicional de</p>
                            </motion.div>

                            <motion.div
                                className="family-section__group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.55, ease: FLUID_EASE }}
                            >
                                <motion.h2
                                    className="family-section__role"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.58, ease: EASE_LUXURY }}
                                >
                                    Mis Padrinos
                                </motion.h2>
                                <motion.span
                                    className="family-section__role-subtitle"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.62 }}
                                >
                                    Padrinos de Honor
                                </motion.span>
                                <div className="family-section__names">
                                    {godparents.map((name, index) => (
                                        <React.Fragment key={index}>
                                            <motion.p
                                                className="family-section__name"
                                                initial={{ opacity: 0, x: 15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.65 + index * 0.1, ease: FLUID_EASE }}
                                            >
                                                {name}
                                            </motion.p>
                                            {index < godparents.length - 1 && (
                                                <motion.span
                                                    className="family-section__ampersand"
                                                    initial={{ opacity: 0, scale: 0.6 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                                >
                                                    &
                                                </motion.span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="family-section__message"
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.72, ease: FLUID_EASE }}
                            >
                                <p>Gracias por guiar mis pasos, celebrar mis sueños y acompañarme en este momento tan especial.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="family-section__photo"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.1, delay: 0.2, ease: EASE_LUXURY }}
            >
                <img src={photo} alt="Michelle Foto" />
            </motion.div>
        </section>
    )
}
