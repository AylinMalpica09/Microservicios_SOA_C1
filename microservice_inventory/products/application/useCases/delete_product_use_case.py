class DeleteProductUseCase:
    def __init__(self, product_repository):
        self.product_repository = product_repository

    def execute(self, product_id):
        product_id= self.product_repository.get_id_product(product_id)
        if product_id is None:
            raise Exception("Product not found")
        else:
            return self.product_repository.remove_product(product_id)