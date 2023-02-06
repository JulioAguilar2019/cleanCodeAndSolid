(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    private httpAdapter: Object[] = [];
    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product);
    }
  }

  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['eduar@gmail.com'], 'to-clients');
    }
  }

  class Mailer {
    private masterEmail: string = 'julio@gmail.com';
    sendEmail(emailList: string[], template: 'to-clients' | 'to-admin') {
      console.log('Enviando correo a ', template);
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    onAddToCart(productId: number) {
      console.log('Agregando al carrito ', productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();
  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();
  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
