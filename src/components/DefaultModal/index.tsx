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
      <Modal
        className={styles.NewModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {true && children}
        <button onClick={closeModal}>X</button>
      </Modal>
    </section>
  )
}
