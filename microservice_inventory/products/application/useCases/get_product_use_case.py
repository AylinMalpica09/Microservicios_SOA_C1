class GetProductUseCase:
    def __init__(self, product_repository):
        self.inventory_repo = product_repository

    def get_inventory(self):
        return self.inventory_repo.get_products()