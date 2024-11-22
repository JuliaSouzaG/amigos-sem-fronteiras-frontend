export interface Evento {
    nome: string,
    data: string,
    endereco: string,
    alocacao: {
        org: {
            nome: string,
            telefone: string,
        },
        local: {
            nome: string,
            responsavel: string,
            capacidade: number,
        }
    }
}