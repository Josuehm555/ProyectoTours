export const createCategorieAdapter = (id, categorie, number) => {
    return {"id":id, "column_1": String(categorie.name), "column_2": String(categorie.description), "images": categorie.images, "number": number};
}