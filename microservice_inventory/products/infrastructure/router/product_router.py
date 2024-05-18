from products.infrastructure.controller.create_product_controller import create_product_blueprint, \
    initialize_endpoints as initialize_create_product
from products.infrastructure.controller.delete_product_controller import delete_product_blueprint, \
    initialize_endpoints as initialize_delete_product
from products.infrastructure.controller.get_product_controller import get_inventory_blueprint, \
    initialize_endpoints as initialize_get_product


def initialize_routes(app, product_repository):
    initialize_create_product(product_repository)
    initialize_delete_product(product_repository)
    initialize_get_product(product_repository)
    app.register_blueprint(create_product_blueprint)
    app.register_blueprint(delete_product_blueprint)
    app.register_blueprint(get_inventory_blueprint)
