const lista_produto = {
  titulo: "Veja nossos produtos!",

  lista: [
    {
      id: 1,
      nome: "Low Fade",
      descricao: "Corte Low Fade Masculino Atual",
      preco: "R$ 45,00",
      imagem: require('../../assets/produto1.png'),
      imagensModal: [
        require('../../assets/produto1.png'),
        require('../../assets/produto2.png'),
        require('../../assets/produto3.png'),
        require('../../assets/produto4.png'),
      ],
    },

    {
      id: 2,
      nome: "Cacheado",
      descricao: "Corte Cacheado Masculino Atual",
      preco: "R$ 45,00",
      imagem: require('../../assets/produto5.png'),
      imagensModal: [
        require('../../assets/produto5.png'),
        require('../../assets/produto6.png'),
        require('../../assets/produto7.png'),
        require('../../assets/produto8.png'),
      ],
    },
    {
      id: 3,
      nome: "Pompadour",
      descricao: "Corte Pompadour Moderno Masculino",
      preco: "R$ 45,00",
      imagem: require('../../assets/produto9.png'),
      imagensModal: [
        require('../../assets/produto9.png'),
        require('../../assets/produto10.png'),
        require('../../assets/produto11.png'),
        require('../../assets/produto12.png'),
      ],
    },
  ],
};

export default lista_produto;
