const min = 1
const max = 6

export const rollOneDice = () => Math.floor(Math.random() * (max - min + 1)) + min

export const rollTwoDices = () => [rollOneDice(), rollOneDice()]
