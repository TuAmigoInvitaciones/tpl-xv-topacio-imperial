import React from 'react'
import { Modal } from '@/common/components/modal/Modal'
import { useModal } from '@/common/hooks'

export const GalleryModal: React.FC = () => {
    const { modalContent, modalTitle } = useModal()

    return (
        <Modal size="lg">
            <div className="gallery-modal">
                <div className="gallery-modal__img-wrapper">
                    <img
                        src={modalContent}
                        alt={modalTitle || 'Fotografía ampliada'}
                        className="gallery-modal__img"
                    />
                </div>
            </div>
        </Modal>
    )
}
