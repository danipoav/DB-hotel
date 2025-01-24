import React, { ReactNode } from 'react'
import { Container, Content, ButtonCreate, Ul, Li, } from '../../styles/Generic/HeaderTable.styles';
import { MdAddCircleOutline } from "react-icons/md";

interface Filter {
  name: string,
  active: boolean
}

interface HeaderTableProps {
  title: string,
  onCreate: null,
  filters: Filter[],
  children: ReactNode
}

export default function HeaderTable({ title, onCreate, filters, children }: HeaderTableProps) {
  return (
    <Container>
      <ButtonCreate >
        New {title} <MdAddCircleOutline size={20} />
      </ButtonCreate>
      <Ul>
        {filters.map((filter, index) =>
          <Li key={index} active={filter.active}>
            {filter.name}
          </Li>
        )}
      </Ul>
      <Content>
        {children}
      </Content>
    </Container>
  )
}
