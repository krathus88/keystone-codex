from ninja import Schema


class UserCreateSchema(Schema):
    username: str
    email: str


class UserOutSchema(Schema):
    id: int
    username: str
    email: str
    is_active: bool


class UserDeleteResponse(Schema):
    message: str
