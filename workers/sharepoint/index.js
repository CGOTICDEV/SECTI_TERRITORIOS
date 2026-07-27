export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    console.log('SharePoint Worker chamado com URL:', url.pathname);
    
    if (url.pathname === '/api/sharepoint') {
      try {
        // Simulando uma resposta para teste
        const mockData = {
          territories: [
            {
              territory: "Teste",
              capacidade: {
                entidadesTotal: 5,
                campiUniversitarios: 2,
                campiIFs: 1,
                espacosDinamizadores: 1,
                incubadoras: 1,
                universidades: 1,
                icts: 2,
                centrosPesquisa: 1,
                parquesTecnologicos: 0,
              }
            }
          ],
          summary: { territories: 1 }
        };
        
        console.log('Respondendo com dados mock:', mockData);
        
        return new Response(JSON.stringify(mockData), {
          headers: { 
            'Content-Type': 'application/json',
            'X-Content-Source': 'cloudflare-worker',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        console.error('Erro no worker:', error);
        return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    return new Response('Not Found', { status: 404 });
  }
};