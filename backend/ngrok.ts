import ngrok from 'ngrok';

// Função para iniciar o ngrok em duas portas
async function startNgrok() {
  try {
    // Autenticação usando o token fornecido
    const authToken = '2lwDKDNT169L8n3czLX3wfbmXxM_5N6ADDiH15UZ4zzBZAJJx';
    await ngrok.authtoken(authToken);
    
    // Porta 3306 (MySQL)
    const mysqlUrl = await ngrok.connect({
      addr: 'http://localhost:3306',
      proto: 'http',
    });
    console.log(`Servidor rodando em: ${mysqlUrl}\n`);

    // Porta 3000 (aplicação frontend ou backend)
    const appUrl = await ngrok.connect({
      addr: 'http://localhost:3000',
      proto: 'http',
    });
    console.log(`Aplicação rodando em: ${appUrl}`);

  } catch (error) {
    console.error('Erro ao iniciar o ngrok:', error);
  }
}

// Executar a função de inicialização
startNgrok();
