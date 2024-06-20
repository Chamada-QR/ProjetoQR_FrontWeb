import styles from './index.module.css'
import { RewindCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import QRCode from 'qrcode'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

function qrStudents() {
  const [src, setSrc] = useState<string>('')
  const [qrCodeData, setQrCodeData] = useState('')

  const QRCodeGenerator = () => {
    const generateQRCode = useCallback(async () => {
      try {
        const dia = new Date().toISOString().split('T')[0]
        const response = await axios.post('http://localhost:3578/lesson', {
          date: dia
        })

        const data = response.data
        const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(data.lessonId))
        setQrCodeData(qrCodeUrl)
      } catch (error) {
        console.error('Erro ao gerar o QR Code', error)
      }
    }, [])

    useEffect(() => {
      generateQRCode() // Generate the QR code initially
      const intervalId = setInterval(generateQRCode, 5000) // Set interval to generate QR code every 5 seconds
      return () => clearInterval(intervalId) // Cleanup interval on component unmount
    }, [generateQRCode]) // Use generateQRCode as a dependency
  }

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        // const id = Pegar do localhost
        const response = await axios.get(`http://localhost:3000/lesson/${id}`)

        const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(response.))
        // const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(data));
        setQrCodeData(qrCodeUrl)
      } catch (error) {
        console.error('Erro ao gerar o QR Code', error)
      }
    }
    generateQRCode()
    const intervalId = setInterval(generateQRCode, 5000)
    return () => clearInterval(intervalId)
  }, [])

  //  const generate = (linkRespostaApi) => {
  //   QRCode.toDataURL(linkRespostaApi).then(setSrc)
  //}

  return (
    <section className={styles.fundo_tela}>
      <div className={styles.back}>
        <Link to="/chamada_professor">
          <RewindCircle weight="bold" />
        </Link>
      </div>
      <main>
        <h2>
          Escanei{' '}
          <span>
            para confirmar
            <br /> sua presença
          </span>
        </h2>
        <img src={qrCodeData} />
      </main>
    </section>
  )
}
//{qrCodeData && <img src={qrCodeData} alt="QR Code" />}

/*      
      <button type='button' onClick={generateQRCode}></button>*/

export default qrStudents
