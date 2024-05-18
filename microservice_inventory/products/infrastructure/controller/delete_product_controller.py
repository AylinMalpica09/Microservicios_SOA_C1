from flask import Blueprint, request, jsonify

from products.application.useCases.delete_product_use_case import DeleteProductUseCase
from products.domain.entity.product import Products

delete_product_blueprint = Blueprint('delete_product', __name__)


def initialize_endpoints(product_repository):
    delete_product_use_case = DeleteProductUseCase(product_repository)

    @delete_product_blueprint.route('/<id>', methods=['DELETE'])
    def delete_product(id):
        product = delete_product_use_case.execute(id)
        return jsonify(product.to_dict()), 200