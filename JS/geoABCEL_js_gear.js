// Intermediar as pesquisas/objetos com a página HTML


// Funções

// função para receber o texto do "storage" e colocar no html. (Apenas auxiliar para a função Gear)
function textFcontent(id, texto = "content") {
    const evento = document.getElementById(id);

    if (!evento) {
        console.warn(`No content: ${id}`);
        return;
    }

    evento.textContent = texto;
}
// função para configurar os botões da toolbar (Apenas auxiliar para a função Gear)
const bttC = function(id, dest_id) {
        const ID = document.getElementById(id);
        const DestID = document.getElementById(dest_id);
        ID.addEventListener("click", function() {
        DestID.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// Função para receber o Array onde está o id(identificação no html), e o texto(txt). Ao criar o Array dentro do "storage" coloco apenas o nome do array dentro do parenteses.
const Gear = (funcP) => {
    const verifB = funcP.some(obj => "P_id" in obj) 
    funcP.forEach(izinho => {
        
        textFcontent(izinho.B_id, izinho.txt)
        if (verifB == true)
        {
            bttC(izinho.B_id, izinho.P_id)
        }
    })
}


Gear(TBi); // toolbar
Gear(itd); // introdução
Gear(LAfs); // Leis Ambientais
Gear(mpB); // mapa do brasil card
Gear(CFM); // Historia da mineração card
Gear(MC);  // Minerais críticos
Gear(IAS); // Impactos Ambientais e Sociais