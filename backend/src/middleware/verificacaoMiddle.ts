import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verificacaoToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const tokenAcesso = req.headers.authorization;

    if (!tokenAcesso) {
       res.status(401).json({ message: "Usuário não autorizado!" });
    }

    const token = tokenAcesso!.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Token inválido!" });
    }

    const chaveSecreta = process.env.SECRET_KEY;
    const dadosToken = verify(token, chaveSecreta!);
    next();
  } catch (error) {
    res.status(500).json({ message: "Usuário não autorizado(Token)!" });
  }
};



// //Antes de chamar logarUsuario, vai chamar a middleware
// import { Request, Response, NextFunction } from "express";
// import { verify } from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

// export const verificacaoToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const tokenAcesso = req.headers.authorization;

//   if (!tokenAcesso) {
//     return res.status(401).json({ message: "Usuário não autorizado!" });
//   }

//   const token = tokenAcesso.split(" ")[1];

//   try {
//     const chaveSecreta = process.env.SECRET_KEY;
//     const dadosToken = verify(token, chaveSecreta!);

//     if (dadosToken) {
//       return next();
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Usuário não autorizado(Token)!" });
//   }
// };
