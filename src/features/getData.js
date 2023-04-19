export const getData = async () => {
    const response = await fetch(`https://random-data-api.com/api/v2/users?size=48`);

    if(!response.ok){
        new Error(response.statusText);
    }

    return await response.json();
};