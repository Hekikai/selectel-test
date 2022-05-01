export const generateDateFromSpecifiedTime = (lhs, rhs) => {
    const time = new Date(lhs.getTime() + Math.random() * (rhs.getTime() - lhs.getTime()))
    return time.toLocaleDateString('ru-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    })
}