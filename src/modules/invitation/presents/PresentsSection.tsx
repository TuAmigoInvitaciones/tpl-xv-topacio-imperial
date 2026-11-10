import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    GiftIcon,
    BankIcon,
    EnvelopeOpenIcon,
    CopyIcon,
    CheckIcon,
    ArrowSquareOutIcon
} from '@phosphor-icons/react'
import { useInvitationConfig, useToast } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Accordion } from '@/common/components/accordion/Accordion'
import type { AccordionItem } from '@/common/types'
import { Button } from '@/common/components/button/Button'

import flower1 from '@/assets/images/icons/presents-flower-1.svg';
import flower2 from '@/assets/images/icons/presents-flower-2.svg';
import flower3 from '@/assets/images/icons/presents-flower-3.svg';

const FLUID_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const PresentsSection: React.FC = () => {

    const { sections } = useInvitationConfig()
    const presentsConfig = sections.presents
    const { showSuccess } = useToast()
    const [copiedClabe, setCopiedClabe] = useState(false)

    if (!presentsConfig?.showPresents) {
        return null
    }

    const { url, bankDetails, envelopeRain } = presentsConfig

    const handleCopyClabe = async (clabe: string) => {
        await navigator.clipboard.writeText(clabe)
        setCopiedClabe(true)
        showSuccess('CLABE copiada al portapapeles')
        setTimeout(() => setCopiedClabe(false), 2500)
    }

    const accordionItems: AccordionItem[] = []

    if (url) {
        accordionItems.push({
            id: 'liverpool-registry',
            title: 'Mesa de Regalos',
            icon: <GiftIcon size={25} weight="light" />,
            defaultOpen: true,
            content: (
                <div className="presents-section__accordion-content">
                    <p className="presents-section__card-text">
                        El mejor regalo es tu presencia en este día tan especial, pero si deseas
                        tener un detalle conmigo, puedes encontrar sugerencias en mi mesa de
                        regalos digital.
                    </p>
                    <div className="presents-section__card-action">
                        <Button
                            variant="tertiary"
                            radius="full"
                            icon={<ArrowSquareOutIcon size={18} weight="bold" />}
                            iconPosition="right"
                            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
                            className="presents-section__card-button"
                        >
                            Ver en Amazon
                        </Button>
                    </div>
                    <div className="presents-section__card-flower presents-section__card-flower--center">
                        <img src={flower1} alt="Flower Decoration" />
                    </div>
                </div>
            )
        })
    }

    if (bankDetails) {
        accordionItems.push({
            id: 'bank-transfer',
            title: 'Transferencia Bancaria',
            icon: <BankIcon size={25} weight="light" />,
            defaultOpen: true,

            content: (
                <div className="presents-section__accordion-content">
                    <div className="presents-section__bank-info">
                        {bankDetails.bank && (
                            <div className="presents-section__bank-row">
                                <span className="presents-section__bank-label">Banco</span>
                                <span className="presents-section__bank-value">{bankDetails.bank}</span>
                            </div>
                        )}
                        {bankDetails.holder && (
                            <div className="presents-section__bank-row">
                                <span className="presents-section__bank-label">Beneficiario</span>
                                <span className="presents-section__bank-value">{bankDetails.holder}</span>
                            </div>
                        )}
                        {bankDetails.account && (
                            <div className="presents-section__bank-row">
                                <span className="presents-section__bank-label">Cuenta / Tarjeta</span>
                                <span className="presents-section__bank-value">{bankDetails.account}</span>
                            </div>
                        )}
                        {bankDetails.clabe && (
                            <div className="presents-section__bank-row presents-section__bank-row--clabe">
                                <span className="presents-section__bank-label">CLABE Interbancaria</span>
                                <span className="presents-section__bank-value presents-section__bank-value--clabe">
                                    {bankDetails.clabe}
                                </span>
                            </div>
                        )}
                    </div>

                    {bankDetails.clabe && (
                        <div className="presents-section__card-action">
                            <Button
                                variant="tertiary"
                                radius="full"
                                icon={copiedClabe ? <CheckIcon size={18} weight="bold" /> : <CopyIcon size={18} weight="bold" />}
                                iconPosition="left"
                                onClick={() => handleCopyClabe(bankDetails.clabe!)}
                                className="presents-section__card-button"
                            >
                                {copiedClabe ? '¡CLABE Copiada!' : 'Copiar CLABE'}
                            </Button>
                        </div>
                    )}

                    <div
                        className="presents-section__card-flor presents-section__card-flor--bottom-right"
                    >
                        <img src={flower3} alt="Flower Decoration" />
                    </div>
                    <div
                        className="presents-section__card-flor presents-section__card-flor--top-left"
                    >
                        <img src={flower3} alt="Flower Decoration" />
                    </div>
                </div>
            )
        })
    }

    if (envelopeRain) {
        accordionItems.push({
            id: 'envelope-rain',
            title: 'Lluvia de Sobres',
            icon: <EnvelopeOpenIcon size={25} weight="light" />,
            defaultOpen: true,
            content: (
                <div className="presents-section__accordion-content presents-section__accordion-content--envelope">
                    <p className="presents-section__card-text">
                        La lluvia de sobres es la tradición de entregar un presente en efectivo
                        dentro de un sobre el día del evento. Habrá un buzón especial en la
                        recepción para depositarlo con tus mejores deseos.
                    </p>
                    <div className="presents-section__card-flower presents-section__card-flower--center">
                        <img src={flower2} alt="Flower Decoration 2" />
                    </div>

                </div>
            )
        })
    }

    return (
        <section id="presents" className="presents-section">
            <div className="presents-section__container">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        pretitle="Los Obsequios"
                        title={presentsConfig.title || 'Mesa de Regalos'}
                        align="center"
                    />
                </motion.div>

                {presentsConfig.description && (
                    <motion.p
                        className="presents-section__description"
                        initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.9, delay: 0.15, ease: FLUID_EASE }}
                    >
                        {presentsConfig.description}
                    </motion.p>
                )}

                {accordionItems.length > 0 && (
                    <motion.div
                        className="presents-section__accordion-wrapper"
                        initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: '-8% 0px' }}
                        transition={{ duration: 1, delay: 0.25, ease: FLUID_EASE }}
                    >
                        <Accordion
                            items={accordionItems}
                            variant="separated"
                            allowMultiple
                        />
                    </motion.div>
                )}
            </div>

            {/* Placeholder: Ilustración decorativa inferior de la sección */}
            <div
                className="presents-section__img presents-section__img--bottom"
                aria-hidden="true"
            />
        </section>
    )
}
