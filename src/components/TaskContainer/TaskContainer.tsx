import * as S from './TaskContainer.styled'
import { Task } from './task';
import { FC } from 'react';

type Props = {
  task: Task
}

export const TaskContainer: FC<Props> = ({task}) => {
  return (
    <S.Task draggable>
      {task.name} 
    </S.Task>
  )
}