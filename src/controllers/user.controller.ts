import UserService from "../services/user.service.ts";

const getUsers = async ({ response }: { response: any }) => {
  try {
    const users = await UserService.findAll();
    response.body = users;
  } catch (error) {
    response.status = 400;
    response.body = { message: error.message };
    return response;
  }
};

const getUser = async ({
  response,
  params,
}: {
  response: any;
  params: any;
}) => {
  try {
    const user = await UserService.findByPk(params.id);
    if (!user) {
      response.body = { message: "No user has found." };
    }
    response.body = user;
  } catch (error) {
    response.status = 400;
    response.body = { message: error.message };
    return response;
  }
};

const addUser = async ({
  response,
  request,
}: {
  response: any;
  request: any;
}) => {
  try {
    const body = await request.body();
    const user = await UserService.create(body.value);
    response.body = user;
  } catch (error) {
    response.status = 400;
    response.body = { message: error.message };
    return response;
  }
};

const updateUser = ({ response }: { response: any }) => {
  // response.body = users;
};

const deleteUser = ({ response }: { response: any }) => {
  // response.body = users;
};

export { getUsers, getUser, addUser, updateUser, deleteUser };
