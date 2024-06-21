import styles from './index.module.css'
import { RewindCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import QRCode from 'qrcode'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

interface Lesson {
  id: string
  simula: string
}

function QrStudents() {
  const [src, setSrc] = useState<string>('')
  const [qrCodeData, setQrCodeData] = useState('')
  const [count, setCount] = useState<number>(0)

  //DELETAR O CODIGO COUNT
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        // const id = Pegar do localhost
        const id = localStorage.getItem('lessonId')
        if (!id) {
          console.error('Id nao encontrado')
          return
        }
        const lessonData: Lesson = {
          id: id,
          simula: `conteudo ${count}`
        }

        const response = await axios.get(`http://localhost:3758/lesson/${id}`)

        const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(response.data))
        // const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(data));
        setQrCodeData(qrCodeUrl)
        console.log('QR gerado', qrCodeUrl)

        setCount(pCount => pCount + 1)
      } catch (error) {
        console.error('Erro ao gerar o QR Code', error)
      }
    }
    generateQRCode()
    const intervalId = setInterval(generateQRCode, 5000)
    return () => clearInterval(intervalId)
  }, [count])

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
        {qrCodeData && <img src={qrCodeData} />}
      </main>
    </section>
  )
}
//{qrCodeData && <img src={qrCodeData} alt="QR Code" />}

/*      
      <button type='button' onClick={generateQRCode}></button>*/

export default QrStudents
