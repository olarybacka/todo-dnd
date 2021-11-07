export type Column = {
  category: ColumnCategory
  name: string
}
export type ColumnCategory = 'todo' | 'inProgress' | 'review' | 'done'
