import styles from './index.module.css'
import { RewindCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import QRCode from 'qrcode'
import { useEffect, useState } from 'react'
import axios from 'axios'



function qrStudents() {
  const[src, setSrc] = useState<string>('')
  const [qrCodeData, setQrCodeData] = useState<string>('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const response = await axios.post('http://seu-backend.com/endpoint', {
       });

       const data = response.data;
       const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(data));
       setQrCodeData(qrCodeUrl);
      }catch(error){
        console.error('Erro ao gerar o QR Code', error);
      }
    };
    generateQRCode();
    const intervalId = setInterval(generateQRCode, 5000);
    return () => clearInterval(intervalId);
  }, []);


  const generate = () => {
    QRCode.toDataURL('https://github.com').then(setSrc)
  }

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
      </main>
      <img src={src}/>
      <button type='button' onClick={generate}></button>
    </section>
  )
}
//{qrCodeData && <img src={qrCodeData} alt="QR Code" />} 
export default qrStudents
