export const createAdministratorAdapter = (id, admin, number) => {
    return {"id":id, "column_1": String(admin.name), "column_2": String(admin.mail), "number": number};
}