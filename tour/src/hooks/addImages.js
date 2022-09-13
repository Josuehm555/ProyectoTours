export const addImage = (e, images) => {

    let indexImg;

    if (images.length > 0) {
        indexImg = images[images.length - 1].index + 1;
    } else {
        indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...newImgsToState, ...images];

    return newImgsState
}

const readmultifiles = (e, indexInicial) => {
    const files = e.currentTarget.files;
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
        const file = files[i];
        let url = URL.createObjectURL(file);

        arrayImages.push({
            index: indexInicial,
            url, file
        });
        indexInicial++;
    });
    return arrayImages;
}