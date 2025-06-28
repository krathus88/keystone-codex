from ninja import Router
from ninja.errors import HttpError
from user.models import User
from user.schemas import UserCreateSchema, UserOutSchema, UserDeleteResponse
from ninja.errors import HttpError
from typing import List


router = Router()


@router.get("/get/{user_id}", response=UserOutSchema)
def get_user(request, user_id: int):
    try:
        user = User.objects.get(id=user_id)
        return user
    except User.DoesNotExist:
        raise HttpError(404, "User not found")


@router.get("/list", response=List[UserOutSchema])
def list_users(request):
    return User.objects.all()


@router.post("/create", response=UserOutSchema)
def create_user(request, data: UserCreateSchema):
    user = User.objects.create(**data.dict())
    return user


@router.delete("/delete/{user_id}", response=UserDeleteResponse)
def delete_user(request, user_id: int):
    try:
        user = User.objects.get(id=user_id)
        user.delete()
        return {"message": f"User {user.username} deleted successfully."}
    except User.DoesNotExist:
        return {"message": "User not found."}
