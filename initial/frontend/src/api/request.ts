// create a  function in the api/request.ts file that will fetch the data from the backend.
export const fetchData = async (url: string) => {
    const defaultURL = "http://localhost:8080/"

    return await fetch(defaultURL + url)
        .then((response) => {
            if (response.body) {
                return response.body.toString()
            }
        })
        .catch((error) => {
            return "Error: " + error
        })

}