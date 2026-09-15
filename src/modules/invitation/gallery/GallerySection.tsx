import React from 'react'
import { motion } from 'framer-motion'
import { MagnifyingGlassPlusIcon } from '@phosphor-icons/react'
import { useInvitationConfig, useModal } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { MODAL_NAMES } from '@/store/ui/modal.slice'

import photo2 from '@/assets/images/photos/2.jpg'
import photo3 from '@/assets/images/photos/3.jpg'
import photo5 from '@/assets/images/photos/5.jpg'
import photo6 from '@/assets/images/photos/6.jpg'
import photo12 from '@/assets/images/photos/12.jpg'

interface GalleryPhoto {
    id: number
    src: string
    alt: string
    caption: string
    subtitle?: string
    objectPosition?: string
    orientation: 'vertical' | 'horizontal'
}

const VERTICAL_PHOTOS: GalleryPhoto[] = [
    {
        id: 0,
        src: photo6,
        alt: 'Sesión XV - Retrato Principal',
        caption: 'Nuestra Quinceañera',
        subtitle: 'Un momento radiante',
        objectPosition: 'center 20%',
        orientation: 'vertical'
    },
    {
        id: 1,
        src: photo12,
        alt: 'Sesión XV - Elegancia en el Bosque',
        caption: 'Elegancia & Encanto',
        subtitle: 'Entre la naturaleza',
        objectPosition: 'center 20%',
        orientation: 'vertical'
    },
    {
        id: 2,
        src: photo3,
        alt: 'Sesión XV - A Caballo',
        caption: 'Recuerdos que Brillan',
        subtitle: 'Sesión con caballo blanco',
        objectPosition: 'center 20%',
        orientation: 'vertical'
    },
    {
        id: 3,
        src: photo5,
        alt: 'Sesión XV - Bajo el Arco',
        caption: 'Un Sueño Hecho Realidad',
        subtitle: 'Celebrando la vida',
        objectPosition: 'center 25%',
        orientation: 'vertical'
    }
]

const HORIZONTAL_PHOTO: GalleryPhoto = {
    id: 4,
    src: photo2,
    alt: 'Sesión XV - Momentos Inolvidables',
    caption: 'Momentos Inolvidables',
    subtitle: 'La magia de este día',
    objectPosition: 'center 25%',
    orientation: 'horizontal'
}

export const GallerySection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const { onOpenModal, onSetModalContent } = useModal()
    const galleryConfig = sections.gallery

    if (!galleryConfig?.showGallery) {
        return null
    }

    const handlePhotoClick = (photo: GalleryPhoto) => {
        onSetModalContent(photo.src)
        onOpenModal(MODAL_NAMES.gallery, photo.caption)
    }

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-section__container">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <SectionHeader
                        pretitle="Momentos Especiales"
                        title="Galería de Fotos"
                        align="center"
                    />
                    <p className="gallery-section__intro">
                        "Cada fotografía guarda un instante que perdurará para siempre en nuestro corazón."
                    </p>
                </motion.div>

                <div className="gallery-section__grid">
                    <div className="gallery-section__verticals">
                        {VERTICAL_PHOTOS.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                            >
                                <div
                                    className="gallery-section__card gallery-section__card--vertical"
                                    onClick={() => handlePhotoClick(photo)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Ver foto: ${photo.caption}`}
                                    onKeyDown={(e) => e.key === 'Enter' && handlePhotoClick(photo)}
                                >
                                    <div className="gallery-section__card-inner">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="gallery-section__card-img"
                                            style={{ objectPosition: photo.objectPosition }}
                                            loading="lazy"
                                        />
                                        <div className="gallery-section__card-overlay">
                                            <div className="gallery-section__card-zoom-icon">
                                                <MagnifyingGlassPlusIcon size={18} weight="bold" />
                                            </div>
                                            <p className="gallery-section__card-caption">
                                                {photo.caption}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="gallery-section__horizontal"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
                    >
                        <div
                            className="gallery-section__card gallery-section__card--horizontal"
                            onClick={() => handlePhotoClick(HORIZONTAL_PHOTO)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Ver foto: ${HORIZONTAL_PHOTO.caption}`}
                            onKeyDown={(e) => e.key === 'Enter' && handlePhotoClick(HORIZONTAL_PHOTO)}
                        >
                            <div className="gallery-section__card-inner">
                                <img
                                    src={HORIZONTAL_PHOTO.src}
                                    alt={HORIZONTAL_PHOTO.alt}
                                    className="gallery-section__card-img"
                                    style={{ objectPosition: HORIZONTAL_PHOTO.objectPosition }}
                                    loading="lazy"
                                />
                                <div className="gallery-section__card-overlay">
                                    <div className="gallery-section__card-zoom-icon">
                                        <MagnifyingGlassPlusIcon size={18} weight="bold" />
                                    </div>
                                    <p className="gallery-section__card-caption">
                                        {HORIZONTAL_PHOTO.caption}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
