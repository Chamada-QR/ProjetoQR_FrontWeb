import React from 'react'
import styles from './index.module.css'
import Modal from 'react-modal'

interface ModalProps {
  buttonChild?: React.ReactNode
  children: React.ReactNode
  buttonText?: String
}

export function DefaultModal({
  buttonText,
  children,
  buttonChild
}: ModalProps) {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <section className={styles.Container}>
      {true && <div onClick={openModal}>{buttonChild}</div>}
      {!buttonChild && (
        <button id="open" onClick={openModal}>
          {buttonText}
        </button>
      )}
      {/* <div className={styles.newModal}> */}
      <Modal
        className={styles.newModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {children}
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
      </Modal>
      {/* </div> */}
    </section>
  )
}
