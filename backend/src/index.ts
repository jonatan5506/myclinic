import express, { Request, Response} from "express";
const app = express();
app.use(express.json());

app.get('/', (req: Request,res: Response) => {
    res.send("APK em Desenvolvimento!")
});

//ROTAS
import router from "./routes/index";
import cors from "cors";

app.use(cors());
app.use('/api', router);

const port = 3300
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});