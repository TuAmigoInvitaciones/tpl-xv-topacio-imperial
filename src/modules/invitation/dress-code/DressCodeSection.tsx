import React from 'react'
import { motion } from 'framer-motion'

import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { getPaletteColors } from '@/common/helpers/palettes'
import photo11 from '@/assets/images/photos/1.jpg'
import icon from '@/assets/images/icons/icon-dress.code.svg'
import dressCodeFlowers from '@/assets/images/icons/dress-code-flowers.svg'

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const
const FLUID_EASE = [0.25, 0.46, 0.45, 0.94] as const

export const DressCodeSection: React.FC = () => {
    const { sections, theme } = useInvitationConfig()
    const dressCodeConfig = sections.dressCode
    const paletteColors = getPaletteColors(theme.palette)

    if (!dressCodeConfig?.showDressCode) {
        return null
    }

    return (
        <section id="dress-code" className="dress-code-section">

            <motion.svg
                width="100%"
                height="100%"
                id="svg"
                viewBox="0 0 1440 590"
                xmlns="http://www.w3.org/2000/svg"
                className="dress-code-section__wave dress-code-section__wave--top transition duration-300 ease-in-out delay-150"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: FLUID_EASE }}
            >
                <path d="M 0,600 L 0,150 C 72.96650717703349,178.98564593301435 145.93301435406698,207.9712918660287 257,193 C 368.066985645933,178.0287081339713 517.2344497607656,119.10047846889952 627,92 C 736.7655502392344,64.89952153110048 807.1291866028707,69.62679425837321 885,86 C 962.8708133971293,102.37320574162679 1048.2488038277513,130.39234449760767 1142,143 C 1235.7511961722487,155.60765550239233 1337.8755980861242,152.80382775119617 1440,150 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#f0ecd7" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
                <path d="M 0,600 L 0,350 C 117.65550239234449,356.688995215311 235.31100478468898,363.37799043062205 328,368 C 420.688995215311,372.62200956937795 488.4114832535886,375.17703349282294 568,357 C 647.5885167464114,338.82296650717706 739.0430622009569,299.9138755980861 849,291 C 958.9569377990431,282.0861244019139 1087.4162679425838,303.1674641148325 1189,318 C 1290.5837320574162,332.8325358851675 1365.2918660287082,341.4162679425838 1440,350 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#f0ecd7" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
            </motion.svg>

            <div className="dress-code-section__container">

                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-20% 0px' }}
                    transition={{ duration: 1.1, delay: 0.15, ease: EASE_LUXURY }}
                    className="dress-code-section__photo-wrapper"
                >
                    <img
                        src={photo11}
                        alt="Quinceañera"
                        className="dress-code-section__photo"
                    />
                </motion.div>

                <div className="dress-code-section__content">
                    <motion.div
                        className="dress-code-section__card"
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.0, ease: EASE_LUXURY }}
                    >

                        <motion.div
                            className="dress-code-section__header"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.75, delay: 0.15, ease: FLUID_EASE }}
                        >
                            <SectionHeader
                                pretitle="Etiqueta del evento"
                                title={dressCodeConfig.title || 'Dress Code'}
                                align="center"
                            />
                        </motion.div>

                        {dressCodeConfig.description && (
                            <motion.p
                                className="dress-code-section__card-description"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.75, delay: 0.22, ease: FLUID_EASE }}
                            >
                                {dressCodeConfig.description}
                            </motion.p>
                        )}

                        <motion.div
                            className="dress-code-section__icon"
                            initial={{ opacity: 0, scale: 0.65 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.75, delay: 0.28, ease: EASE_LUXURY }}
                        >
                            <img src={icon} alt="Dress Code Icon" />
                        </motion.div>

                        {(dressCodeConfig.attire?.women || dressCodeConfig.attire?.men) && (
                            <div className="dress-code-section__attire-list">
                                {dressCodeConfig.attire?.women && (
                                    <motion.div
                                        className="dress-code-section__attire-item"
                                        initial={{ opacity: 0, x: -25 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.75, delay: 0.32, ease: FLUID_EASE }}
                                    >
                                        <span className="dress-code-section__attire-label">Damas</span>
                                        <p className="dress-code-section__attire-row">
                                            {dressCodeConfig.attire.women}
                                        </p>
                                    </motion.div>
                                )}
                                {dressCodeConfig.attire?.men && (
                                    <motion.div
                                        className="dress-code-section__attire-item"
                                        initial={{ opacity: 0, x: 25 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.75, delay: 0.38, ease: FLUID_EASE }}
                                    >
                                        <span className="dress-code-section__attire-label">Hombres</span>
                                        <p className="dress-code-section__attire-row">
                                            {dressCodeConfig.attire.men}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        )}

                        <motion.div
                            className="dress-code-section__palette"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.42, ease: FLUID_EASE }}
                        >
                            <p className="dress-code-section__palette-label">Paleta de colores</p>
                            <div className="dress-code-section__swatches">
                                {paletteColors.map((color, i) => (
                                    <motion.span
                                        key={i}
                                        className="dress-code-section__swatch"
                                        style={{ backgroundColor: color }}
                                        title={color}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.48 + i * 0.08,
                                            ease: EASE_LUXURY,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        <motion.img
                            src={dressCodeFlowers}
                            alt=""
                            aria-hidden="true"
                            className="dress-code-section__card-flowers"
                            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                            whileInView={{ opacity: 0.85, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.0, delay: 0.35, ease: EASE_LUXURY }}
                        />

                    </motion.div>
                </div>
            </div>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 590"
                xmlns="http://www.w3.org/2000/svg"
                className="dress-code-section__wave dress-code-section__wave--bottom transition duration-300 ease-in-out delay-150"
            >
                <path d="M 0,600 L 0,150 C 72.96650717703349,178.98564593301435 145.93301435406698,207.9712918660287 257,193 C 368.066985645933,178.0287081339713 517.2344497607656,119.10047846889952 627,92 C 736.7655502392344,64.89952153110048 807.1291866028707,69.62679425837321 885,86 C 962.8708133971293,102.37320574162679 1048.2488038277513,130.39234449760767 1142,143 C 1235.7511961722487,155.60765550239233 1337.8755980861242,152.80382775119617 1440,150 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#f0ecd7" fillOpacity="0.53"></path>
                <path d="M 0,600 L 0,350 C 117.65550239234449,356.688995215311 235.31100478468898,363.37799043062205 328,368 C 420.688995215311,372.62200956937795 488.4114832535886,375.17703349282294 568,357 C 647.5885167464114,338.82296650717706 739.0430622009569,299.9138755980861 849,291 C 958.9569377990431,282.0861244019139 1087.4162679425838,303.1674641148325 1189,318 C 1290.5837320574162,332.8325358851675 1365.2918660287082,341.4162679425838 1440,350 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#f0ecd7" fillOpacity="1"></path>
            </svg>

        </section>
    )
}
