import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { CompactTable } from '@table-library/react-table-library/compact'

import { useTheme } from '@table-library/react-table-library/theme'
import { getTheme } from '@table-library/react-table-library/baseline'
import React from 'react'
import {
  MagnifyingGlass,
  Trash,
  UserPlus,
  RewindCircle,
  QrCode
} from '@phosphor-icons/react'
import ProgressBar from '../../components/BarraProgresso'
import { Link } from 'react-router-dom'
import { DefaultModal } from '../../components/DefaultModal'

function ListaAlunos() {
  const [data, setData] = useState({
    nodes: [
      {
        id: '1',
        nome: 'Task 1',
        data: new Date(),
        ra: '12354',
        isComplete: true
      },
      {
        id: '2',
        nome: 'Task 2',
        data: new Date(),
        ra: '54564',
        isComplete: false
      },
      {
        id: '3',
        nome: 'Task 2',
        data: new Date(),
        ra: '82126',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      },
      {
        id: '4',
        nome: 'Task 2',
        data: new Date(),
        ra: '66823',
        isComplete: false
      }
    ]
  })

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        max-height:500px;
        border-radius:  10px;
        z-index: 0;
      `,
      HeaderRow: `
        background: rgba(255, 255, 255, 1);
        font-family: Poppins;
      `,
      Row: `
        &:nth-of-type(odd) {
          background: rgba(38, 84, 246, 0.48);
        }

        &:nth-of-type(even) {
          background: rgba(255, 255, 255, 1);
        }

        font-family: Open Sans;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        border-radius:  10px;

      `
    }
  ])

  const COLUMNS = [
    { label: 'Nome', renderCell: (item: any) => item.nome },
    {
      label: 'Data',
      renderCell: (item: any) =>
        item.data.toLocaleDateString('en-Us', {
          years: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
    },
    { label: 'RA', renderCell: (item: any) => item.ra },
    {
      label: 'Açao',
      renderCell: (item: any) => (
        <div>
          <button className={styles.botao}>
            <Trash size={25} weight="bold" />
          </button>
        </div>
      )
    }
    // { label: 'Task', renderCell: (item: any) => item.nodes?.lenght }
  ]

  const [search, setSearch] = React.useState('')

  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const filteredData = {
      nodes: data.nodes.filter(item =>
        item.nome.toLowerCase().includes(search.toLowerCase())
      )
    }
    setData(prevState => ({
      ...prevState,
      nodes: filteredData.nodes
    }))
  }, [search])

  const [progresso, setProgresso] = useState<number>(50)

  const addProgresso = () => {
    if (progresso < 100) {
      setProgresso(progresso => progresso + 10)
    }
  }

  const menosProgresso = () => {
    if (progresso > 0) {
      setProgresso(progresso => progresso - 10)
    }
  }

  return (
    <section className={styles.fundo_tela}>
      {/* Botão de voltar a pagina de login canto superior esquerdo */}
      <div className={styles.back}>
        <Link to="/">
          <RewindCircle weight="bold" />
        </Link>
      </div>

      <div className={styles.containerMain}>
        {/* Botão para adicionar um aluno na chamada*/}
        <div className={styles.buttonsContainer}>
          <h2 className={styles.headTitle}>
            Tabela de presença <span>em tempo real</span>
          </h2>
          <div className={styles.buttonsContainer}>
            {/* Botao para pagina do QR */}
            <Link target="_blank" to="/qr">
              <div className={styles.user}>
                <button className={styles.button_user}>
                  <QrCode size={32} weight="bold" />
                </button>
              </div>
            </Link>

            {/* Botao para modal */}
            <DefaultModal
              buttonChild={
                <div className={styles.user}>
                  <button className={styles.button_user}>
                    <UserPlus weight="bold" />
                  </button>
                </div>
              }
            >
              <form className={styles.formPresenca}>
                <input type="text" placeholder="Nome completo" />
                <input type="text" placeholder="Ra" />
                <button type="submit">Registrar presença</button>
              </form>
            </DefaultModal>
          </div>
        </div>

        {/* Container Tabela */}
        <div className={styles.containerTabela}>
          <label htmlFor="search" className={styles.buscar}>
            Buscar Nome:
            <input
              className={styles.search}
              id="search"
              type="text"
              value={search}
              onChange={handleSearch}
            />
            <MagnifyingGlass
              size={18}
              weight="bold"
              style={{
                position: 'absolute',
                marginTop: '2px',
                marginRight: '5px',
                color: 'rgba(255, 255, 255, 1)'
              }}
            />
          </label>

          <CompactTable
            columns={COLUMNS}
            data={data}
            className={styles.tabela}
            theme={theme}
            layout={{ isDiv: true, fixedHeader: true }}
            id={styles.tabelaCompact}
          />
        </div>

        {/* Barra de progresso */}
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}>
            <ProgressBar progresso={progresso} />
          </div>

          <div className={styles.botaoProgresso}>
            <button onClick={addProgresso} className={styles.button_blue}>
              +
            </button>

            <button onClick={menosProgresso} className={styles.button_red}>
              -
            </button>
          </div>

          <div className={styles.botaoFinalizar}>
            <button className={styles.button_finalizarChamada}>
              Finalizar chamada
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListaAlunos
