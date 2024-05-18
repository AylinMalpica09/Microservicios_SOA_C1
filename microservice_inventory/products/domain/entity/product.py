import datetime
from dataclasses import dataclass


@dataclass
class Products:
    id: str
    name: str
    price: float
    stock: int
    deleted_at: datetime.time
