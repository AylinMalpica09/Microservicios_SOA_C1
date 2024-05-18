class CreateProductUseCase:
    def __init__(self, product_repository):
        self.product_repository = product_repository

    def execute(self, product):
        return self.product_repository.add_product(product)