export const createSubcategorieAdapter = (id, subcategory, number) => {
    return {"id":id, "column_1": String(subcategory.name), "column_2": String(subcategory.category), "column_3": String(subcategory.description), "image": "", "number": number};
}