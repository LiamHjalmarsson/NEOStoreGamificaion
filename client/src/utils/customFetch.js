export const customFetch = async (path, request, method) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        let response = await fetch(`/api/${path}`, {
            method: method ? method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        let recourse = await response.json();

        return recourse;
    } catch (error) {
        return error;
    }
}