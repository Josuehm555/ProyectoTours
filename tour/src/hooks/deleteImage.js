export const deleteImage = (images, indexImage) => {
    const newImgs = []
    images.map((element, index) => {
        if (index !== indexImage) {
            newImgs.push(element)
        }
    });
    return newImgs
}