import { lorem } from './lorem'

const getRandomIndex = () => Math.floor(Math.random() * lorem.length)

const getRandomNumberOfWords = (max: number) =>
  Math.floor(Math.random() * (max - 1)) + 1

export const getRandomName = () => {
  const startIndex = getRandomIndex()
  return lorem
    .slice(startIndex, startIndex + getRandomNumberOfWords(4))
    .join(' ')
}

export const getRandomDescription = () => {
  const startIndex = getRandomIndex()
  return lorem
    .slice(startIndex, startIndex + getRandomNumberOfWords(10))
    .join(' ')
}
