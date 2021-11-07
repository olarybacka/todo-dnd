import styled from 'styled-components'
import { colors } from 'utils/colors'

export const Section = styled.section`
  min-width: 200px;
  max-width: 500px;
  background: ${colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 0;
  border: 1px solid ${colors.gray};
  border-radius: 7px;
  margin-bottom: 20px;
`
export const TasksListContainer = styled.div`
  height: calc(100vh - 250px);
  overflow-y: scroll;
  padding: 0 10px;
`
export const Header = styled.div`
  padding: 20px;
  h2 {
    text-transform: uppercase;
    font-size: 18px;
    margin: 0;
  }
`
