import styled from 'styled-components'

export const Section = styled.section`
  min-width: 200px;
  max-width: 500px;
  background: #dddddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const TasksListContainer = styled.div`
  height: 500px;
  overflow-y: scroll;
`

export const Header = styled.h2`
  text-transform: uppercase;
`
