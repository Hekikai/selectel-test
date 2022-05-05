export const generateDateFromSpecifiedTime = (lhs, rhs) => (
    new Date(lhs.getTime() + Math.random() * (rhs.getTime() - lhs.getTime()))
)
