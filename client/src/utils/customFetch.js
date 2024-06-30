export const customFetch = async (path, request, method) => {
    let formData = await request.formData();

    try {
        let response = await fetch(`/api/${path}`, {
            method: method ? method : "POST",
            headers: {},
            body: formData
        });

        let recourse = await response.json();

        return recourse;
    } catch (error) {
        return error;
    }
}