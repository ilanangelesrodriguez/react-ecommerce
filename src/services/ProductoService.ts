class ProductService {
    async getAllProducts() {
      const response = await fetch('/products.json');
      const data = await response.json();
      return data;
    }
  }
  
  export default ProductService;
  