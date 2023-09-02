import { catalogo } from "./utilidades";

const idProdutoCarrinhoComQuantidade =
{

};

function abrirCarrinho()
{
    document.getElementById("carrinho").classList.add('right-[0px]');
    document.getElementById("carrinho").classList.remove('right-[-360px]');
}

function fecharCarrinho()
{
    document.getElementById("carrinho").classList.remove('right-[0px]');
    document.getElementById("carrinho").classList.add('right-[-360px]');
}

export function inicializarCarrinho()
{
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function renderizarProdutosCarrinho()
{
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    containerProdutosCarrinho.innerHTML = "";

    for(const idProduto in idProdutoCarrinhoComQuantidade)
    {
    desenharProdutoNoCarrinho(idProduto);
    }
}

function removerDoCarrinho(idProduto)
{
    delete idProdutoCarrinhoComQuantidade[idProduto];
    renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto)
{
    idProdutoCarrinhoComQuantidade[idProduto]++;
    atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto)
{
    if (idProdutoCarrinhoComQuantidade[idProduto] === 1) 
    {
        removerDoCarrinho(idProduto);
        return;    
    }

    idProdutoCarrinhoComQuantidade[idProduto]--;
    atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto)
{
    document.getElementById(`quantidade-${idProduto}`).innerText = idProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto)
{
    const produto = catalogo.find((p) => p.id === idProduto);
    // p = produto P
    
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

    const elementoArticleProduto = document.createElement('article');
    const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'p-2', 'relative'];

    for(const articleClass of articleClasses)
    {
        elementoArticleProduto.classList.add(articleClass);
    }

    const cartaoProdutoCarrinho =
    `
    <button class="absolute top-0 right-2" id="remover-item-${produto.id}">
      <i class="fa-regular fa-circle-xmark text-black hover:text-red-800"></i>
    </button>

    <img class="h-24 rounded-lg" src="img/${produto.imagem}" alt="Carrinho: ${produto.nome}">

    <div class="p-2 flex flex-col justify-between">
        <p class="text-black text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
    </div>

    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <button id='decrementar-produto-${produto.id}'>-</button>
        <p id='quantidade-${produto.id}' class="ml-2">${idProdutoCarrinhoComQuantidade[produto.id]}</p>
        <button id='incrementar-produto-${produto.id}' class="ml-2">+</button> 
    </div>

    </article>
    `;

    elementoArticleProduto.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticleProduto);

    document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id));

    document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

    document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));
}

export function adicionarAoCarrinho(idProduto)
{
    if (idProduto in idProdutoCarrinhoComQuantidade)
    {
        incrementarQuantidadeProduto(idProduto);
        return;
    };

    idProdutoCarrinhoComQuantidade[idProduto] = 1;
    desenharProdutoNoCarrinho(idProduto);
}