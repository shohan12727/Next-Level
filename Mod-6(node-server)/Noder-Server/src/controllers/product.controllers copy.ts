// import type { IncomingMessage, ServerResponse } from "http";
// import type { IProduct } from "../types/products";
// import { sendResponse } from "../utils/sendResponse";
// import { bodyParser } from "../utils/parseBody";

const productController = async (req:IncomingMessage, res:ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlParams = url?.split("/");

    const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;

    if(url === "/products" && method === "GET") {
        try {
            const products = productsService();
            sendResponse(res, true, 200, "Products retrived successfully", products);

        } catch (error) {
            sendResponse(res, false, 500, "Internal server error");
        }

    } else if (method === "GET" && id !== null) {
        try{
            const products = productService();
            const product = products.find((p:IProduct) => p.id === id);

            if(!product) {
                return sendResponse(res, false, 404, "Product not found!");
            }
            sendResponse(res,true,200,"Product retrived successfully!", product);

        } catch (error) {
            sendResponse(res, false , 500,"Internal server error");
        }
    } else if (method === "POST" && url === "/product"){
        const body = await bodyParser(req);

        const newProduct = {
            id: Date.now(),
            ...body,
        };

        const products = ProductService();
        products.push(products);

        createProduct(products);

        res.writeHead(201, {"Contanet-Type": "application/json"});
        res.end(
            JSON.stringify({
                message: "Product created successfully!",
                data: newProduct, 
            }),
        );
    } else if (method === "PUT" && id !== null) {
        const body = await bodyParser(req);
        const products = productService();

        const index = products.findIndex((p:Iproduct) => p.id === id);

        if(index < 0) {
            res.writeHead(404, {"Content-Type":"application/json"});
            res.end(
                JSON.stringify({
                    message : "Product Not Found!",
                }),
            )
        }

        products[index] = {id: products[index].id, ...body};

        createProduct(products);

        res.writeHead(200, {"Content-Type": "application/json"});

        res.end(
            JSON.stringify({
                message: "Product Update successfully",
                data: products[index],
            }),
        );






    } else if (method === "DELETE" && id !== null) {
        const products = productService();
        const index = products.findIndex((p:IProduct) => p.id === id);

        if (index < 0){
            res.writeHead(404,{"Content-Type": "application/json"});
            res.end(
                JSON.stringify({
                    message: "Product Not Found!", 
                }),
            );
        }


        products.splice(index,1);

        createProduct(products);

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(
            JSON.stringify({
                message: "Product deleted successfully",
            }),
        );




    }

}