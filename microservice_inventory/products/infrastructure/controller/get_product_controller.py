from flask import Blueprint

from products.application.useCases.get_product_use_case import GetProductUseCase

get_inventory_blueprint = Blueprint('get_inventory', __name__)


def initialize_endpoints(product_repository):
    get_inventory_use_case = GetProductUseCase(product_repository)

    @get_inventory_blueprint.route('/', methods=['GET'])
    def get_inventory():
        products = get_inventory_use_case.get_inventory()
        products = [product.to_dict() for product in products]
        return products, 200