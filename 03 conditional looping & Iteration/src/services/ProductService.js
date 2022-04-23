class ProductService {
  static productsList = [
    {
      id: "AA001",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSi0hnWb1e6JiA535srElRUWpzuoGZET4FP6zHwuK-eDm4JGuYhT3SlTk8D3T9V&usqp=CAc",
      model: "Fossil Rose",
      price: 1500,
      qty: 25,
    },
    {
      id: "AA002",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8q1MJeSp229UQRNgpuotBq5hJB--W4mwSzGd4U5bUBNrhIuxw8LTOz4aNu6CosFLx12juMCQUXZVjqIqGfy3IiVbpH-u10Os1E8AnOJvm&usqp=CAc",
      model: "Noise Color Fit",
      price: 1000,
      qty: 16,
    },
    {
      id: "AA003",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8apMjtKa_rk3bu6nFwUHBKRy_DURbMLplsFnMCyuvuTl7SeC6YUguKXGzCM3tI-icdV7qHd5y9Cs&usqp=CAc",
      model: "Groovy Rose",
      price: 500,
      qty: 0,
    },
    {
      id: "AA004",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSva2R-u2O0-A5n83211ZvMvA39fu9t9LlsWq0i9ZtHnP0cESOiNSPiDrYX4oFAxxtV03A3rZ7CcSFlmdAqvISjnl7pYZDmBpYjcrpN91QH&usqp=CAc",
      model: "Fasttrack",
      price: 2500,
      qty: 3,
    },
    {
      id: "AA001",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSi0hnWb1e6JiA535srElRUWpzuoGZET4FP6zHwuK-eDm4JGuYhT3SlTk8D3T9V&usqp=CAc",
      model: "Fossil Rose",
      price: 1500,
      qty: 25,
    },
    {
      id: "AA002",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8q1MJeSp229UQRNgpuotBq5hJB--W4mwSzGd4U5bUBNrhIuxw8LTOz4aNu6CosFLx12juMCQUXZVjqIqGfy3IiVbpH-u10Os1E8AnOJvm&usqp=CAc",
      model: "Noise Color Fit",
      price: 1000,
      qty: 16,
    },
    {
      id: "AA003",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8apMjtKa_rk3bu6nFwUHBKRy_DURbMLplsFnMCyuvuTl7SeC6YUguKXGzCM3tI-icdV7qHd5y9Cs&usqp=CAc",
      model: "Groovy Rose",
      price: 500,
      qty: 0,
    },
    {
      id: "AA004",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSva2R-u2O0-A5n83211ZvMvA39fu9t9LlsWq0i9ZtHnP0cESOiNSPiDrYX4oFAxxtV03A3rZ7CcSFlmdAqvISjnl7pYZDmBpYjcrpN91QH&usqp=CAc",
      model: "Fasttrack",
      price: 2500,
      qty: 3,
    },
  ];

  static getAllProducts() {
    return this.productsList;
  }
}

export default ProductService;
