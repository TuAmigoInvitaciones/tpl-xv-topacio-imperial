import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import familyFlowers from '@/assets/images/icons/family-flowers.svg'
import photo from '@/assets/images/photos/9.jpg'

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const

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
                        <div className="family-section__flowers">
                            <img src={familyFlowers} alt="Flores" />
                        </div>

                        <div className="family-section__text">
                            <div className="family-section__group">
                                <span className="family-section__pretitle">Con la bendición de</span>
                                <h2 className="family-section__role">Mis Padres</h2>
                                <div className="family-section__names">
                                    {parents.map((name, index) => (
                                        <React.Fragment key={index}>
                                            <p className="family-section__name">{name}</p>
                                            {index < parents.length - 1 && (
                                                <span className="family-section__ampersand">&</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <div className="family-section__divider">
                                <p className="family-section__phrase">Y el cariño incondicional de</p>
                            </div>

                            <div className="family-section__group">
                                <h2 className="family-section__role">Mis Padrinos</h2>
                                <span className="family-section__role-subtitle">Padrinos de Honor</span>
                                <div className="family-section__names">
                                    {godparents.map((name, index) => (
                                        <React.Fragment key={index}>
                                            <p className="family-section__name">{name}</p>
                                            {index < godparents.length - 1 && (
                                                <span className="family-section__ampersand">&</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <div className="family-section__message">
                                <p>Gracias por guiar mis pasos, celebrar mis sueños y acompañarme en este momento tan especial.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="family-section__photo">
                <img src={photo} alt="Michelle Foto" />
            </div>
        </section>
    )
}
