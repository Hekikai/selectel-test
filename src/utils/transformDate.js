export const transformDate = (time) => {
    return time.toLocaleDateString('ru-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    })
}