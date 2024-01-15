export interface Post {
  key: number
  titulo: string
  data: {
    dia: string
    mes: string
    ano: string
  }
  resumo: string
  conteudo: string
  genero: string
  img: string
}