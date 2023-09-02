import { adicionarAoCarrinho } from "./menucarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo()
{
for (const produtoCatalogo of catalogo)
    {
const cartaoProduto = `<div  class='border-solid w-48 m-2 flex flex-col p-2 justify-between group shadow-xl shadow-slate-400 rounded-lg' id="card-produto-${produtoCatalogo.id}">
<img class="group-hover:scale-110 duration-300 my-3 rounded-lg" src="../img/${produtoCatalogo.imagem}" alt="produto do Magazine E-Commerce">
<p class='text-sm'>${produtoCatalogo.marca}</p>
<p class='text-sm'>${produtoCatalogo.nome}</p>
<p class='text-sm'>R$ ${produtoCatalogo.preco}</p>
<button id='adicionar-${produtoCatalogo.id}' class="bg-slate-950 text-slate-200 hover:bg-green-700">Adicionar<i class="fa-solid fa-cart-plus ml-2"></i></button>
</div>`;
    
document.getElementById("container-produto").innerHTML += cartaoProduto;
    }

    for(const produtoCatalogo of catalogo)
    {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}