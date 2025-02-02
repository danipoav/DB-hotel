import React, { ReactNode, useState } from 'react'
import { Container, Content, ButtonCreate, Ul, Li, } from '../../styles/Generic/HeaderTable.styles';
import { MdAddCircleOutline } from "react-icons/md";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

interface Filter {
  name: string,
  active: boolean
}

interface HeaderTableProps {
  title: string,
  onCreate: Function,
  filters: Filter[],
  children: ReactNode
}

export default function HeaderTable({ title, onCreate, filters, children }: HeaderTableProps) {

  const [activeFilter, setActiveFilter] = useState(filters.find((filter) => filter.active)?.name || '')
  const location = useLocation()

  const handleClickFilter = (name: string) => {
    setActiveFilter(name);
  }

  const pathname = location.pathname.includes('create') || location.pathname.includes('show') 
  return (
    <>
      {pathname ? <Outlet /> :
        <Container>
          <ButtonCreate onClick={() => onCreate()}>
            New {title} <MdAddCircleOutline size={20} />
          </ButtonCreate>
          <Ul>
            {filters.map((filter, index) =>
              <Li key={index} active={filter.name === activeFilter} onClick={() => handleClickFilter(filter.name)}>
                {filter.name}
              </Li>
            )}
          </Ul>
          <Content>
            {React.cloneElement(children as React.ReactElement<any>, { activeFilter })}
          </Content>
        </Container>}
    </>
  )
}
