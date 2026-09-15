import React from 'react'
import { motion } from 'framer-motion'

import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { getPaletteColors } from '@/common/helpers/palettes'
import photo11 from '@/assets/images/photos/1.jpg'
import icon from '@/assets/images/icons/icon-dress.code.svg'
import dressCodeFlowers from '@/assets/images/icons/dress-code-flowers.svg'

export const DressCodeSection: React.FC = () => {
    const { sections, theme } = useInvitationConfig()
    const dressCodeConfig = sections.dressCode
    const paletteColors = getPaletteColors(theme.palette)

    if (!dressCodeConfig?.showDressCode) {
        return null
    }

    return (
        <section id="dress-code" className="dress-code-section">

            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="dress-code-section__wave dress-code-section__wave--top transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 72.96650717703349,178.98564593301435 145.93301435406698,207.9712918660287 257,193 C 368.066985645933,178.0287081339713 517.2344497607656,119.10047846889952 627,92 C 736.7655502392344,64.89952153110048 807.1291866028707,69.62679425837321 885,86 C 962.8708133971293,102.37320574162679 1048.2488038277513,130.39234449760767 1142,143 C 1235.7511961722487,155.60765550239233 1337.8755980861242,152.80382775119617 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#f0ecd7" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,350 C 117.65550239234449,356.688995215311 235.31100478468898,363.37799043062205 328,368 C 420.688995215311,372.62200956937795 488.4114832535886,375.17703349282294 568,357 C 647.5885167464114,338.82296650717706 739.0430622009569,299.9138755980861 849,291 C 958.9569377990431,282.0861244019139 1087.4162679425838,303.1674641148325 1189,318 C 1290.5837320574162,332.8325358851675 1365.2918660287082,341.4162679425838 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#f0ecd7" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>

            <div className="dress-code-section__container">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-25% 10px ' }}
                    transition={{ duration: 1.2, delay: 0.15 }}
                    className="dress-code-section__photo-wrapper"
                >
                    <img
                        src={photo11}
                        alt="Quinceañera"
                        className="dress-code-section__photo"
                    />
                </motion.div>

                <div className="dress-code-section__content">
                    <div className="dress-code-section__card">

                        <div className="dress-code-section__header">
                            <SectionHeader
                                pretitle="Etiqueta del evento"
                                title={dressCodeConfig.title || 'Dress Code'}
                                align="center"
                            />
                        </div>

                        {dressCodeConfig.description && (
                            <p className="dress-code-section__card-description">
                                {dressCodeConfig.description}
                            </p>
                        )}

                        <div className="dress-code-section__icon">
                            <img src={icon} alt="Dress Code Icon" />
                        </div>

                        {(dressCodeConfig.attire?.women || dressCodeConfig.attire?.men) && (
                            <div className="dress-code-section__attire-list">
                                {dressCodeConfig.attire?.women && (
                                    <div className="dress-code-section__attire-item">
                                        <span className="dress-code-section__attire-label">Damas</span>
                                        <p className="dress-code-section__attire-row">
                                            {dressCodeConfig.attire.women}
                                        </p>
                                    </div>
                                )}
                                {dressCodeConfig.attire?.men && (
                                    <div className="dress-code-section__attire-item">
                                        <span className="dress-code-section__attire-label">Hombres</span>
                                        <p className="dress-code-section__attire-row">
                                            {dressCodeConfig.attire.men}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="dress-code-section__palette">
                            <p className="dress-code-section__palette-label">Paleta de colores</p>
                            <div className="dress-code-section__swatches">
                                {paletteColors.map((color, i) => (
                                    <span
                                        key={i}
                                        className="dress-code-section__swatch"
                                        style={{ backgroundColor: color }}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        <img
                            src={dressCodeFlowers}
                            alt=""
                            aria-hidden="true"
                            className="dress-code-section__card-flowers"
                        />

                    </div>
                </div>
            </div>
            <svg width="100%" height="100%" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="dress-code-section__wave dress-code-section__wave--bottom transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,150 C 72.96650717703349,178.98564593301435 145.93301435406698,207.9712918660287 257,193 C 368.066985645933,178.0287081339713 517.2344497607656,119.10047846889952 627,92 C 736.7655502392344,64.89952153110048 807.1291866028707,69.62679425837321 885,86 C 962.8708133971293,102.37320574162679 1048.2488038277513,130.39234449760767 1142,143 C 1235.7511961722487,155.60765550239233 1337.8755980861242,152.80382775119617 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#f0ecd7" fill-opacity="0.53"></path><path d="M 0,600 L 0,350 C 117.65550239234449,356.688995215311 235.31100478468898,363.37799043062205 328,368 C 420.688995215311,372.62200956937795 488.4114832535886,375.17703349282294 568,357 C 647.5885167464114,338.82296650717706 739.0430622009569,299.9138755980861 849,291 C 958.9569377990431,282.0861244019139 1087.4162679425838,303.1674641148325 1189,318 C 1290.5837320574162,332.8325358851675 1365.2918660287082,341.4162679425838 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#f0ecd7" fill-opacity="1"></path></svg>

        </section>
    )
}
