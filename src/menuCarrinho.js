import { catalogo } from "./utilidades";

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

export function adicionarAoCarrinho(idProduto)
{
    const produto = catalogo.find((p) => p.id === idProduto);
    // p = produto P

    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

    const cartaoProdutoCarrinho =
    `<article class="flex bg-slate-100 rounded-lg p-2 relative">

    <button class="absolute top-0 right-2" id="fechar-carrinho">
      <i class="fa-regular fa-circle-xmark text-black hover:text-red-800"></i>
    </button>

    <img class="h-24 rounded-lg" src="img/${produto.imagem}" alt="Carrinho: ${produto.nome}">
    <div class="py-2">
    <p class="text-black text-sm">${produto.nome}</p>
    <p class="text-slate-400 text-xs">Tamanho: M</p>
    <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
    </div>
    </article>`;

    containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}