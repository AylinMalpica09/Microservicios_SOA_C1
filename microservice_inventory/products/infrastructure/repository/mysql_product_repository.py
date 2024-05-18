import datetime
import random
import string
from database.mysql import DBConnection, Base
from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.orm import sessionmaker
from products.domain.entity.product import Products
from products.domain.repository.product_repository import ProductsInterface

class Product(Base):
    __tablename__ = 'products'

    id = Column(String(255), primary_key=True)
    name = Column(String(255))
    price = Column(Float)
    stock = Column(Integer)
    deleted_at = Column(DateTime, default=None)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "stock": self.stock,
            "deleted_at": self.deleted_at
        }


class ProductRepository(ProductsInterface):
    def __init__(self):
        self.session = DBConnection().get_session()

    def get_products(self):
        products = self.session.query(Product).filter(Product.deleted_at == None).all()
        return products

    def generate_id(self):
        letters = ''.join(random.choice(string.ascii_lowercase) for _ in range(3))
        numbers = ''.join(random.choice(string.digits) for _ in range(3))
        return f"{letters}{numbers}"

    def add_product(self, product: Products):
        product_id = self.generate_id()
        product = Product(id=product_id, name=product.name, price=product.price, stock=product.stock)
        self.session.add(product)
        self.session.commit()
        return product

    def remove_product(self, product_id):
        product = self.get_id_product(product_id)
        if product:
            product.deleted_at = datetime.datetime.now()
            self.session.commit()
        return product

    def get_id_product(self, product_id):
        if isinstance(product_id, Product):
            product_id = product_id.id
        return self.session.query(Product).filter(Product.id == product_id, Product.deleted_at == None).first()
