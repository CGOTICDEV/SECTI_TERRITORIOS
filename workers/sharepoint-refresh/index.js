export default {
  async scheduled(controller, env, ctx) {
    console.log('Executando refresh do SharePoint...');
    try {
      // Lógica de refresh do SharePoint
      // Aqui você implementaria a lógica para atualizar os dados do SharePoint
      console.log('Refresh do SharePoint concluído com sucesso');
    } catch (error) {
      console.error('Erro no refresh do SharePoint:', error);
    }
  },
  
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === '/sharepoint-refresh') {
      try {
        console.log('Executando refresh do SharePoint via requisição...');
        // Lógica de refresh do SharePoint
        return new Response(JSON.stringify({ message: 'Refresh do SharePoint executado com sucesso' }), {
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Erro no refresh', details: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    return new Response('Not Found', { status: 404 });
  }
};