from products.infrastructure.repository.mysql_product_repository import ProductRepository
from products.infrastructure.router.product_router import initialize_routes

from flask import Flask

app = Flask(__name__)

product_repository = ProductRepository()
initialize_routes(app, product_repository)

if __name__ == '__main__':
    app.run(port=8082)
