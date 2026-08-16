# Açaí Club PNZ — Cliente + Loja

## Como funciona
Cliente abre `public/cliente.html`, escolhe produtos e envia em `/api/orders`.
A loja abre `public/loja.html`; o painel consulta pedidos a cada 3 segundos, permite mudar status e imprimir.

## Publicação
Este projeto precisa de hospedagem com Node.js (por exemplo, Render/Railway/Fly.io ou servidor próprio). Aponte o serviço para `npm start`.
O banco desta versão é um arquivo `orders.json`; para produção com vários funcionários, recomenda-se trocar por PostgreSQL/Supabase.

## Importante
Não coloque senhas ou chaves privadas no frontend.
