const products = [
    "shirt"
]
const colors: any = {
    "shirt": [
        "blue",
        "black",
        "green"
    ]
}
const formFields = [
    "product",
    "color",
    "name",
    "email",
    "street",
    "zipcode",
    "city",
    "country"
]

function successResponse(formData: FormData) {
    return new Response(`Your order has arrived and would be processed, if this were an actual store. These are your order details:\
        Product = ${formData.get("shirt")}\
        Color = ${formData.get("color")}\
        Name: ${formData.get("fname")} ${formData.get("lname")}\
        Email: ${formData.get("email")}
        Address:\
        ${formData.get("street")}\
        ${formData.get("zipcode")} ${formData.get("city")}\
        ${formData.get("country")}`)
}
function invalidRequestResponse(formData: FormData) {
    return new Response(formData, {
        "status": 400,
        "statusText": "Bad Request"
    })
}

function orderIsValid(formData: FormData): boolean {
    for (const f of formFields) {
        if (formData.get(f) == null) {
            return false;
        }
    }
    if (!products.includes(formData.get("product") as string)) {
        return false;
    }
    if (!colors[formData.get("product") as string].includes(formData.get("color"))) {
        return false;
    }

    return true;
}

export default {
    async fetch(request: Request) {
        console.log(`${request.method}: ${request.url}`)
        if (request.url.endsWith("/order")) {
            if (request.method != "post") {
                return new Response("This endpoit only accepts POST requests.", {
                    "status": 405,
                    "statusText": "Method Not Allowed"
                })
            }
            const formData = await request.formData()
            if (orderIsValid(formData)) {
                return successResponse(formData)
            } else {
                return invalidRequestResponse(formData)
            }
        } else {
            return new Response("Only POST requests to /order are allowed on this server", {
                "status": 404
            })
        }
    }
}