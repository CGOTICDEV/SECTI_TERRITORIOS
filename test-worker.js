// Usando fetch nativo do Node.js

async function testWorker() {
  try {
    console.log('🔄 Testando SharePoint Worker...');
    
    const response = await fetch('https://sharepoint-worker.arthurfaleta52.workers.dev/api/sharepoint');
    
    console.log('Status:', response.status);
    console.log('Headers:', Object.fromEntries(response.headers));
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Resposta SharePoint Worker:', JSON.stringify(data, null, 2));
    } else {
      const text = await response.text();
      console.log('❌ Erro SharePoint Worker:', text);
    }
  } catch (error) {
    console.error('❌ Falha ao conectar SharePoint Worker:', error.message);
  }
}

async function testRefreshWorker() {
  try {
    console.log('\n🔄 Testando SharePoint Refresh Worker...');
    
    const response = await fetch('https://sharepoint-refresh-worker.arthurfaleta52.workers.dev/sharepoint-refresh');
    
    console.log('Status:', response.status);
    console.log('Headers:', Object.fromEntries(response.headers));
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Resposta SharePoint Refresh Worker:', JSON.stringify(data, null, 2));
    } else {
      const text = await response.text();
      console.log('❌ Erro SharePoint Refresh Worker:', text);
    }
  } catch (error) {
    console.error('❌ Falha ao conectar SharePoint Refresh Worker:', error.message);
  }
}

async function testBoth() {
  await testWorker();
  await testRefreshWorker();
}

testBoth();