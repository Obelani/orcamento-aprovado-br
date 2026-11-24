# Orçamento Aprovado: Quadros Elétricos Visuais

Página de vendas em pt-BR do kit de modelos de quadro de distribuição para eletricistas.

- `index.html` — página de vendas (Plano Simples R$ 10,00 / Kit Completo R$ 27,90)
- `style.css` — visual (navy + amarelo elétrico)
- `funnel.js` — links de checkout e repasse de UTMs
- `img/` — hero, antes/depois e imagem de compartilhamento (`og.jpg`)

## Links de checkout (trocar SÓ em `funnel.js`, no topo)

| Constante | Placeholder | Onde aparece |
|---|---|---|
| `CHECKOUT.SIMPLES` | `#CHECKOUT_SIMPLES` | botão do Plano Simples |
| `CHECKOUT.COMPLETO` | `#CHECKOUT_COMPLETO` | botão do Kit Completo, garantia e fechamento |

Cole a URL completa do checkout (Mivvo ou outra plataforma) no lugar dos placeholders. Os parâmetros da URL atual (UTMs) são repassados automaticamente para o checkout.

Exemplo:

```js
var CHECKOUT = {
  SIMPLES:  "https://app.mivvo.com.br/checkout/COLE_O_ID_DO_SIMPLES",
  COMPLETO: "https://app.mivvo.com.br/checkout/COLE_O_ID_DO_COMPLETO"
};
```

## Meta Pixel

O bloco do Pixel está comentado no `<head>` de `index.html`. Quando tiver o ID:

1. troque `PIXEL_ID` pelo número do pixel;
2. descomente o bloco;
3. o `InitiateCheckout` (R$ 10,00 no Simples e R$ 27,90 no Completo) já dispara no `funnel.js` quando o link de checkout for uma URL `http(s)`.

O evento de **Purchase** acontece no checkout da plataforma, não nesta página. Cole o mesmo ID do Pixel nas configurações do produto lá.

## O que a página não faz (de propósito)

- Sem preço âncora riscado
- Sem urgência falsa, countdown ou “pode aumentar”
- Sem depoimentos inventados
- Sem popup de saída
- O FAQ deixa claro que o kit **não substitui projeto elétrico nem ART** e **não garante conformidade com a NBR 5410**
