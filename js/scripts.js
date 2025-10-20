// Função para aplicar máscara no CPF
function mascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove tudo que não for número
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

// Função para aplicar máscara no telefone
function mascaraTelefone(tel) {
    tel = tel.replace(/\D/g, "");
    tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");
    tel = tel.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    return tel;
}

// Função para aplicar máscara no CEP
function mascaraCEP(cep) {
    cep = cep.replace(/\D/g, "");
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    return cep;
}

// Aplica as máscaras enquanto o usuário digita
document.addEventListener("DOMContentLoaded", function () {
    const inputCPF = document.getElementById("cpf");
    const inputTel = document.getElementById("telefone");
    const inputCEP = document.getElementById("cep");

    if (inputCPF) {
        inputCPF.addEventListener("input", function () {
            this.value = mascaraCPF(this.value);
        });
    }

    if (inputTel) {
        inputTel.addEventListener("input", function () {
            this.value = mascaraTelefone(this.value);
        });
    }

    if (inputCEP) {
        inputCEP.addEventListener("input", function () {
            this.value = mascaraCEP(this.value);
        });
    }
});
