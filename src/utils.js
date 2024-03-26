export const getImgPath = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href
}