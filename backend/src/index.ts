import express, { Request, Response} from "express";
const app = express();
app.use(express.json());

app.get('/', (req: Request,res: Response) => {
    res.send("APK em Desenvolvimento!")
});

//ROTAS
import router from "./routes/index";

// Configuração do CORS
import cors from "cors";
const corsOptions = {
    origin: ['*'], // substitua pelo seu link do ngrok
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // adicione outros métodos se necessário
    allowedHeaders: ['Content-Type'], // adicione outros cabeçalhos se necessário
};

app.use(cors(corsOptions));

//v1
// import cors from "cors";
// app.use(cors());

app.use('/api', router);

const port = 3300
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});