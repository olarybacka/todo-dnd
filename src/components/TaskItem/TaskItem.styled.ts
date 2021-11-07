import styled from 'styled-components'
import { colors } from 'utils/colors'
export const Task = styled.article`
  background: #fff;
  padding: 10px;
  margin: 20px;
  text-align: start;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Body = styled.div`
  font-size: 10px;
  color: #444;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${colors.blue};
  color: ${colors.white};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-size: 1vw;
`
