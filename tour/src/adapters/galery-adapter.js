export const createGaleryAdapter = (id, image) => {
    return {"id":id, "url": String(image.url), "date": image.date};
}