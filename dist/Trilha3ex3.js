"use strict";
class Pagamento {
    processar() {
        console.log("Processando pagamento...");
    }
}
class PagamentoCartao extends Pagamento {
    processar() {
        console.log("Validando número do cartão e processando pagamento.");
    }
}
class PagamentoBoleto extends Pagamento {
    processar() {
        console.log("Gerando código de boleto.");
    }
}
function processarPagamentos(pagamentos) {
    pagamentos.forEach(pagamento => pagamento.processar());
}
const pagamentos = [new PagamentoCartao(), new PagamentoBoleto()];
processarPagamentos(pagamentos);
