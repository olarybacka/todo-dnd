import styled from 'styled-components'
import { colors } from 'utils/colors'

export const Task = styled.article`
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  text-align: start;
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  height: 70px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`
export const Body = styled.div`
  font-size: 10px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: calc(100% - 50px);
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
  font-size: 13px;
`
