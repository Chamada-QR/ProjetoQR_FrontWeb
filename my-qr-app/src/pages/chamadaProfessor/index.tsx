import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { CompactTable } from '@table-library/react-table-library/compact';

import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme }  from "@table-library/react-table-library/baseline";
import React from "react";
import { MagnifyingGlass, Trash, UserPlus, RewindCircle } from "@phosphor-icons/react";
import ProgrssBar from "../../components/BarraProgresso";

function ListaAlunos(){
  const [data, setData] = useState({
    nodes: [    
      {
        id: "1",
        nome: "Task 1",
        data: new Date(),
        ra: "TYPE 1",
        isComplete: true,
        nodes: [{ id: "1.1", nome: "Subtask 1" }, { id: "1.2", nome: "Subtask 2" }],        
      },
      {
        id: "2",
        nome: "Task 2",
        data: new Date(),
        ra: "TYPE 2",
        isComplete: false,
        nodes: [],
      },
      {
        id: "3",
        nome: "Task 2",
        data: new Date(),
        ra: "TYPE 2",
        isComplete: false,
        nodes: [],
      },
      {
        id: "4",
        nome: "Task 2",
        data: new Date(),
        ra: "TYPE 2",
        isComplete: false,
        nodes: [],
      },  
    ],
  });

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background: rgba(255, 255, 255, 1);
        font-family: Poppins;
      `,
      Row: `
        &:nth-of-type(odd) {
          background: rgba(38, 84, 246, 0.48);
          ;
        }

        &:nth-of-type(even) {
          background: rgba(255, 255, 255, 1);
        }

        font-family: Open Sans;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
      `,
    },
  ]);

  const COLUMNS =[
    { label: "Nome", renderCell: (item: any) => item.nome },
    {
      label: "Data",
      renderCell: (item: any) =>
        item.data.toLocaleDateString("en-Us", {
          years: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "RA", renderCell: (item: any) => item.ra },
    {
      label: "Açao",
      renderCell: (item: any) => 
        <div>
          <button className={styles.botao}>
            <Trash size={25} weight="bold" />
          </button>
        </div>
    },
    { label: "Task", renderCell: (item: any) => item.nodes?.lenght },
  ];

  const [search, setSearch] = React.useState(""); 
  
  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filteredData = {
      nodes: data.nodes.filter((item) =>
        item.nome.toLowerCase().includes(search.toLowerCase())
      ),
    };
    setData(filteredData);
  }, [search]);

  const [progresso, setProgresso] = useState<number>(50);

  const addProgresso = () => {
    if(progresso < 100){
      setProgresso((progresso) => progresso + 10);
    }
  };

  const menosProgresso = () => {
    if(progresso > 0){
      setProgresso((progresso) => progresso - 10);
    }
  };

  return (
    <section className={styles.fundo_tela}>

      <div className={styles.next}>
        <button className={styles.botao_next}>
          <RewindCircle size={32} weight="bold" />
        </button>
      </div>    

      <div className={styles.container_tabela}>
        <div className={styles.user}>  
          <button className={styles.button_user}>
            <UserPlus size={20} weight="bold" />
          </button>
        </div>
        <div className={styles.tabela}>        
        
          <label htmlFor="search" className={styles.buscar}>
            Buscar Nome:
            <input className={styles.search} id="search" type="text" value={search} onChange={handleSearch}/>
            <MagnifyingGlass size={18} weight="bold"
            style={{
            position: 'absolute',
            marginTop: '2px',
            marginRight: '5px',
            color: 'rgba(255, 255, 255, 1)',
            }} />
          </label>

          <CompactTable 
          columns={COLUMNS}
          data={data} 
          theme={theme}     
          layout={{ isDiv: true, fixedHeader: true}}
          id={styles.tabelaCompact}/>
        
          <div className={styles.container}>
            <div className={styles.flex_container}> 
              <ProgrssBar progresso={progresso}/>
              <span className={styles.porcentagem} > {progresso}% </span> 
            </div>

            <div className={styles.botao_progresso}>
              <button onClick={addProgresso} className={styles.button_blue}>+</button>

              <button onClick={menosProgresso} className={styles.button_red}>-</button>
            </div>

            <div className={styles.botao_finalizar}>
              <button className={styles.button_finalizarChamada}>Finalizar chamada</button>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default ListaAlunos;