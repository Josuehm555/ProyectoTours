export const createGeneralInformationAdapter = (id, data) => {
    return {"id":id, "facebook": String(data.facebook), "aboutus": String(data.aboutus), "email": String(data.email), "instagram": String(data.instagram), "phone": String(data.phone) };
}