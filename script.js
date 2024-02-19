document.addEventListener('DOMContentLoaded', function() {
              fetchDataAndPopulateTable(); // Chama imediatamente ao carregar a página
          
              // Define um intervalo para atualizar os dados da tabela a cada 10 segundos
              setInterval(fetchDataAndPopulateTable,60000);
          });
          
          function fetchDataAndPopulateTable() {
              fetch('https://sheetdb.io/api/v1/8cbfwgfcsvsbr')
                  .then(response => response.json())
                  .then(data => {
                      const tableBody = document.getElementById('products-table').getElementsByTagName('tbody')[0];
                      tableBody.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados
          
                      // Limita a quantidade de dados exibidos para as 10 primeiras linhas
                      data.slice(0, 50).forEach(item => {
                          const row = tableBody.insertRow();
                          Object.values(item).forEach((text, index) => {
                              const cell = row.insertCell();
                              if (index === Object.values(item).length-1) { // Identifica a coluna do link
                                  const a = document.createElement('a');
                                  a.href = text;
                                  a.target = "_blank";
                                  a.textContent = "Link";
                                  cell.appendChild(a);
                              } else {
                                  cell.textContent = text;
                              }
                          });
                      });
                  })
                  .catch(error => console.error('Error fetching data: ', error));
          }
          
