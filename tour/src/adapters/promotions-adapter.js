export const createPromotionAdapter = (id, promotion, number) => {
    return {"id":id, "column_1": String(promotion.name), "column_2": String(promotion.description), "images": promotion.images, "number": number};
}