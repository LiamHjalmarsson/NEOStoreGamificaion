export const customFetch = async (path, request, method = "POST", isMultiPart = false) => {
    let formData = await request.formData();
    let options = {
        method,
        headers: {},
    };

    if (isMultiPart) {
        options.body = formData;
    } else {
        let data = Object.fromEntries(formData);
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    console.log(options);
    let response = await fetch(`/api/${path}`, options);
    let recourse = await response.json();
    console.log(response);
    console.log(recourse);

    return recourse;
};


export const fetchData = async (path) => {
    let response = await fetch(`/api/${path}`);
    let recourse = await response.json();

    return recourse;
}