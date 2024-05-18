from flask import Blueprint, request, jsonify

from products.application.useCases.create_product_use_case import CreateProductUseCase
from products.domain.entity.product import Products

create_product_blueprint = Blueprint('create_product', __name__)


def initialize_endpoints(product_repository):
    create_product_use_case = CreateProductUseCase(product_repository)

    @create_product_blueprint.route('/', methods=['POST'])
    def create_product():
        data = request.get_json()
        product = Products(id=None, name=data['name'], price=data['price'], stock=data['stock'], deleted_at=None)
        product = create_product_use_case.execute(product)
        return jsonify(product.to_dict()), 201