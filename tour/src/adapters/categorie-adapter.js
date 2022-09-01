export const createCategorieAdapter = (id, categorie) => {
    return {"column_1": String(id), "column_2": String(categorie.nombre), "column_3": String(categorie.description), "urlSee": "", "urlUpdate": "", "urlDelete": ""};
}