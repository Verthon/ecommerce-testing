import type { NextApiHandler } from "next";
import * as bcrypt from "bcrypt";

import {
  CreateAccountDocument,
  type CreateAccountMutation,
  type CreateAccountMutationVariables,
} from "../../../generated/graphql";
import { authorizedApiClient } from "app/api/apiClient";

const RegisterHandler: NextApiHandler = async (req, res) => {
  const { email, password, companyName } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await authorizedApiClient.mutate<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >({
    mutation: CreateAccountDocument,
    variables: {
      email,
      password: hashedPassword,
      companyName,
    },
  });

  res.json({ userId: user?.data?.createAccount?.id });
};

export default RegisterHandler;
