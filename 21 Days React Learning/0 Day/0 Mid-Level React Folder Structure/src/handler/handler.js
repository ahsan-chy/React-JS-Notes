import axios from 'axios'
import PrefHandler from '../local/PrefHandler'

const prefs = new PrefHandler()
const consoleAllowed = true

export default class WebHandler {
    /////////////////////////////// Post Method ////////////////////////////////
    sendPostDataRequest(url, bodyParams, onSuccess, onFailure) {
        prefs.getSession((result) => {

            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }

            if (result.token) {
                headers.Authorization = "Bearer " + result.token
            }

            console.log("------------API POST REQUEST--------------")
            console.log("URL==>", url)
            // console.log("HEADER==>", headers)
            console.log("BODYPARAMS==>", JSON.stringify(bodyParams))
            console.log("TOKEN==>", result.token)

            let requestOptions = {
                method: 'POST',
                headers: headers,
                body: bodyParams
              };

            fetch(url, requestOptions)
                .then((response) => {
                //    console.log("RESPOSNE==>", JSON.stringify(response))
                return response.json();
                    // const respJson = response.data
                    // console.log("RESPOSNE==>", JSON.stringify(respJson))
                   
                }).then((res) => {
                     console.log("RESPOSNE==>", JSON.stringify(res))
                    if (res.status == true) {
                        onSuccess(res)
                    } else {
                        onFailure(res)
                    }
                }).catch((error) => {
                    console.log("RESPOSNE Error==>", error);
                    onFailure(error)
                })
        })
    }
     /////////////////////////////// Post Method ////////////////////////////////
     sendPostDataRequestNoti(url, bodyParams, onSuccess, onFailure) {
        prefs.getSession((result) => {

            console.log("------------API POST REQUEST--------------")
            console.log("URL==>", url)
            console.log("BODYPARAMS==>", JSON.stringify(bodyParams))
            console.log("TOKEN==>", result.token)

            axios.post(url, bodyParams, {
                "headers": {
                    "content-type": "application/json",
                    "Accept": "application/json",
                    "Authorization" : 'Bearer '+ result.token
                    },
            })
                .then(async (response) => {
                    const respJson = response.data
                    console.log("RESPOSNE==>", JSON.stringify(respJson))
                    if (respJson.status == true) {
                        onSuccess(respJson)
                    } else {
                        onFailure(respJson)
                    }
                }).catch((error) => {
                    console.log("RESPOSNE Error==>", error);
                    onFailure(error)
                })
        })
    }

    /////////////////////////////// Post Method ////////////////////////////////
    sendPostSignupRequest(url, bodyParams, onSuccess, onFailure) {
        prefs.getSession((result) => {

            let headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }

            if (result.token) {
                headers.Authorization = "Bearer " + result.token
            }

            console.log("------------API POST REQUEST--------------")
            console.log("URL==>", url)
            // console.log("HEADER==>", headers)
            console.log("BODYPARAMS==>", JSON.stringify(bodyParams))
            console.log("TOKEN==>", result.token)

            axios.post(url, bodyParams, {
                headers: headers
                // "headers": {
                //     "content-type": "application/json",
                //     "Accept": "application/json",
                //     "Authorization": 'Bearer ' + result.token
                // },
            })
                .then(async (response) => {
                    const respJson = response.data
                    console.log("RESPOSNE==>", JSON.stringify(respJson))
                    if (respJson.status == true) {
                        onSuccess(respJson)
                    } else {
                        onFailure(respJson)
                    }
                }).catch((error) => {
                    console.log("RESPOSNE Error==>", error);
                    onFailure(error)
                })
        })
    }

    //////////////////////////////////// Get Method //////////////////////////////////////
    async sendGetDataRequest(url, onSuccess, onFailure) {
        prefs.getSession((result) => {
            let headers = {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }

            if (result.token) {
                headers.Authorization = "Bearer " + result.token
            }
            console.log("---------------API GET REQUEST--------------")
            console.log("URL==>", url)
            console.log("HEADER==>", headers)
            // console.log("PARAMS==>", params)

            axios.get(url, {
                headers: headers,
            }).then((response) => {
                const respJson = response.data
                if (respJson.status == true) {
                    onSuccess(respJson)
                } else {
                    onFailure(respJson)
                }
            }).catch((error) => {
                console.log("RESPOSNE==>", error);
            })
        })
    }

    ////////// Logout Post Method ////////////////////////
    sendPostLogoutRequest(url, onSuccess, onFailure) {
        prefs.getSession((result) => {

            console.log("------------API POST REQUEST--------------")
            console.log("URL==>", url)

            axios.post(url, "", {
                "headers": {
                    "content-type": "application/json",
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + result.token
                },
            })
                .then(async (response) => {
                    const respJson = response.data
                    console.log("RESPOSNE==>", JSON.stringify(respJson))
                    if (respJson.status == true) {
                        onSuccess(respJson)
                    } else {
                        onFailure(respJson)
                    }
                }).catch((error) => {
                    console.log("RESPOSNE==>", error.message);
                    onFailure(error)
                })

        })
    }

    ///////////////////////////////////// Simple Get //////////////////////////////////////////////
    sendGetRequest(url, onSuccess, onFailure) {
        console.log("Url", url)
        axios.get(url)
            .then((resp) => {
                const respJson = resp.data
                onSuccess(respJson)
            })
            .catch((error) => {
                console.log(error)
                onFailure(error)
            })
    }


    sendSimplePostRequest(url, body, onResponse, onError) {

        if (consoleAllowed) {
            console.log("=====================API CALLED========================")
            console.log("URL=====> ", url)
            console.log("BODY PART=====> ", body)
        }

        axios.post(url, body, {
            "headers": {
                "content-type": "application/json",
                "Accept": "application/json",

            },
            // headers: { 
            //     'Content-Type': 'application/x-www-form-urlencoded' ,
            //     // Accept: 'application/json',
            //     // 'Content-Type': 'application/json',
            //     Accept: 'application/json',
            //     'Content-Type': 'multipart/form-data',
            // }
        }).then((resp) => {

            if (consoleAllowed) {
                console.log("Response======>", JSON.stringify(resp.data))
            }

            if (JSON.stringify(resp.data.status) == "true") {
                onResponse(resp)
            } else {
                onError(JSON.stringify(resp.data.message))
            }
        }).catch((ex) => {
            if (consoleAllowed) {
                console.log("Error=======>", ex)
            }
            if (ex == 'Error: Network Error') {
                onError("Network Request Failed")
            }
            else {
                onError(ex.message)
            }
        })
    }

}
